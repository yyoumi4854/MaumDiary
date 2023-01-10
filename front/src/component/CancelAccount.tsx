import React, { useEffect } from "react";

import * as FixModal from "@/utils/FixModalScroll";

import * as TextStyle from "@/style/common/Text-style";
import * as ButtonStyle from "@/style/common/Button-style";
import * as UserFormStyle from "@/style/common/UserForm-style";
import * as Style from "@/style/component/CancelAccount-style";

import faviconLogo from "@/images/favicon-logo.svg";

type PropsType = {
    cancelAccountModal: boolean;
    setCancelAccountModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const CancelAccount = ({ cancelAccountModal, setCancelAccountModal }: PropsType) => {
    useEffect(() => {
        FixModal.disableScroll();
        return FixModal.enableScroll;
    }, []);

    return (
        <Style.FixedContent>
            <Style.CancelAccountContent>
                <UserFormStyle.TitleContent>
                    <img src={faviconLogo} alt="마음일기 로고" />
                    <TextStyle.TitleText textAlign="center">회원 탈퇴</TextStyle.TitleText>
                </UserFormStyle.TitleContent>

                <p>
                    정말로 <span>회원탈퇴</span> 하시겠습니까?
                </p>

                <ButtonStyle.ButtonWrap>
                    <button onClick={() => setCancelAccountModal(false)}>취소</button>
                    <button>탈퇴</button>
                </ButtonStyle.ButtonWrap>
            </Style.CancelAccountContent>
        </Style.FixedContent>
    );
};

export default CancelAccount;
