import { useDeferredValue } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import usePeriodOfDay from "./hooks/usePeriodOfDay";
import DynamicBackground from "./component/common/DynamicBackground";
import Main from "@/layout/Main";
import Header from "./layout/header/Header";
import Footer from "./layout/footer/Footer";
import Home from "./page/Home";
import Login from "./page/Login";
import Register from "./page/Register/Register";
import RecoveryID from "./page/RecoveryID";
import RecoveryPW from "./page/RecoveryPW";
import User from "./page/User";
import Diary from "./page/diary/Diary";
import DiaryCalendar from "./page/diary/DiaryCalendar";
import DiaryAll from "./page/diary/DiaryAll";
import DiaryChat from "./page/diary/DiaryChat";
import DiaryUserAnalysis from "./page/diary/DiaryUserAnalysis";

function App() {
    const period = usePeriodOfDay();

    const deferredPeriod = useDeferredValue(period);

    if (deferredPeriod === null) {
        return null;
    }

    return (
        <>
            <DynamicBackground period={deferredPeriod} />
            <Main period={deferredPeriod}>
                <div style={{ position: "relative", zIndex: 10 }}>
                    <Router>
                        <Header />
                        <Routes>
                            <Route path="/" element={<Home period={deferredPeriod} />} />
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
                        </Routes>
                        <Footer />
                    </Router>
                </div>
            </Main>
        </>
    );
}

export default App;
