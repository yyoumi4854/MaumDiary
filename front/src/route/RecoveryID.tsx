import React from "react";
import { Link } from "react-router-dom";

import * as TextStyle from "@/style/common/Text-style";
import * as FormStyle from "@/style/common/Form-style";
import * as ButtonStyle from "@/style/common/Button-style";
import * as UserFormStyle from "@/style/common/UserForm-style";
import * as Style from "@/style/page/Recovery-style";

import faviconLogo from "@/images/favicon-logo.svg";

const RecoveryID = () => {
    return (
        <UserFormStyle.UserFormContent className="content">
            <div className="userFormInner">
                <UserFormStyle.TitleContent>
                    <img src={faviconLogo} alt="마음일기 로고" />
                    <TextStyle.TitleText textAlign="center">아이디 찾기</TextStyle.TitleText>
                </UserFormStyle.TitleContent>

                <UserFormStyle.InputWrap marginTop="2.5em">
                    <FormStyle.FormContent>
                        <p>이메일</p>
                        <div>
                            <FormStyle.BasicsInputText
                                type="text"
                                placeholder="가입하신 이메일을 입력해 주세요."
                                isButton={true}
                            />
                            <ButtonStyle.MediumButton>인증번호 발송</ButtonStyle.MediumButton>
                        </div>
                        <FormStyle.MessageText warnning={true}>
                            이메일 형식이 아닙니다.
                        </FormStyle.MessageText>
                    </FormStyle.FormContent>

                    <FormStyle.FormContent>
                        <p>인증번호 확인</p>
                        <div>
                            <FormStyle.BasicsInputText
                                type="text"
                                placeholder="인증번호를 입력해주세요."
                                disabled={true}
                                isButton={true}
                            />
                            <ButtonStyle.MediumButton disabled={true}>
                                인증번호 확인
                            </ButtonStyle.MediumButton>
                        </div>
                        <FormStyle.MessageText warnning={true}>
                            숫자 4글자를 입력해주세요.
                        </FormStyle.MessageText>
                    </FormStyle.FormContent>

                    <Style.RecoveryText>
                        아이디는 <span>hello123</span> 입니다.
                    </Style.RecoveryText>
                </UserFormStyle.InputWrap>

                <ButtonStyle.LongButton disabled={true}>로그인 하러가기</ButtonStyle.LongButton>

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
