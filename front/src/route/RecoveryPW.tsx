import { useState, ChangeEvent, MouseEvent, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

import { validateEmail } from "@/utils/regExp";
import { sendCertification } from "@/api/certification";
import { checkAccount } from "@/api/account";

import * as TextStyle from "@/style/common/Text-style";
import * as FormStyle from "@/style/common/Form-style";
import * as ButtonStyle from "@/style/common/Button-style";
import * as UserFormStyle from "@/style/common/UserForm-style";
import * as Style from "@/style/page/Recovery-style";

import faviconLogo from "@/images/favicon-logo.svg";

const RecoveryPW = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [emailStep, setEmailStep] = useState(0);

    const checkMutation = useMutation({
        mutationFn: checkAccount,
        onSuccess: (data) => {
            setEmailStep(data.data ? 1 : 2);
        },
    });

    const sendCodeMutation = useMutation({
        mutationFn: sendCertification,
        onSuccess: (data) => {
            setEmailStep(data.data.result && 3);
        },

        onError: () => {
            alert("이전에 해당 이메일로 임시 비밀번호를 발급 받았습니다.");
        },
    });

    let timer: NodeJS.Timeout;
    const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target as any;
        setEmail(value);

        if (validateEmail(value)) {
            clearTimeout(timer);
            timer = setTimeout(() => {
                checkMutation.mutate({
                    target: "email",
                    value: value,
                });
            }, 1000);
        } else {
            setEmailStep(0);
        }
    };

    const onClickSendPassword = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        sendCodeMutation.mutate({
            email: email,
            target: "password",
        });
    };

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        navigate("/login");
    };

    return (
        <UserFormStyle.UserFormContent className="content">
            <div className="userFormInner">
                <UserFormStyle.TitleContent>
                    <img src={faviconLogo} alt="마음일기 로고" />
                    <TextStyle.TitleText textAlign="center">비밀번호 찾기</TextStyle.TitleText>
                </UserFormStyle.TitleContent>

                <form onSubmit={onSubmit}>
                    <UserFormStyle.InputWrap marginTop="2.5em">
                        <FormStyle.FormContent>
                            <p>이메일</p>

                            <div>
                                <FormStyle.BasicsInputText
                                    type="text"
                                    placeholder="가입하신 이메일을 입력해 주세요."
                                    isButton={true}
                                    value={email}
                                    onChange={onChangeEmail}
                                />
                                <ButtonStyle.MediumButton
                                    disabled={emailStep < 2}
                                    onClick={onClickSendPassword}
                                >
                                    비밀번호 발급
                                </ButtonStyle.MediumButton>
                            </div>
                            <FormStyle.MessageText warnning={emailStep < 2}>
                                {email && emailStep === 0 && "이메일 형식이 아닙니다."}
                                {emailStep === 1 && "가입 내역이 없는 이메일 입니다."}
                                {emailStep === 2 && "비밀번호 발급을 클릭해주세요."}
                                {emailStep === 3 && "임시 비밀번호가 발송되었습니다."}
                            </FormStyle.MessageText>
                        </FormStyle.FormContent>

                        {emailStep === 3 && (
                            <Style.RecoveryText>
                                이메일로 <span>임시 비밀번호가 발급</span>되었습니다.
                            </Style.RecoveryText>
                        )}
                    </UserFormStyle.InputWrap>

                    <ButtonStyle.LongButton disabled={emailStep !== 3}>
                        로그인 하러가기
                    </ButtonStyle.LongButton>
                </form>

                <UserFormStyle.userFomMenu>
                    <ul>
                        <li>
                            <Link to={"/recovery/id"}>아이디 찾기</Link>
                        </li>
                        <li>
                            <Link to={"/register"}>회원가입</Link>
                        </li>
                    </ul>
                </UserFormStyle.userFomMenu>
            </div>
        </UserFormStyle.UserFormContent>
    );
};

export default RecoveryPW;
