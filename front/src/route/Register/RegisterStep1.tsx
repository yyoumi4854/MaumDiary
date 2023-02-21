import React, { useState, ChangeEvent, MouseEvent, useRef, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";

import { validateCode, validateEmail } from "@/utils/regExp";
import { certifyCertification, sendCertification } from "@/api/certification";
import { checkCertification } from "@/api/account";

import * as FormStyle from "@/style/common/Form-style";
import * as ButtonStyle from "@/style/common/Button-style";
import * as UserFormStyle from "@/style/common/UserForm-style";

interface Props {
    setStep: React.Dispatch<React.SetStateAction<number>>;
    email: string;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
}

const RegisterStep1 = ({ setStep, email, setEmail }: Props) => {
    const firstInputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        if (!firstInputRef.current) return;
        firstInputRef.current.focus();
    }, []);

    const [code, setCode] = useState("");

    const [emailStep, setEmailStep] = useState(0);
    const [codeStep, setCodeStep] = useState(0);

    const validateNext = emailStep === 3 && codeStep === 3;

    const checkMutation = useMutation({
        mutationFn: checkCertification,
        onSuccess: (data) => {
            console.log(data.data);
            if (data.data) {
                setEmailStep(2);
                alert("사용가능한 이메일 입니다.");
            } else {
                setEmailStep(1);
                alert("중복된 이메일 입니다.");
            }
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

    const validateCodeMutation = useMutation({
        mutationFn: certifyCertification,
        onSuccess: (data) => {
            console.log("인증번호 확인: ", data);
            setCodeStep(data.data.result ? 3 : 2);
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
        validateCodeMutation.mutate({
            email: email,
            code: code,
        });
    };

    return (
        <>
            <UserFormStyle.InputWrap marginTop="2.5em">
                <FormStyle.FormContent>
                    <p>이메일</p>
                    <div>
                        <FormStyle.BasicsInputText
                            ref={firstInputRef}
                            type="text"
                            placeholder="이메일을 입력해주세요."
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
                        {emailStep === 1 && "중복된 닉네임 입니다."}
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
                            disabled={!validateCode(code)}
                            onClick={onClickValidateCode}
                        >
                            인증번호 확인
                        </ButtonStyle.MediumButton>
                    </div>
                    <FormStyle.MessageText warnning={codeStep % 2 === 0}>
                        {code && codeStep === 0 && "인증번호를 입력해주세요."}
                        {codeStep === 1 && "인증번호 확인을 클릭해주세요."}
                        {codeStep === 2 && "올바르지 않은 인증번호 입니다."}
                        {codeStep === 3 && "알맞은 인증번호 입니다."}
                    </FormStyle.MessageText>
                </FormStyle.FormContent>
            </UserFormStyle.InputWrap>

            <ButtonStyle.LongButton disabled={!validateNext} onClick={() => setStep(2)}>
                다음
            </ButtonStyle.LongButton>
        </>
    );
};

export default RegisterStep1;
