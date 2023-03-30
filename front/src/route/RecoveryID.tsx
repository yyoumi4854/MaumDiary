import { useState, ChangeEvent, MouseEvent, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

import { validateCode, validateEmail } from "@/utils/regExp";
import { sendCertification } from "@/api/certification";
import { checkAccount, findUserID } from "@/api/account";

import * as TextStyle from "@/style/common/Text-style";
import * as FormStyle from "@/style/common/Form-style";
import * as ButtonStyle from "@/style/common/Button-style";
import * as UserFormStyle from "@/style/common/UserForm-style";
import * as Style from "@/style/page/Recovery-style";

import faviconLogo from "@/images/favicon-logo.svg";

const RecoveryID = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [code, setCode] = useState("");
    const [userID, setUserID] = useState("");

    const [emailStep, setEmailStep] = useState(0);
    const [codeStep, setCodeStep] = useState(0);

    const disableLogin = emailStep === 3 && codeStep === 3;

    const checkMutation = useMutation({
        mutationFn: checkAccount,
        onSuccess: (data) => {
            setEmailStep(data.data ? 1 : 2);
        },
    });

    const sendCodeMutation = useMutation({
        mutationFn: sendCertification,
        onSuccess: (data) => {
            if (data.data.result) {
                setEmailStep(3);
            }
        },
    });

    const findUserIDMutation = useMutation({
        mutationFn: findUserID,
        onSuccess: (data) => {
            if (data.data) {
                setCodeStep(3);
                setUserID(data.data);
            } else {
                setCodeStep(2);
            }
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

    const onClickSendCode = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        sendCodeMutation.mutate({
            email: email,
            target: "email",
        });
    };

    const onClickValidateCode = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        findUserIDMutation.mutate({
            email: email,
            code: code,
        });
    };

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        navigate("/login", { state: userID });
    };

    return (
        <UserFormStyle.UserFormContent className="content">
            <div className="userFormInner">
                <UserFormStyle.TitleContent>
                    <img src={faviconLogo} alt="마음일기 로고" />
                    <TextStyle.TitleText textAlign="center">아이디 찾기</TextStyle.TitleText>
                </UserFormStyle.TitleContent>

                <form onSubmit={onSubmit}>
                    <UserFormStyle.InputWrap marginTop="2.5em">
                        <FormStyle.FormContent>
                            <p>이메일</p>
                            <div>
                                <FormStyle.BasicsInputText
                                    autoFocus
                                    type="text"
                                    placeholder="가입하신 이메일을 입력해 주세요."
                                    isButton={true}
                                    value={email}
                                    onChange={onChangeEmail}
                                />
                                <ButtonStyle.MediumButton
                                    disabled={emailStep < 2}
                                    onClick={onClickSendCode}
                                >
                                    인증번호 발송
                                </ButtonStyle.MediumButton>
                            </div>
                            <FormStyle.MessageText warnning={emailStep < 2}>
                                {email && emailStep === 0 && "이메일 형식이 아닙니다."}
                                {emailStep === 1 && "가입 내역이 없는 이메일 입니다."}
                                {emailStep === 2 && "인증번호 발송을 클릭해주세요."}
                                {emailStep === 3 && "인증번호가 발송되었습니다."}
                            </FormStyle.MessageText>
                        </FormStyle.FormContent>

                        <FormStyle.FormContent>
                            <p>인증번호 확인</p>
                            <div>
                                <FormStyle.BasicsInputText
                                    type="text"
                                    placeholder="인증번호를 입력해주세요."
                                    disabled={emailStep < 2}
                                    isButton={true}
                                    value={code}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                        const { value } = e.target as any;
                                        setCode(value);
                                        setCodeStep(validateCode(value) ? 1 : 0);
                                    }}
                                />
                                <ButtonStyle.MediumButton
                                    disabled={codeStep < 1}
                                    onClick={onClickValidateCode}
                                >
                                    인증번호 확인
                                </ButtonStyle.MediumButton>
                            </div>
                            <FormStyle.MessageText warnning={codeStep % 2 === 0}>
                                {code &&
                                    codeStep === 0 &&
                                    "영어,숫자 조합으로 8글자를 입력해주세요."}
                                {codeStep === 1 && "인증번호 확인을 클릭해주세요."}
                                {codeStep === 2 && "올바르지 않은 인증번호 입니다."}
                                {codeStep === 3 && "알맞은 인증번호 입니다."}
                            </FormStyle.MessageText>
                        </FormStyle.FormContent>

                        {codeStep === 3 && (
                            <Style.RecoveryText>
                                아이디는 <span>{userID}</span> 입니다.
                            </Style.RecoveryText>
                        )}
                    </UserFormStyle.InputWrap>

                    <ButtonStyle.LongButton disabled={!disableLogin}>
                        로그인 하러가기
                    </ButtonStyle.LongButton>
                </form>

                <UserFormStyle.userFomMenu>
                    <ul>
                        <li>
                            <Link to={"/recovery/password"}>비밀번호 찾기</Link>
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

export default RecoveryID;
