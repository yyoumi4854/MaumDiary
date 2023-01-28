import React from "react";

import * as FormStyle from "@/style/common/Form-style";
import * as ButtonStyle from "@/style/common/Button-style";
import * as UserFormStyle from "@/style/common/UserForm-style";

const RegisterStep1 = () => {
    return (
        <>
            <UserFormStyle.InputWrap marginTop="2.5em">
                <FormStyle.FormContent>
                    <p>이메일</p>
                    <div>
                        <FormStyle.BasicsInputText
                            type="text"
                            placeholder="가입하실 이메일을 입력해 주세요."
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
            </UserFormStyle.InputWrap>

            <ButtonStyle.LongButton disabled={true}>다음</ButtonStyle.LongButton>
        </>
    );
};

export default RegisterStep1;
