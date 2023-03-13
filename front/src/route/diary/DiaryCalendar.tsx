import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { QueryClient, useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";

import { selectedDayAtom } from "@/recoil/selectedDay";
import { MONTH_DIARY } from "@/constant/QUERY_KEY";
import { fetchMonthDiaryList } from "@/api/diary";
import Calendar from "@/component/diaryCalendar/Calendar";
import Diary from "@/component/diaryCalendar/diary/Diary";
import MonthStatistics from "@/component/diaryCalendar/MonthStatistics";

import * as Style from "@/style/page/diary/DiaryCalendar-style";

const getMonthDiaryList = () => ({
    queryKey: [MONTH_DIARY.LIST, { year: dayjs().year(), month: dayjs().month() + 1 }],
    queryFn: () => fetchMonthDiaryList({ year: dayjs().year(), month: dayjs().month() + 1 }),
});

export const loader = (queryClient: QueryClient) => async () => {
    const query = getMonthDiaryList();
    return queryClient.getQueryData(query.queryKey) ?? (await queryClient.fetchQuery(query));
};

const DiaryCalendar = () => {
    const selectDay = useRecoilValue(selectedDayAtom);

    const [dayJs, setDayJs] = useState(dayjs());

    const { data, isSuccess } = useQuery({
        queryKey: [MONTH_DIARY.LIST, { year: dayJs.year(), month: dayJs.month() + 1 }],
        queryFn: () => fetchMonthDiaryList({ year: dayJs.year(), month: dayJs.month() + 1 }),
        placeholderData: {},
    });
    if (!isSuccess) return null;

    return (
        <Style.DiaryCalendarContent>
            <Calendar dayJs={dayJs} setDayJs={setDayJs} data={data} />
            <Diary selectedDiary={data[dayjs(selectDay).date()]} />
            <MonthStatistics dayJs={dayJs} data={data} />
        </Style.DiaryCalendarContent>
    );
};

export default DiaryCalendar;
