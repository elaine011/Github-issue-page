import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createStore } from "redux";
import { createGlobalStyle } from "styled-components";
import { ApiProvider } from "@reduxjs/toolkit/query/react";

import App from "./App";
import Issues from "./Pages/Issues/Issues";
import Labels from "./Pages/Labels/Labels";
// import { apiSlice } from "./redux/apiSlices";

const root = ReactDOM.createRoot(document.getElementById("root"));

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: '-apple-system','BlinkMacSystemFont',"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
    margin: 0;
  }
`;

root.render(
  <BrowserRouter>
    <GlobalStyle />
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/labels" element={<Labels />}></Route>
      <Route path="/issues" element={<Issues />}>
        <Route path="/issues/:id" element={<Issues />}></Route>
        <Route path="/issues/new" element={<Issues />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
