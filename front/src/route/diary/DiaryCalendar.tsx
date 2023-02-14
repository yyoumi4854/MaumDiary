import React, { useState } from "react";
import { QueryClient, useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";

import Calendar from "@/component/diaryCalendar/Calendar";
import Diary from "@/component/diaryCalendar/diary/Diary";
import { fetchMonthDiaryList } from "@/api/diary";
import { MONTH_DIARY } from "@/constant/QUERY_KEY";

import * as Style from "@/style/page/diary/DiaryCalendar-style";
import MonthStatistics from "@/component/diaryCalendar/MonthStatistics";

const getMonthDiaryList = () => ({
    queryKey: [MONTH_DIARY.LIST, { year: dayjs().year(), month: dayjs().month() + 1 }],
    queryFn: () => fetchMonthDiaryList({ year: dayjs().year(), month: dayjs().month() + 1 }),
});

export const loader = (queryClient: QueryClient) => async () => {
    const query = getMonthDiaryList();
    return queryClient.getQueryData(query.queryKey) ?? (await queryClient.fetchQuery(query));
};

const DiaryCalendar = () => {
    const [dayJs, setDayJs] = useState(dayjs());
    const [diarySelect, setDiarySelect] = useState(String(dayjs().format(`YYYYMMDD`)));
    // seletedDay atom으로 만들기
    // const [isOn, setIsOn] = useState(true);
    const { data, isSuccess } = useQuery({
        queryKey: [MONTH_DIARY.LIST, { year: dayJs.year(), month: dayJs.month() + 1 }],
        queryFn: () => fetchMonthDiaryList({ year: dayJs.year(), month: dayJs.month() + 1 }),
        // enabled: isOn,

        // onSuccess: () => {
        //     setIsOn(() => false);
        // },
    });
    console.log("렌더링됨");
    if (!isSuccess) return null;
    return (
        <Style.DiaryCalendarContent>
            <Calendar
                dayJs={dayJs}
                setDayJs={setDayJs}
                diarySelect={diarySelect}
                setDiarySelect={setDiarySelect}
                // setIsOn={setIsOn}
                data={data}
            />
            <Diary diarySelect={diarySelect} selectedDiary={data[dayjs(diarySelect).date()]} />
            <MonthStatistics dayJs={dayJs} data={data} />
        </Style.DiaryCalendarContent>
    );
};

export default DiaryCalendar;
