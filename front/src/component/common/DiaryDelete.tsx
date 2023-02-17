import React, { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import dayjs from "dayjs";

import { selectedDayAtom } from "@/recoil/selectedDay";
import * as FixModal from "@/utils/FixModalScroll";
import { IsDiaryProps } from "../diaryCalendar/diary/IsDiary";
import { deleteDiary } from "@/api/diary";
import { MONTH_DIARY } from "@/constant/QUERY_KEY";

import * as ButtonStyle from "@/style/common/Button-style";
import * as Common from "@/style/common/common-style";
import * as Style from "@/style/component/Modal-style";

interface Props extends IsDiaryProps {
    setIsDelete: React.Dispatch<React.SetStateAction<boolean>>;
}

const DiaryDelete = ({ selectedDiary, setIsDelete }: Props) => {
    const selectDay = useRecoilValue(selectedDayAtom);

    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: deleteDiary,
        onSuccess: () => {
            return queryClient.refetchQueries({
                queryKey: [MONTH_DIARY.LIST],
            });
        },
    });

    useEffect(() => {
        FixModal.disableScroll();
        return FixModal.enableScroll;
    });

    return (
        <Common.FixedContent>
            <Style.ModalContent lineHeight={true} margin={"0 0 2.5em"}>
                <p>
                    <span>
                        {dayjs(selectDay).year()}년 {dayjs(selectDay).month() + 1}월{" "}
                        {dayjs(selectDay).date()}일
                    </span>{" "}
                    일기를
                    <br />
                    삭제하시겠습니까?
                </p>

                <ButtonStyle.ButtonWrap>
                    <button onClick={() => setIsDelete(false)}>취소</button>
                    <button
                        onClick={() => {
                            mutation.mutate({ id: selectedDiary.id });
                            setIsDelete(false);
                        }}
                    >
                        삭제
                    </button>
                </ButtonStyle.ButtonWrap>
            </Style.ModalContent>
        </Common.FixedContent>
    );
};

export default DiaryDelete;
