import { QueryClient } from "@tanstack/react-query";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

import { Period } from "@/types";
import Main from "@/layout/Main";
import Home, { loader as homeLoader } from "./Home";
import Login from "./Login";
import Register from "./Register/Register";
import RecoveryID from "./RecoveryID";
import RecoveryPW from "./RecoveryPW";
import User from "./User";
import Diary from "./diary/Diary";
import DiaryCalendar, { loader as calendarLoader } from "./diary/DiaryCalendar";
import DiaryAll from "./diary/DiaryAll";
import DiaryChat from "./diary/DiaryChat";
import DiaryUserAnalysis from "./diary/DiaryUserAnalysis";
import DiaryWrite from "./DiaryWrite";

const router = (period: Period, queryClient: QueryClient) =>
    // TODO: rootLoaderFn에 유저의 데이터 가져오는 로직 만들기
    // 닉네임 유니크하게 만들지 의논하기
    createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Main period={period} />} errorElement={<div></div>}>
                <Route
                    index={true}
                    loader={homeLoader(queryClient)}
                    element={<Home period={period} />}
                />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/recovery/id" element={<RecoveryID />} />
                <Route path="/recovery/password" element={<RecoveryPW />} />
                <Route path="/user" element={<User />} />
                <Route path="/diary" element={<Diary />}>
                    <Route
                        path="calendar"
                        loader={calendarLoader(queryClient)}
                        element={<DiaryCalendar />}
                    />
                    <Route path="all" element={<DiaryAll />} />
                    <Route path="chat" element={<DiaryChat />} />
                    <Route path="user/analysis" element={<DiaryUserAnalysis />} />
                </Route>
                <Route path="/diary/write" element={<DiaryWrite />} />
            </Route>
        )
    );

export default router;
