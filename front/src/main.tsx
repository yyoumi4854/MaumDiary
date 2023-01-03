import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";

import App from "./App";
import theme from "./style/Theme";
import Global from "./style/Global";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <Global />
            <App />
        </ThemeProvider>
    </React.StrictMode>
);
