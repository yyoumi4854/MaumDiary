import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Main from "@/layout/Main";
import Header from "./layout/header/Header";
import Footer from "./layout/footer/Footer";
import Home from "./page/Home";
import Login from "./page/Login";
import RecoveryID from "./page/RecoveryID";
import RecoveryPW from "./page/RecoveryPW";
import DynamicBackground from "./component/common/DynamicBackground";

function App() {
    return (
        <>
            <DynamicBackground />
            <Main>
                <Router>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/recovery/id" element={<RecoveryID />} />
                        <Route path="/recovery/password" element={<RecoveryPW />} />
                    </Routes>
                    <Footer />
                </Router>
            </Main>
        </>
    );
}

export default App;
