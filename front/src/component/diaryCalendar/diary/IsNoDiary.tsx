import React from "react";
import dayjs from "dayjs";
import { BsExclamationCircle } from "react-icons/bs";

import * as ButtonStyle from "@/style/common/Button-style";
import * as Style from "@/style/component/diaryCalendar/diary/IsNoDiary-style";

type Props = {
    diarySelect: string;
};

const IsNoDiary = ({ diarySelect }: Props) => {
    return (
        <Style.IsNoDiaryContent>
            <div>
                <BsExclamationCircle />
                <p>
                    <span>
                        {dayjs(diarySelect).year()}년 {dayjs(diarySelect).month() + 1}월{" "}
                        {dayjs(diarySelect).date()}일
                    </span>
                    에 작성된 글이 없습니다.
                    <br />
                    어떤 하루를 보냈는지 기록해 보세요!
                </p>
                <ButtonStyle.MediumButton>일기쓰러 가기</ButtonStyle.MediumButton>
            </div>
        </Style.IsNoDiaryContent>
    );
};

export default IsNoDiary;
