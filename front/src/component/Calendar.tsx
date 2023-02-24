import React, { useState, MouseEvent } from "react";
import { useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";

import { selectedDayAtom } from "@/recoil/selectedDay";
import { MONTH_DIARY } from "@/constant/QUERY_KEY";
import { fetchMonthDiaryList } from "@/api/diary";

import * as Common from "@/style/common/common-style";
import * as ButtonStyle from "@/style/common/Button-style";
import * as Style from "@/style/component/Calendar-style";
import useCalendar from "../hooks/useCalendar";

interface Props {
    setIsCalendar: React.Dispatch<React.SetStateAction<boolean>>;
    changeDay: boolean;
    setChangeDay: React.Dispatch<React.SetStateAction<boolean>>;
}

const Calendar = ({ setIsCalendar, changeDay, setChangeDay }: Props) => {
    const selectDay = useRecoilValue(selectedDayAtom);

    const navigate = useNavigate();

    const [dayJs, setDayJs] = useState(dayjs());

    // const { data, isSuccess } = useQuery({
    //     queryKey: [MONTH_DIARY.LIST, { year: dayJs.year(), month: dayJs.month() + 1 }],
    //     queryFn: () => fetchMonthDiaryList({ year: dayJs.year(), month: dayJs.month() + 1 }),
    //     placeholderData: {},
    // });

    // TODO: data?.pages[0]이면 prev가 잘되고, data?.pages[data?.pages.length - 1]이면 next가 잘된다.
    const { data, isSuccess, fetchNextPage, fetchPreviousPage } = useInfiniteQuery({
        queryKey: [MONTH_DIARY.LIST],
        queryFn: ({ pageParam = dayJs }) =>
            fetchMonthDiaryList({ year: pageParam.year(), month: pageParam.month() + 1 }),
        getNextPageParam: (lastPage) => {
            return lastPage.nextMonth;
        },
        getPreviousPageParam: (firstPage) => {
            return firstPage.prevMonth;
        },
        cacheTime: 0,
    });

    const onClickNextButton = () => {
        setDayJs(dayJs.clone().add(1, "month"));
        fetchNextPage();
    };

    const onClickPrevButton = () => {
        setDayJs(dayJs.clone().subtract(1, "month"));
        fetchPreviousPage();
    };

    // 캘린더 날짜 선택 조건
    const currentDay = dayjs().format();
    const calendar = useCalendar(
        dayJs,
        setDayJs,
        data?.pages[0].data,
        // data?.pages[dayJs.format('yyyy-mm')],
        onClickNextButton,
        onClickPrevButton
    );
    const dayUp = currentDay < dayjs(selectDay).format();
    // const wroteDiary = data?.pages[0][dayjs(selectDay).date()];

    if (!isSuccess) return null;

    // console.log(data.pages);
    // console.log(data.pageParams);

    return (
        <Common.FixedContent>
            <Style.CalendarWarp>
                <Style.CalendarContent>{calendar}</Style.CalendarContent>

                <Style.WarnningTextContent>
                    {dayUp && (
                        <>
                            현재 날짜보다 <span>이전날짜</span>를 선택해 주세요.
                        </>
                    )}
                    {/* {wroteDiary && (
                        <>
                            해당 날짜에는 일기를 썼습니다.
                            <br />
                            <span>다른 날짜</span>를 선택해 주세요.
                        </>
                    )} */}
                </Style.WarnningTextContent>

                <ButtonStyle.ButtonWrap>
                    {changeDay ? (
                        <>
                            <button onClick={() => setIsCalendar(false)}>닫기</button>
                            <button
                                // disabled={!(!dayUp && !wroteDiary)}
                                onClick={(e: MouseEvent<HTMLButtonElement>) => {
                                    e.preventDefault();
                                    setChangeDay(false);
                                    setIsCalendar(false);
                                }}
                            >
                                바꾸기
                            </button>
                        </>
                    ) : (
                        <>
                            <button onClick={() => navigate(-1)}>나가기</button>
                            <button
                                // disabled={!(!dayUp && !wroteDiary)}
                                onClick={(e: MouseEvent<HTMLButtonElement>) => {
                                    e.preventDefault();
                                    setIsCalendar(false);
                                }}
                            >
                                일기쓰기
                            </button>
                        </>
                    )}
                </ButtonStyle.ButtonWrap>
            </Style.CalendarWarp>
        </Common.FixedContent>
    );
};

export default Calendar;
