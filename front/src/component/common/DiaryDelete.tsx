import React, { useEffect } from "react";

import * as FixModal from "@/utils/FixModalScroll";

import * as ButtonStyle from "@/style/common/Button-style";
import * as Common from "@/style/common/common-style";
import * as Style from "@/style/component/Modal-style";

const DiaryDelete = () => {
    useEffect(() => {
        FixModal.disableScroll();
        return FixModal.enableScroll;
    });

    return (
        <Common.FixedContent>
            <Style.ModalContent lineHeight={true} margin={"0 0 2.5em"}>
                <p>
                    <span>2022년 12월 23일</span> 일기를
                    <br />
                    삭제하시겠습니까?
                </p>

                <ButtonStyle.ButtonWrap>
                    <button>취소</button>
                    <button>삭제</button>
                </ButtonStyle.ButtonWrap>
            </Style.ModalContent>
        </Common.FixedContent>
    );
};

export default DiaryDelete;
