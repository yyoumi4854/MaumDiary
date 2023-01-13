import React, { useState } from "react";

import DiaryCalendar from "./DiaryCalendar";
import AsideNav from "./AsideNav";

import * as Style from "@/style/page/diary/Diary-style";

const Diary = () => {
    const [diaryCurrent, setDiaryCurrent] = useState("calendar");
    return (
        <Style.DiaryLayout>
            <div className="inner">
                <AsideNav diaryCurrent={diaryCurrent} setDiaryCurrent={setDiaryCurrent} />
                <div>
                    <DiaryCalendar />
                </div>
            </div>
        </Style.DiaryLayout>
    );
};

export default Diary;
