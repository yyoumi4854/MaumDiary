import React from "react";
import { useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";
import { BsExclamationCircle } from "react-icons/bs";
import dayjs from "dayjs";

import { selectedDayAtom } from "@/recoil/selectedDay";

import * as ButtonStyle from "@/style/common/Button-style";
import * as Style from "@/style/component/diaryCalendar/diary/IsNoDiary-style";

const IsNoDiary = () => {
    const selectDay = useRecoilValue(selectedDayAtom);

    const navigate = useNavigate();

    const currentDay = dayjs().format();
    const dayUp = currentDay < dayjs(selectDay).format();

    return (
        <Style.IsNoDiaryContent>
            <div>
                <BsExclamationCircle />
                <p>
                    <span>
                        {dayjs(selectDay).year()}년 {dayjs(selectDay).month() + 1}월{" "}
                        {dayjs(selectDay).date()}일
                    </span>
                    에 작성된 글이 없습니다.
                    <br />
                    어떤 하루를 보냈는지 기록해 보세요!
                </p>
                {!dayUp && (
                    <ButtonStyle.MediumButton
                        onClick={() => {
                            navigate("/diary/write", { state: "isNoDiary" });
                        }}
                    >
                        일기쓰러 가기
                    </ButtonStyle.MediumButton>
                )}
            </div>
        </Style.IsNoDiaryContent>
    );
};

export default IsNoDiary;
