import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import App from "./App";
import theme from "./style/Theme";
import Global from "./style/Global";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <Global />
            <QueryClientProvider client={queryClient}>
                <ReactQueryDevtools initialIsOpen={false} />
                <App />
            </QueryClientProvider>
        </ThemeProvider>
    </React.StrictMode>
);
