import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";

import { MONTH_DIARY } from "@/constant/QUERY_KEY";
import { fetchMonthDiaryList } from "@/api/diary";

import * as Common from "@/style/common/common-style";
import * as ButtonStyle from "@/style/common/Button-style";
import * as Style from "@/style/component/Calendar-style";
import useCalendar from "../hooks/useCalendar";

const Calendar = () => {
    const navigate = useNavigate();

    const [dayJs, setDayJs] = useState(dayjs());

    const { data, isSuccess } = useQuery({
        queryKey: [MONTH_DIARY.LIST, { year: dayJs.year(), month: dayJs.month() + 1 }],
        queryFn: () => fetchMonthDiaryList({ year: dayJs.year(), month: dayJs.month() + 1 }),
        placeholderData: {},
    });
    if (!isSuccess) return null;

    const calendar = useCalendar(dayJs, setDayJs, data);

    return (
        <Common.FixedContent>
            <Style.CalendarWarp>
                <Style.CalendarContent>{calendar}</Style.CalendarContent>

                {/* 해당 날짜에는 일기를 썼습니다. 다른 날짜를 선택해 주세요. */}
                <div>
                    해당 날짜에는 일기를 썼습니다.
                    <br />
                    다른 날짜를 선택해 주세요.
                </div>

                {/* 취소: 이전에 선택한 날짜 그대로, 선택: 다시 선택한 날짜로 */}
                <ButtonStyle.ButtonWrap>
                    <button onClick={() => navigate(-1)}>나가기</button>
                    <button>일기쓰기</button>
                </ButtonStyle.ButtonWrap>
            </Style.CalendarWarp>
        </Common.FixedContent>
    );
};

export default Calendar;
