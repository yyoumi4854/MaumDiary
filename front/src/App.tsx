import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Main from "@/layout/Main";
import Header from "./layout/header/Header";
import Footer from "./layout/footer/Footer";
import Home from "./page/Home";
import Login from "./page/Login";
import Register from "./page/Register/Register";
import RecoveryID from "./page/RecoveryID";
import RecoveryPW from "./page/RecoveryPW";
import User from "./page/User";

import DynamicBackground from "./component/common/DynamicBackground";
import { relative } from "path";

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
                        <Route path="/register" element={<Register />} />
                        <Route path="/recovery/id" element={<RecoveryID />} />
                        <Route path="/recovery/password" element={<RecoveryPW />} />
                        <Route path="/user" element={<User />} />
                    </Routes>
                    <Footer />
                </Router>
            </Main>
        </>
    );
}

export default App;
