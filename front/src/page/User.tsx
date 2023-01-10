import React, { useState } from "react";
import { BsPencilFill } from "react-icons/bs";

import CancelAccount from "./../component/CancelAccount";

import * as TextStyle from "@/style/common/Text-style";
import * as FormStyle from "@/style/common/Form-style";
import * as ButtonStyle from "@/style/common/Button-style";
import * as UserFormStyle from "@/style/common/UserForm-style";
import * as Style from "@/style/page/User-style";

import faviconLogo from "@/images/favicon-logo.svg";

const User = () => {
    const [cancelAccountModal, setCancelAccountModal] = useState(false);
    return (
        <>
            <UserFormStyle.UserFormContent className="content">
                <div className="userFormInner">
                    <UserFormStyle.TitleContent>
                        <img src={faviconLogo} alt="마음일기 로고" />
                        <TextStyle.TitleText textAlign="center">내 정보</TextStyle.TitleText>
                    </UserFormStyle.TitleContent>

                    <Style.UserImgContent>
                        <div>
                            <div>
                                <img src="" alt="프로필" />
                            </div>
                            <span>
                                <BsPencilFill />
                            </span>
                        </div>
                    </Style.UserImgContent>

                    <UserFormStyle.InputWrap marginTop="2.5em">
                        <FormStyle.FormContent>
                            <p>닉네임</p>
                            <div>
                                <FormStyle.BasicsInputText
                                    type="text"
                                    placeholder="사용할 닉네임을 입력해 주세요."
                                    isButton={true}
                                />
                                <ButtonStyle.MediumButton>중복 확인</ButtonStyle.MediumButton>
                            </div>
                            <FormStyle.MessageText>
                                임시 비밀번호가 발송되었습니다.
                            </FormStyle.MessageText>
                        </FormStyle.FormContent>

                        <FormStyle.FormContent>
                            <p>새 비밀번호</p>
                            <FormStyle.BasicsInputText
                                type="passward"
                                placeholder="비밀번호를 입력해주세요."
                            />
                            <FormStyle.MessageText warnning={true}>
                                영어,숫자,특수문자를 포함한 8글자 이상이여야 합니다.
                            </FormStyle.MessageText>
                        </FormStyle.FormContent>

                        <FormStyle.FormContent>
                            <p>새 비밀번호 확인</p>
                            <FormStyle.BasicsInputText
                                type="passward"
                                placeholder="비밀번호를 입력해주세요."
                            />
                            <FormStyle.MessageText warnning={true}>
                                비밀번호를 확인해주세요.
                            </FormStyle.MessageText>
                        </FormStyle.FormContent>
                    </UserFormStyle.InputWrap>

                    <ButtonStyle.LongButton disabled={true}>변경 사항 저장</ButtonStyle.LongButton>

                    <Style.ButtonContent>
                        <button onClick={() => setCancelAccountModal(!cancelAccountModal)}>
                            회원탈퇴
                        </button>
                    </Style.ButtonContent>
                </div>
            </UserFormStyle.UserFormContent>

            {cancelAccountModal && (
                <CancelAccount
                    cancelAccountModal={cancelAccountModal}
                    setCancelAccountModal={setCancelAccountModal}
                />
            )}
        </>
    );
};

export default User;
