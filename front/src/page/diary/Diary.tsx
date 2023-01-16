import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import AsideNav from "./AsideNav";

import * as Style from "@/style/page/diary/Diary-style";

const Diary = () => {
    const [diaryNavCurrent, setDiaryNavCurrent] = useState("calendar");
    return (
        <Style.DiaryLayout className="content">
            <div className="inner">
                <AsideNav
                    diaryNavCurrent={diaryNavCurrent}
                    setDiaryNavCurrent={setDiaryNavCurrent}
                />
                <Outlet />
            </div>
        </Style.DiaryLayout>
    );
};

export default Diary;
