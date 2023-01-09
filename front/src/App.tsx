import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./layout/header/Header";
import Footer from "./layout/footer/Footer";
import Login from "./page/Login";
import RecoveryID from "./page/RecoveryID";

import { Star } from "./style/common/floatBackground-style";

function App() {
    return (
        <BrowserRouter>
            <div style={{ background: "#BED6FF" }}>
                <Header />
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/recovery/id" element={<RecoveryID />} />
                </Routes>
                {/* <div style={{ height: "110vh" }}>
                    <Star>
                        <div>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </Star>
                </div> */}
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
