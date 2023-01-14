import React from "react";

import Calendar from "@/component/diaryCalendar/Calendar";

import * as Style from "@/style/page/diary/DiaryCalendar-style";

const DiaryCalendar = () => {
    return (
        <Style.DiaryCalendarContent>
            <Calendar />
            <div>통계</div>
        </Style.DiaryCalendarContent>
    );
};

export default DiaryCalendar;
