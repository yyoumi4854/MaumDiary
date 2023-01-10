import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import DynamicBackground from "./component/common/DynamicBackground";
import Main from "./layout/Main";

function App() {
    return (
        <Router>
            <DynamicBackground />
            <Routes>
                <Route path="/" element={<Main />} />
            </Routes>
        </Router>
    );
}

export default App;
