import React from "react";
import { Link } from "react-router-dom";
import { BsChevronRight } from "react-icons/bs";

import * as TextStyle from "@/style/common/Text-style";
import * as FormStyle from "@/style/common/Form-style";
import * as ButtonStyle from "@/style/common/Button-style";
import * as UserFormStyle from "@/style/common/UserForm-style";
import * as Style from "@/style/page/Login-style";

import faviconLogo from "@/images/favicon-logo.svg";

const Login = () => {
    return (
        <UserFormStyle.UserFormContent className="content">
            <div className="userFormInner">
                <UserFormStyle.TitleContent>
                    <img src={faviconLogo} alt="마음일기 로고" />
                    <TextStyle.TitleText textAlign="center">로그인</TextStyle.TitleText>
                </UserFormStyle.TitleContent>

                <UserFormStyle.InputWrap marginTop="2.5em">
                    <FormStyle.BasicsInputText
                        type="password"
                        placeholder="아이디"
                        marginBottom="1em"
                    />
                    <FormStyle.BasicsInputText type="password" placeholder="비밀번호" />
                    <FormStyle.MessageText warnning={true}>
                        비밀번호가 틀렸습니다.
                    </FormStyle.MessageText>
                </UserFormStyle.InputWrap>

                <ButtonStyle.LongButton>로그인</ButtonStyle.LongButton>

                <UserFormStyle.userFomMenu>
                    <ul>
                        <li>
                            <Link to={"/recovery/id"}>아이디 찾기</Link>
                        </li>
                        <li>
                            <Link to={"/recovery/password"}>비밀번호 찾기</Link>
                        </li>
                        <li>
                            <a href="#">회원가입</a>
                        </li>
                    </ul>
                </UserFormStyle.userFomMenu>

                <Style.EasyLoginContent>
                    <span>or</span>
                    <a href="#">
                        <p>
                            간편하게 시작하기
                            <BsChevronRight />
                        </p>
                        <span>카카오</span>
                    </a>
                </Style.EasyLoginContent>
            </div>
        </UserFormStyle.UserFormContent>
    );
};

export default Login;
