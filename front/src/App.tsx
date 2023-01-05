import { useState } from "react";

import { Route, Routes } from "react-router-dom";

import Header from "./layout/header/Header";
import Footer from "./layout/footer/Footer";
import Login from "./page/login/Login";

function App() {
    return (
        <div style={{ background: "#BED6FF" }}>
            <Header />
            {/* <div style={{ height: "120vh" }}></div> */}
            <Routes>
                <Route path="/login" element={<Login />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
