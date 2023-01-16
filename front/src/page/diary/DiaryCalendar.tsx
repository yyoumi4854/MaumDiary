import React, { useState } from "react";
import dayjs from "dayjs";

import Calendar from "@/component/diaryCalendar/Calendar";
import Diary from "@/component/diaryCalendar/Diary";

import * as Style from "@/style/page/diary/DiaryCalendar-style";
import MonthAnalysis from "@/component/diaryCalendar/MonthAnalysis";

const DiaryCalendar = () => {
    const [diarySelect, setDiarySelect] = useState(String(dayjs().format(`YYYYMMDD`)));

    return (
        <Style.DiaryCalendarContent>
            <Calendar diarySelect={diarySelect} setDiarySelect={setDiarySelect} />
            <Diary diarySelect={diarySelect} />
            <MonthAnalysis />
        </Style.DiaryCalendarContent>
    );
};

export default DiaryCalendar;
