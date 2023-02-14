import React, { MouseEvent } from "react";
import { useRecoilState } from "recoil";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import dayjs from "dayjs";

import { Diary } from "@/types";
import { selectedDayAtom } from "@/recoil/selectedDay";

import * as Style from "@/style/hooks/useCalendar-style";

import EmotionIcon from "@/utils/emotionIcon";

const day = ["SUN", "MUN", "TUE", "WEN", "THU", "FRI", "SAT"];

// 공용 캘린더
const useCalendar = (
    dayJs: dayjs.Dayjs,
    setDayJs: React.Dispatch<React.SetStateAction<dayjs.Dayjs>>,
    data: { [key: number]: Diary }
) => {
    const [selectedDay, setSelectedDay] = useRecoilState(selectedDayAtom);

    const currentDay = dayJs.clone(); // state의 메모리 주소를 그대로 넣어주는게 아니라 clone을 통해 복사본을 만들어줌
    const previousEndDate = dayJs.subtract(1, "month").daysInMonth(); // 이전 달의 마지막 일
    const currentBeginPoint = currentDay.date(1).day(); // 이번 달의 시작 일의 요일(0 ~ 6)
    const currentEndDate = currentDay.daysInMonth(); // 이번 달의 총 일 수(마지막 날)

    const onClick = (e: MouseEvent<HTMLDivElement>) => {
        const { innerText } = e.target as any;

        // 현재 년과 달을 가진 dayjs에 클릭한 셀의 일을 설정하고 YYYYMMDD 포맷으로 설정함
        setSelectedDay(currentDay.date(Number(innerText)).format("YYYYMMDD"));
    };

    // 달력의 cell을 가지고 있는 cells를 선언
    const cells = Array(42)
        .fill(undefined)
        .map((_, idx) => {
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
                    // currentDay의 복사본을 만들어서 셀마다의 날짜로 설정후, 선택된 날짜하고 같은지 비교한다.
                    onClick={onClick}
                    diarySelect={currentDay
                        .clone()
                        .date(date)
                        .isSame(dayjs(selectedDay).format("YYYY-MM-DD"), "day")}
                    url={data && data[date] && EmotionIcon[data[date].emotion]}
                >
                    <span>{currentDay.format(`${date}`)}</span>
                </Style.NowDateCell>
            );
        });

    return (
        <>
            <Style.ControlContent>
                <button
                    onClick={() => {
                        setDayJs(dayJs.clone().subtract(1, "month"));
                    }}
                >
                    <BsChevronLeft />
                </button>
                <div>
                    <span>{currentDay.format("YYYY")}</span>
                    <strong>{currentDay.format("MMMM").toUpperCase()}</strong>
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
                {cells}
            </Style.CellsContent>
        </>
    );
};

export default useCalendar;
