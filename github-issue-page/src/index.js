import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createStore } from "redux";
import { Reset } from "styled-reset";
import { createGlobalStyle } from "styled-components";

import App from "./App";
import Issues from "./components/Pages/Issues/Issues";
import Labels from "./components/Labels";
import Login from "./components/Login";
import reducer from "./reducers/reducer";

const root = ReactDOM.createRoot(document.getElementById("root"));

// const store = createStore(reducer);

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: '-apple-system','BlinkMacSystemFont',"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
  }
`;

root.render(
  <BrowserRouter>
    <Reset />
    <GlobalStyle />
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/labels" element={<Labels />}></Route>
      <Route path="/issues" element={<Issues />}>
        <Route path="/issues/:id" element={<Issues />}></Route>
        <Route path="/issues/new" element={<Issues />}></Route>
      </Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  </BrowserRouter>
);
