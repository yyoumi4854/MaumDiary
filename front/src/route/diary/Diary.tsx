import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import AsideNav from "./AsideNav";
import BottomNav from "./BottomNav";

import * as Style from "@/style/page/diary/Diary-style";

const Diary = () => {
    return (
        <Style.DiaryLayout className="content">
            <div className="inner">
                <AsideNav />
                <Outlet />
            </div>
            <BottomNav />
        </Style.DiaryLayout>
    );
};

export default Diary;
