import React, { ChangeEvent, MouseEvent, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { newAccount } from "@/api/certification";
import { checkAccount } from "@/api/account";
import { validateLength, validateNickname } from "@/utils/regExp";

import * as FormStyle from "@/style/common/Form-style";
import * as ButtonStyle from "@/style/common/Button-style";
import * as UserFormStyle from "@/style/common/UserForm-style";

interface Props {
    email: string;
}

const RegisterStep2 = ({ email }: Props) => {
    const navigate = useNavigate();

    const [userID, setUserID] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [nickname, setNickname] = useState("");

    const [userIDStep, setUserIDStep] = useState(0);
    const [nicknameStep, setNicknameStep] = useState(0);

    const validateConfirmPassword = password === confirmPassword;

    const disablePassword = validateLength(userID) && userIDStep === 3;
    const disableConfirmPassword = disablePassword && validateLength(password);
    const disableNickname = disableConfirmPassword && validateLength(confirmPassword);
    const disableNewAccount = disableNickname && validateNickname(nickname) && nicknameStep === 3;

    const checkMutation = useMutation({
        mutationFn: checkAccount,
        onSuccess: (data, variables) => {
            if (variables.target === "userID") {
                setUserIDStep(data.data ? 3 : 2);
            }

            if (variables.target === "nickname") {
                setNicknameStep(data.data ? 3 : 2);
            }
        },
    });

    const newAccountMutation = useMutation({
        mutationFn: newAccount,
        onSuccess: (data) => {
            console.log("가입하기", data.data);
            if (data.data.ok) {
                navigate("/");
            }
        },
    });

    let timerUserID: NodeJS.Timeout;
    const onChangeUserID = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target as any;
        setUserID(value);
        setUserIDStep(validateLength(value) ? 1 : 0);

        if (validateLength(value)) {
            clearTimeout(timerUserID);
            timerUserID = setTimeout(() => {
                checkMutation.mutate({
                    target: "userID",
                    value: value,
                });
            }, 1500);
        }
    };

    let timerNickname: NodeJS.Timeout;
    const onChangeNickname = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target as any;
        setNickname(value);
        setNicknameStep(validateLength(value) ? 1 : 0);

        if (validateLength(password)) {
            clearTimeout(timerNickname);
            timerNickname = setTimeout(() => {
                checkMutation.mutate({
                    target: "nickname",
                    value: value,
                });
            }, 1000);
        }
    };

    const onClickNewAccount = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        newAccountMutation.mutate({
            nickname: nickname,
            email: email,
            userID: userID,
            password: password,
        });
    };

    return (
        <>
            <UserFormStyle.InputWrap marginTop="2.5em">
                <FormStyle.FormContent>
                    <p>아이디</p>
                    <FormStyle.BasicsInputText
                        type="text"
                        placeholder="아이디를 입력해주세요."
                        value={userID}
                        onChange={onChangeUserID}
                    />
                    <FormStyle.MessageText warnning={userIDStep < 3}>
                        {userID && userIDStep === 0 && "4~6글자 이상 입력해주세요."}
                        {userIDStep === 2 && "중복된 아이디 입니다."}
                        {userID && userIDStep === 3 && "사용가능한 아이디 입니다."}
                    </FormStyle.MessageText>
                </FormStyle.FormContent>

                <FormStyle.FormContent>
                    <p>비밀번호</p>
                    <FormStyle.BasicsInputText
                        type="password"
                        placeholder="비밀번호를 입력해주세요."
                        disabled={!disablePassword}
                        value={password}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                            const { value } = e.target as any;
                            setPassword(value);
                        }}
                    />

                    <FormStyle.MessageText warnning={!validateLength(password)}>
                        {password && !validateLength(password) && "4~6글자 입력해주세요."}
                        {validateLength(password) && "사용가능한 비밀번호 입니다."}
                    </FormStyle.MessageText>
                </FormStyle.FormContent>

                <FormStyle.FormContent>
                    <p>비밀번호 확인</p>
                    <FormStyle.BasicsInputText
                        type="password"
                        placeholder="비밀번호를 입력해주세요."
                        disabled={!disableConfirmPassword}
                        value={confirmPassword}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                            const { value } = e.target as any;
                            setConfirmPassword(value);
                        }}
                    />
                    {password.length >= 6 && (
                        <FormStyle.MessageText warnning={!validateConfirmPassword}>
                            {confirmPassword &&
                                !validateConfirmPassword &&
                                "비밀번호가 일치하지 않습니다."}
                            {validateConfirmPassword && "비밀번호가 일치합니다."}
                        </FormStyle.MessageText>
                    )}
                </FormStyle.FormContent>

                <FormStyle.FormContent>
                    <p>닉네임</p>
                    <FormStyle.BasicsInputText
                        type="text"
                        placeholder="닉네임을 입력해주세요."
                        disabled={!disableNickname}
                        value={nickname}
                        onChange={onChangeNickname}
                    />
                    <FormStyle.MessageText warnning={nicknameStep < 3}>
                        {nickname &&
                            nicknameStep === 0 &&
                            "특수문자, 공백 제외, 2~8글자로 입력해주세요."}
                        {nicknameStep === 2 && "중복된 아이디 입니다."}
                        {nickname && nicknameStep === 3 && "사용가능한 닉네임 입니다."}
                    </FormStyle.MessageText>
                </FormStyle.FormContent>
            </UserFormStyle.InputWrap>

            <ButtonStyle.LongButton disabled={!disableNewAccount} onClick={onClickNewAccount}>
                가입하기
            </ButtonStyle.LongButton>
        </>
    );
};

export default RegisterStep2;
