import React, { useState } from "react";
import { QueryClient } from "@tanstack/react-query";
import { useLoaderData } from "react-router-dom";

import dayjs from "dayjs";

import Calendar from "@/component/diaryCalendar/Calendar";
import Diary from "@/component/diaryCalendar/Diary";
import { fetchMonthDiaryList } from "@/api/diary";
import { MONTH_DIARY } from "@/constant/QUERY_KEY";
import { Diary as DiaryType } from "@/types";

import * as Style from "@/style/page/diary/DiaryCalendar-style";
import MonthStatistics from "@/component/diaryCalendar/MonthStatistics";

const getMonthDiaryList = () => ({
    queryKey: [MONTH_DIARY.LIST, { year: dayjs().year(), month: dayjs().month() }],
    queryFn: () => fetchMonthDiaryList({ year: dayjs().year(), month: dayjs().month() }),
});

export const loader = (queryClient: QueryClient) => async () => {
    const query = getMonthDiaryList();
    return queryClient.getQueryData(query.queryKey) ?? (await queryClient.fetchQuery(query));
};

const DiaryCalendar = () => {
    const [dayJs, setDayJs] = useState(dayjs());
    const [diarySelect, setDiarySelect] = useState(String(dayjs().format(`YYYYMMDD`)));
    const MonthDiaryList = useLoaderData();

    console.log("MonthDiaryList", MonthDiaryList);

    return (
        <Style.DiaryCalendarContent>
            <Calendar
                dayJs={dayJs}
                setDayJs={setDayJs}
                diarySelect={diarySelect}
                setDiarySelect={setDiarySelect}
            />
            <Diary diarySelect={diarySelect} />
            <MonthStatistics dayJs={dayJs} />
        </Style.DiaryCalendarContent>
    );
};

export default DiaryCalendar;
