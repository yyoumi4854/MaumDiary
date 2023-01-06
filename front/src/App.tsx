import { useState } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./layout/header/Header";
import Footer from "./layout/footer/Footer";
import Login from "./page/login/Login";

function App() {
    return (
        <BrowserRouter>
            <div style={{ background: "#BED6FF" }}>
                <Header />
                <Routes>
                    <Route path="/login" element={<Login />} />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
