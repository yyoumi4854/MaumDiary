import React, { useEffect } from "react";
import dayjs from "dayjs";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import * as FixModal from "@/utils/FixModalScroll";
import { IsDiaryProps } from "../diaryCalendar/diary/IsDiary";
import { deleteDiary, fetchMonthDiaryList } from "@/api/diary";
import { MONTH_DIARY } from "@/constant/QUERY_KEY";

import * as ButtonStyle from "@/style/common/Button-style";
import * as Common from "@/style/common/common-style";
import * as Style from "@/style/component/Modal-style";

type Props = IsDiaryProps & {
    setIsDelete: React.Dispatch<React.SetStateAction<boolean>>;
};

const DiaryDelete = ({ diarySelect, selectedDiary, setIsDelete }: Props) => {
    useEffect(() => {
        FixModal.disableScroll();
        return FixModal.enableScroll;
    });

    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: deleteDiary,
        onSuccess: () => {
            queryClient.fetchQuery({
                queryKey: [
                    MONTH_DIARY.LIST,
                    { year: dayjs(diarySelect).year(), month: dayjs(diarySelect).month() + 1 },
                ],
                queryFn: () =>
                    fetchMonthDiaryList({
                        year: dayjs(diarySelect).year(),
                        month: dayjs(diarySelect).month() + 1,
                    }),
            });
        },
    });

    return (
        <Common.FixedContent>
            <Style.ModalContent lineHeight={true} margin={"0 0 2.5em"}>
                <p>
                    <span>
                        {dayjs(diarySelect).year()}년 {dayjs(diarySelect).month() + 1}월{" "}
                        {dayjs(diarySelect).date()}일
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
