import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { ResetStyle, commonStyle } from "@/lib/Style";
import { RecoilRoot } from "recoil";

const app = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
app.render(
  <React.StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <ThemeProvider theme={commonStyle}>
          <ResetStyle />
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
