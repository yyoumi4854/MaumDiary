import React, { useState } from "react";

import RegisterStep1 from "./RegisterStep1";
import RegisterStep2 from "./RegisterStep2";

import * as TextStyle from "@/style/common/Text-style";
import * as UserFormStyle from "@/style/common/UserForm-style";
import * as Style from "@/style/page/Register-style";

import faviconLogo from "@/images/favicon-logo.svg";

const Register = () => {
    const [step, setStep] = useState(1);

    return (
        <UserFormStyle.UserFormContent className="content">
            <div className="userFormInner">
                <UserFormStyle.TitleContent>
                    <img src={faviconLogo} alt="마음일기 로고" />
                    <TextStyle.TitleText textAlign="center">회원가입</TextStyle.TitleText>
                </UserFormStyle.TitleContent>

                <Style.RegisterStepContent>
                    <Style.RegisterStepList hasStep={true}>
                        <dt>1</dt>
                        <dd>이메일 인증</dd>
                    </Style.RegisterStepList>
                    <Style.RegisterStepList hasStep={step > 1 ? true : false}>
                        <dt>2</dt>
                        <dd>회원 정보 기입</dd>
                    </Style.RegisterStepList>
                </Style.RegisterStepContent>

                {step === 1 && <RegisterStep1 />}
                {step === 2 && <RegisterStep2 />}
            </div>
        </UserFormStyle.UserFormContent>
    );
};

export default Register;
