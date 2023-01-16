import React, { useState } from "react";
import dayjs from "dayjs";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import * as Style from "@/style/component/diaryCalendar/Calendar-style";

type Props = {
    diarySelect: string;
    setDiarySelect: React.Dispatch<React.SetStateAction<string>>;
};

const Calendar = ({ diarySelect, setDiarySelect }: Props) => {
    const [dayJs, setDayJs] = useState(dayjs());
    const now = dayJs;
    const nowMonthDate = now.daysInMonth(); // 현재 날짜 몇개인지
    const prevMonthDate = dayJs.subtract(1, "month").daysInMonth(); // 저번달 날짜 몇개인지
    const firstDay = now.date(1).day(); // 첫번째 날짜의 요일
    const day = ["SUN", "MUN", "TUE", "WEN", "THU", "FRI", "SAT"];

    const onClick = (e: React.BaseSyntheticEvent | MouseEvent) => {
        const { innerText } = e.target;
        setDiarySelect(
            String(now.format(`YYYYMM${Number(innerText) < 10 ? `0${innerText}` : innerText}`))
        );
    };

    const createCalendar = () => {
        const result = [];
        let prevDate = prevMonthDate - firstDay + 1;
        let date = 1;
        let nextDate = 1;

        let dateCell = 0;
        while (dateCell < 42) {
            if (prevDate <= prevMonthDate) {
                result.push(
                    <Style.NoneNowDateCell key={dateCell}>
                        <span>{prevDate++}</span>
                    </Style.NoneNowDateCell>
                );
            } else if (date <= nowMonthDate) {
                result.push(
                    <Style.NowDateCell
                        key={dateCell}
                        nowDate={dayjs().format("YYYYMMDD") === now.format(`YYYYMM${date}`) && true}
                        onClick={onClick}
                        diarySelect={
                            diarySelect ===
                                String(now.format(`YYYYMM${date < 10 ? `0${date}` : date}`)) && true
                        }
                    >
                        <span>{now.format(`${date}`)}</span>
                    </Style.NowDateCell>
                );
                date++;
            } else {
                result.push(
                    <Style.NoneNowDateCell key={dateCell}>
                        <span>{nextDate++}</span>
                    </Style.NoneNowDateCell>
                );
            }
            dateCell++;
        }

        return result;
    };

    return (
        <>
            <Style.CalendarContent>
                <Style.ControlContent>
                    <button
                        onClick={() => {
                            setDayJs(dayJs.clone().subtract(1, "month"));
                        }}
                    >
                        <BsChevronLeft />
                    </button>
                    <div>
                        <span>{now.format("YYYY")}</span>
                        <strong>{now.format("MMMM").toUpperCase()}</strong>
                    </div>
                    <button
                        onClick={() => {
                            setDayJs(dayJs.clone().add(1, "month"));
                        }}
                    >
                        <BsChevronRight />
                    </button>
                </Style.ControlContent>

                <Style.CellsContent>
                    {day.map((date, index) => (
                        <Style.DayCell key={index}>
                            <span>{date}</span>
                        </Style.DayCell>
                    ))}

                    {createCalendar()}
                </Style.CellsContent>
            </Style.CalendarContent>
        </>
    );
};

export default Calendar;
