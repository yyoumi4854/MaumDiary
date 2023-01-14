import React, { useState } from "react";
import dayjs from "dayjs";

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import * as Style from "@/style/component/diaryCalendar/Calendar-style";

const Calendar = () => {
    const [dayJsData, setDayJsData] = useState(dayjs());
    const now = dayJsData;
    const nowMonthDays = now.daysInMonth(); // 현재 몇일까지
    const prevMonthDays = dayJsData.subtract(1, "month").daysInMonth(); // 저번달 몇일까지
    const firstDay = now.date(1).day(); // 첫번째날 요일
    const [selectDay, setSelectDay] = useState(Number(now.format(`YYYYMMDD`)));
    const date = ["SUN", "MUN", "TUE", "WEN", "THU", "FRI", "SAT"];

    const createCalendar = () => {
        const result = [];
        let prevDay = prevMonthDays - firstDay + 1;
        let day = 1;
        let nextDay = 1;

        let dayBox = 0;
        while (dayBox < 42) {
            if (prevDay <= prevMonthDays) {
                result.push(<Style.CalendarCel key={dayBox}>{prevDay++}</Style.CalendarCel>);
            } else if (day <= nowMonthDays) {
                result.push(
                    <Style.CalendarCel
                        key={dayBox}
                        nowDays={true}
                        nowDay={dayjs().format("YYYYMMDD") === now.format(`YYYYMM${day}`) && true}
                        onClick={(e: React.BaseSyntheticEvent | MouseEvent) => {
                            const { innerText } = e.target;
                            setSelectDay(Number(now.format(`YYYYMM${innerText}`)));
                        }}
                        slelctDay={selectDay === Number(now.format(`YYYYMM${day}`)) && true}
                    >
                        {now.format(`${day}`)}
                    </Style.CalendarCel>
                );
                day++;
            } else {
                result.push(<Style.CalendarCel key={dayBox}>{nextDay++}</Style.CalendarCel>);
            }
            dayBox++;
        }

        return result;
    };

    const [isDiary, setIsDiary] = useState(false);

    return (
        <>
            <Style.DiaryContent>
                <Style.controlContent>
                    <button
                        onClick={() => {
                            setDayJsData(dayJsData.clone().subtract(1, "month"));
                        }}
                    >
                        <BsChevronLeft />
                    </button>
                    <div>
                        <span>{now.format("YYYY")}</span>
                        <strong>{now.format("MMMM")}</strong>
                    </div>
                    <button
                        onClick={() => {
                            setDayJsData(dayJsData.clone().add(1, "month"));
                        }}
                    >
                        <BsChevronRight />
                    </button>
                </Style.controlContent>

                <Style.CalendarContent>
                    {date.map((date, index) => (
                        <div key={index}>{date}</div>
                    ))}

                    {createCalendar()}
                </Style.CalendarContent>
            </Style.DiaryContent>

            <Style.DiaryContent>
                {selectDay}
                <div></div>
            </Style.DiaryContent>
        </>
    );
};

export default Calendar;
