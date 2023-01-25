import React, { MouseEvent } from "react";
import dayjs from "dayjs";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import DiaryDelete from "../common/DiaryDelete";

import * as Style from "@/style/component/diaryCalendar/Calendar-style";

type Props = {
    dayJs: dayjs.Dayjs;
    setDayJs: React.Dispatch<React.SetStateAction<dayjs.Dayjs>>;
    diarySelect: string;
    setDiarySelect: React.Dispatch<React.SetStateAction<string>>;
};
const day = ["SUN", "MUN", "TUE", "WEN", "THU", "FRI", "SAT"];

const Calendar = ({ dayJs, setDayJs, diarySelect, setDiarySelect }: Props) => {
    // const now = dayJs;
    // const nowMonthDate = now.daysInMonth(); // 현재 날짜 몇개인지
    // const prevMonthDate = dayJs.subtract(1, "month").daysInMonth(); // 저번달 날짜 몇개인지
    // const firstDay = now.date(1).day(); // 첫번째 날짜의 요일

    // const onClick = (e: MouseEvent<HTMLDivElement>) => {
    //     const { innerText } = e.target as any;
    //     setDiarySelect(
    //         String(now.format(`YYYYMM${Number(innerText) < 10 ? `0${innerText}` : innerText}`))
    //     );
    // };

    // const createCalendar = () => {
    //     const result = [];
    //     let prevDate = prevMonthDate - firstDay + 1;
    //     let date = 1;
    //     let nextDate = 1;

    //     let dateCell = 0;
    //     while (dateCell < 42) {
    //         if (prevDate <= prevMonthDate) {
    //             result.push(
    //                 <Style.NoneNowDateCell key={dateCell}>
    //                     <span>{prevDate++}</span>
    //                 </Style.NoneNowDateCell>
    //             );
    //         } else if (date <= nowMonthDate) {
    //             result.push(
    //                 <Style.NowDateCell
    //                     key={dateCell}
    //                     nowDate={dayjs().format("YYYYMMDD") === now.format(`YYYYMM${date}`) && true}
    //                     onClick={onClick}
    //                     diarySelect={
    //                         diarySelect ===
    //                             String(dayjs().format(`YYYYMM${date < 10 ? `0${date}` : date}`)) &&
    //                         true // 일 선택
    //                     }
    //                 >
    //                     <span>{now.format(`${date}`)}</span>
    //                 </Style.NowDateCell>
    //             );
    //             date++;
    //         } else {
    //             result.push(
    //                 <Style.NoneNowDateCell key={dateCell}>
    //                     <span>{nextDate++}</span>
    //                 </Style.NoneNowDateCell>
    //             );
    //         }
    //         dateCell++;
    //     }

    //     return result;
    // };

    // 여기 아래부터가 제가 저의 방식대로 만들어본 코드입니다!
    // 혹시나 문제가 있으면 언제든 알려주시면 감사하겠습니다!
    // 또한 궁금한 점 또한 무엇이든 물어보셔도 괜찮습니다!

    // // state의 메모리 주소를 그대로 넣어주는게 아니라 clone을 통해 복사본을 만들어줌
    const currentDay = dayJs.clone();

    // 이전 달의 마지막 일
    const previousEndDate = dayJs.subtract(1, "month").daysInMonth();

    // 이번 달의 시작 일의 요일(0 ~ 6)
    const currentBeginPoint = currentDay.date(1).day();

    // 이번 달의 총 일 수(마지막 날)
    const currentEndDate = currentDay.daysInMonth();

    const onClick = (e: MouseEvent<HTMLDivElement>) => {
        const { innerText } = e.target as any;

        // 현재 년과 달을 가진 dayjs에 클릭한 셀의 일을 설정하고 YYYYMMDD 포맷으로 설정함
        setDiarySelect(currentDay.date(Number(innerText)).format("YYYYMMDD"));
    };

    // 달력의 cell을 가지고 있는 cells를 선언
    const cells = Array(42)
        .fill(undefined)
        .map((_, idx) => {
            // cell의 번호
            const cellNumber = idx + 1;

            // 시작요일보다 셀의 번호가 작은 경우 즉 저번 달의 날들
            if (cellNumber < currentBeginPoint + 1) {
                return (
                    <Style.NoneNowDateCell key={idx}>
                        <span>{previousEndDate - (currentBeginPoint - cellNumber)}</span>
                    </Style.NoneNowDateCell>
                );
            }

            // 만약에 이번의 시작일이 일요일이라면 0 + 31 = 31 즉 31칸을 차지하고, 수요일이라면 3 + 31 = 34 즉 31칸을 차지하는건 동일하지만 끝나는 셀의 번호가 다름
            if (cellNumber > currentBeginPoint + currentEndDate) {
                return (
                    <Style.NoneNowDateCell key={idx}>
                        <span>{cellNumber - (currentBeginPoint + currentEndDate)}</span>
                    </Style.NoneNowDateCell>
                );
            }

            const date = cellNumber - currentBeginPoint;

            // 위의 저번 달, 다음 달의 날들을 제외한 모든건 이번 달의 cell임
            return (
                <Style.NowDateCell
                    key={idx}
                    // currenDay 즉 달력을 구성한 날짜는 오늘이다. 그리고 dayjs()는 오늘을 반환한다. 둘을 isSame으로 비교한다.
                    nowDate={currentDay.isSame(dayjs().date(date).format("YYYY-MM-DD"), "day")}
                    onClick={onClick}
                    // currentDay의 복사본을 만들어서 셀마다의 날짜로 설정후, 선택된 날짜하고 같은지 비교한다.
                    diarySelect={currentDay
                        .clone()
                        .date(date)
                        .isSame(dayjs(diarySelect).format("YYYY-MM-DD"), "day")}
                >
                    <span>{currentDay.format(`${date}`)}</span>
                </Style.NowDateCell>
            );
        });

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
                        {/* 여기도 주석을 해제해주셔야 됩니다!*/}
                        <span>{currentDay.format("YYYY")}</span>
                        <strong>{currentDay.format("MMMM").toUpperCase()}</strong>

                        {/* <span>{now.format("YYYY")}</span>
                        <strong>{now.format("MMMM").toUpperCase()}</strong> */}
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

                    {/* {createCalendar()} */}

                    {/* 이 친구가 신버전 입니다! */}
                    {cells}
                </Style.CellsContent>
            </Style.CalendarContent>
            <DiaryDelete />
        </>
    );
};

export default Calendar;
