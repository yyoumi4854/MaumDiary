import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./layout/header/Header";
import Footer from "./layout/footer/Footer";

import Login from "./page/Login";
import Register from "./page/Register/Register";
import RecoveryID from "./page/RecoveryID";
import RecoveryPW from "./page/RecoveryPW";
import User from "./page/User";

import { Star } from "./style/common/floatBackground-style";

function App() {
    return (
        <BrowserRouter>
            <div style={{ background: "#BED6FF" }}>
                <Header />
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/recovery/id" element={<RecoveryID />} />
                    <Route path="/recovery/password" element={<RecoveryPW />} />
                    <Route path="/user" element={<User />} />
                </Routes>
                {/* <div style={{ height: "110vh" }}>
                    <Star>
                        <div>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </Star>
                    <Star>
                        <div>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </Star>
                    <Star>
                        <div>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </Star>
                    <Star>
                        <div>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </Star>
                    <Star>
                        <div>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </Star>
                    <Star>
                        <div>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </Star>
                    <Star>
                        <div>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </Star>
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
