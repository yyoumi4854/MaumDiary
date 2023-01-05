import { useState } from "react";

import Header from "./layout/header/Header";
import Footer from "./layout/footer/Footer";

function App() {
    return (
        <div style={{ background: "#BED6FF" }}>
            <Header />
            <div style={{ height: "120vh" }}></div>
            <Footer />
        </div>
    );
}

export default App;
