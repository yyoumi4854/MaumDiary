import React from "react";

import * as FormStyle from "@/style/common/Form-style";
import * as ButtonStyle from "@/style/common/Button-style";
import * as UserFormStyle from "@/style/common/UserForm-style";

const RegisterStep2 = () => {
    return (
        <>
            <UserFormStyle.InputWrap marginTop="2.5em">
                <FormStyle.FormContent>
                    <p>아이디</p>
                    <div>
                        <FormStyle.BasicsInputText
                            type="text"
                            placeholder="아이디를 입력해주세요."
                            isButton={true}
                        />
                        <ButtonStyle.MediumButton>중복 확인</ButtonStyle.MediumButton>
                    </div>
                    <FormStyle.MessageText warnning={true}>
                        영어, 숫자 포함 6글자 이상이여야 합니다.
                    </FormStyle.MessageText>
                </FormStyle.FormContent>

                <FormStyle.FormContent>
                    <p>비밀번호</p>
                    <FormStyle.BasicsInputText
                        type="text"
                        placeholder="비밀번호를 입력해주세요."
                        disabled={true}
                    />

                    <FormStyle.MessageText warnning={true}>
                        영어,숫자,특수문자를 포함한 8글자 이상이여야 합니다.
                    </FormStyle.MessageText>
                </FormStyle.FormContent>

                <FormStyle.FormContent>
                    <p>비밀번호 확인</p>
                    <FormStyle.BasicsInputText
                        type="text"
                        placeholder="비밀번호를 입력해주세요."
                        disabled={true}
                    />
                    <FormStyle.MessageText warnning={true}>
                        비밀번호를 확인해주세요.
                    </FormStyle.MessageText>
                </FormStyle.FormContent>

                <FormStyle.FormContent>
                    <p>닉네임</p>
                    <div>
                        <FormStyle.BasicsInputText
                            type="text"
                            placeholder="닉네임을 입력해주세요."
                            isButton={true}
                        />
                        <ButtonStyle.MediumButton>중복 확인</ButtonStyle.MediumButton>
                    </div>
                    <FormStyle.MessageText warnning={true}>
                        닉네임 중복 확인을 해주세요.
                    </FormStyle.MessageText>
                </FormStyle.FormContent>
            </UserFormStyle.InputWrap>

            <ButtonStyle.LongButton disabled={true}>가입하기</ButtonStyle.LongButton>
        </>
    );
};

export default RegisterStep2;
