import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";

import App from "./App";
import theme from "./style/Theme";
import Global from "./style/Global";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <Global />
                <App />
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>
);
