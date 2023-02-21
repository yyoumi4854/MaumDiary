import React, { ChangeEvent, MouseEvent, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { newAccount } from "@/api/certification";
import { validateNickname } from "@/utils/regExp";

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

    const validateUserID = userID.length >= 6;
    const validatePassword = password.length >= 6;
    const validateConfirmPassword = password === confirmPassword;
    const validateNewAccount =
        validateUserID && validatePassword && validateConfirmPassword && validateNickname(nickname);

    const newAccountMutation = useMutation({
        mutationFn: newAccount,
        onSuccess: (data) => {
            console.log("가입하기", data);
            navigate("/");
        },
        onError: () => {
            // 중복된 아이디 입니다. -> alert로 띄우기
            // 중복된 닉네임 입니다.
            alert("이메일, 아이디, 닉네임중 하나가 중복입니다.");
        },
    });

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
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                            const { value } = e.target as any;
                            setUserID(value);
                        }}
                    />
                    <FormStyle.MessageText warnning={!validateUserID}>
                        {userID && !validateUserID && "6글자 이상 입력해주세요."}
                        {validateUserID && "사용가능한 아이디 입니다."}
                    </FormStyle.MessageText>
                </FormStyle.FormContent>

                <FormStyle.FormContent>
                    <p>비밀번호</p>
                    <FormStyle.BasicsInputText
                        type="password"
                        placeholder="비밀번호를 입력해주세요."
                        disabled={!validateUserID}
                        value={password}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                            const { value } = e.target as any;
                            setPassword(value);
                        }}
                    />

                    <FormStyle.MessageText warnning={!validatePassword}>
                        {password && !validatePassword && "6글자 이상 입력해주세요."}
                        {validatePassword && "사용가능한 비밀번호 입니다."}
                    </FormStyle.MessageText>
                </FormStyle.FormContent>

                <FormStyle.FormContent>
                    <p>비밀번호 확인</p>
                    <FormStyle.BasicsInputText
                        type="password"
                        placeholder="비밀번호를 입력해주세요."
                        disabled={!(validateUserID && validatePassword)}
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
                        disabled={!(validateUserID && validatePassword && validateConfirmPassword)}
                        value={nickname}
                        // value={nickname.replace(/\s/g, "")}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                            const { value } = e.target as any;
                            setNickname(value);
                        }}
                    />
                    <FormStyle.MessageText warnning={!validateNickname(nickname)}>
                        {nickname &&
                            !validateNickname(nickname) &&
                            "특수문자, 공백 제외, 2~8글자로 입력해주세요."}
                        {validateNickname(nickname) && "사용가능한 닉네임 입니다."}
                    </FormStyle.MessageText>
                </FormStyle.FormContent>
            </UserFormStyle.InputWrap>

            <ButtonStyle.LongButton disabled={!validateNewAccount} onClick={onClickNewAccount}>
                가입하기
            </ButtonStyle.LongButton>
        </>
    );
};

export default RegisterStep2;
