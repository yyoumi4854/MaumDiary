import React, { useState } from "react";
import dayjs from "dayjs";

import Calendar from "@/component/diaryCalendar/Calendar";
import Diary from "@/component/diaryCalendar/Diary";

import * as Style from "@/style/page/diary/DiaryCalendar-style";
import MonthStatistics from "@/component/diaryCalendar/MonthStatistics";

const DiaryCalendar = () => {
    const [dayJs, setDayJs] = useState(dayjs());
    const [diarySelect, setDiarySelect] = useState(String(dayjs().format(`YYYYMMDD`)));

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
