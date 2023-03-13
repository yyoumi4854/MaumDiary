import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { useResetRecoilState } from "recoil";

import * as FixModal from "@/utils/FixModalScroll";
import { withdrawal } from "@/api/user";
import { userAtom } from "@/recoil/user";

import * as TextStyle from "@/style/common/Text-style";
import * as ButtonStyle from "@/style/common/Button-style";
import * as UserFormStyle from "@/style/common/UserForm-style";
import * as Common from "@/style/common/common-style";
import * as Style from "@/style/component/Modal-style";

import faviconLogo from "@/images/favicon-logo.svg";

interface Props {
    setCancelAccountModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Withdrawal = ({ setCancelAccountModal }: Props) => {
    const navigate = useNavigate();

    const resetUserData = useResetRecoilState(userAtom);

    useEffect(() => {
        FixModal.disableScroll();
        return FixModal.enableScroll;
    });

    const withdrawalMutation = useMutation({
        mutationFn: withdrawal,
        onSuccess: (data) => {
            if (data.data.ok) {
                resetUserData();
                navigate("/");
            }
        },
    });

    return (
        <Common.FixedContent>
            <Style.ModalContent margin={"2.5rem 0 4rem"}>
                <UserFormStyle.TitleContent>
                    <img src={faviconLogo} alt="마음일기 로고" />
                    <TextStyle.TitleText textAlign="center">회원 탈퇴</TextStyle.TitleText>
                </UserFormStyle.TitleContent>

                <p>
                    정말로 <span>회원탈퇴</span> 하시겠습니까?
                </p>

                <ButtonStyle.ButtonWrap>
                    <button onClick={() => setCancelAccountModal(false)}>취소</button>
                    <button onClick={() => withdrawalMutation.mutate()}>탈퇴</button>
                </ButtonStyle.ButtonWrap>
            </Style.ModalContent>
        </Common.FixedContent>
    );
};

export default Withdrawal;
