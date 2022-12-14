import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

import { ThemeProvider } from "styled-components";

import { styled, ResetStyle } from "./lib/Styles";

import { RecoilRoot } from "recoil";

import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();

const app = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
app.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <BrowserRouter>
          <ThemeProvider theme={styled}>
            <ResetStyle />
            <App />
          </ThemeProvider>
        </BrowserRouter>
      </RecoilRoot>
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
