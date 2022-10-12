import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import App from "./App";
import Issues from "./Pages/Issues/Issues";
import Labels from "./Pages/Labels/Labels";
import "./index.css";
import NewIssue from "./Pages/NewIssue/NewIssue";
import IssuePage from "./Pages/IssuePage/IssuePage";

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
      <Route path="/labels" element={<App />}></Route>
      <Route path="/labels" element={<Labels />}></Route>
      <Route path="/" element={<Issues />}>
        <Route path="/issues/:id" element={<Issues />}></Route>
        <Route path="/issues/new" element={<Issues />}></Route>
      </Route>
      <Route path="/newissue" element={<NewIssue />}></Route>
      <Route path="/issuePage/:issueId" element={<IssuePage />}></Route>
    </Routes>
  </BrowserRouter>
);
