import { Period } from "@/types";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

import Header from "@/layout/header/Header";
import Footer from "@/layout/footer/Footer";
import Main from "@/layout/Main";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register/Register";
import RecoveryID from "./RecoveryID";
import RecoveryPW from "./RecoveryPW";
import User from "./User";
import Diary from "./diary/Diary";
import DiaryCalendar from "./diary/DiaryCalendar";
import DiaryAll from "./diary/DiaryAll";
import DiaryChat from "./diary/DiaryChat";
import DiaryUserAnalysis from "./diary/DiaryUserAnalysis";
import DiaryWrite from "./DiaryWrite";

const router = (period: Period) =>
    createBrowserRouter(
        createRoutesFromElements(
            <Route element={<Main period={period} />}>
                {/* <Header /> */}
                <Route path="/" element={<Home period={period} />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/recovery/id" element={<RecoveryID />} />
                <Route path="/recovery/password" element={<RecoveryPW />} />
                <Route path="/user" element={<User />} />
                <Route path="/diary" element={<Diary />}>
                    <Route path="calendar" element={<DiaryCalendar />} />
                    <Route path="all" element={<DiaryAll />} />
                    <Route path="chat" element={<DiaryChat />} />
                    <Route path="user/analysis" element={<DiaryUserAnalysis />} />
                </Route>
                <Route path="/diary/write" element={<DiaryWrite />} />
                {/* <Footer /> */}
            </Route>
        )
    );

export default router;
