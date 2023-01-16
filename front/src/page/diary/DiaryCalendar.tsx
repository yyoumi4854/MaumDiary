import React, { useState } from "react";
import dayjs from "dayjs";

import Calendar from "@/component/diaryCalendar/Calendar";
import Diary from "@/component/diaryCalendar/Diary";

import * as Style from "@/style/page/diary/DiaryCalendar-style";
import MonthStatistics from "@/component/diaryCalendar/MonthStatistics";

const DiaryCalendar = () => {
    const [diarySelect, setDiarySelect] = useState(String(dayjs().format(`YYYYMMDD`)));

    return (
        <Style.DiaryCalendarContent>
            <Calendar diarySelect={diarySelect} setDiarySelect={setDiarySelect} />
            <Diary diarySelect={diarySelect} />
            <MonthStatistics diarySelect={diarySelect} />
        </Style.DiaryCalendarContent>
    );
};

export default DiaryCalendar;
