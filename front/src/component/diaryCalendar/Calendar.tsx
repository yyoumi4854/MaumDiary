import React from "react";
import dayjs from "dayjs";

import { Diary } from "@/types";
import useCalendar from "@/hooks/useCalendar";

import * as Style from "@/style/component/diaryCalendar/Calendar-style";

interface Props {
    dayJs: dayjs.Dayjs;
    setDayJs: React.Dispatch<React.SetStateAction<dayjs.Dayjs>>;
    data: { [key: number]: Diary };
}

const Calendar = ({ dayJs, setDayJs, data }: Props) => {
    // const calendar = useCalendar(dayJs, setDayJs, data);

    return <>{/* <Style.CalendarContent>{calendar}</Style.CalendarContent> */}</>;
};

export default Calendar;
