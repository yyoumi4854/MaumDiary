import { useDeferredValue } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import dayjs from "dayjs";

import { useQueryClient } from "@tanstack/react-query";

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
import { useRecoilValue } from "recoil";

function App() {
    // const [now, setNow] = useState(dayjs());
    const period = usePeriodOfDay();

    const deferredPeriod = useDeferredValue(period); // 렌더링의 우선순위를 낮춘다. => 쓰로트링, 디바운스 setTimeout useTransision

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
                            <Route path="/diary:target"></Route>
                        </Routes>
                        <Footer />
                    </Router>
                </div>
            </Main>
        </>
    );
}

export default App;
