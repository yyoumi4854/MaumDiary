import React from "react";

import * as TextStyle from "@/style/Text-style";
import * as FormStyle from "@/style/Form-style";
import * as ButtonStyle from "@/style/Button-style";

import faviconLogo from "@/images/favicon-logo.svg";

const Login = () => {
    return (
        <div>
            <div>
                <img src={faviconLogo} alt="마음일기 로고" />
                <TextStyle.TitleText>로그인</TextStyle.TitleText>
            </div>

            <div>
                <FormStyle.BasicsInputText type="password" placeholder="요기없소" />
            </div>

            <FormStyle.FormContent>
                <p>이메일</p>
                <FormStyle.BasicsInputText type="text" disabled={true} placeholder="디스에이블" />
                <FormStyle.MessageText warnning={true}>
                    영어,숫자,특수문자를 포함한 8글자 이상이여야 합니다.
                </FormStyle.MessageText>
            </FormStyle.FormContent>

            <FormStyle.FormContent>
                <p>이메일버튼</p>
                <div>
                    <FormStyle.BasicsInputText type="text" isButton={true} />
                    <ButtonStyle.MediumButton>인증번호 확인</ButtonStyle.MediumButton>
                </div>
                <FormStyle.MessageText warnning={true}>
                    영어,숫자,특수문자를 포함한 8글자 이상이여야 합니다.
                </FormStyle.MessageText>
            </FormStyle.FormContent>
        </div>
    );
};

export default Login;
