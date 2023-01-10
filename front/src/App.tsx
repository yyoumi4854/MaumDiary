import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import DynamicBackground from "./component/common/DynamicBackground";
import Header from "./layout/header/Header";
import Footer from "./layout/footer/Footer";
import Login from "./page/Login";
import RecoveryID from "./page/RecoveryID";
import RecoveryPW from "./page/RecoveryPW";

function App() {
    return (
        <Router>
            <div style={{ background: "#BED6FF" }}>
                <Header />
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/recovery/id" element={<RecoveryID />} />
                    <Route path="/recovery/password" element={<RecoveryPW />} />
                </Routes>
                <DynamicBackground />
                <Footer />
            </div>
        </Router>
    );
}

export default App;
