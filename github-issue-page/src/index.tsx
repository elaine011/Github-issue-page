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
import Repo from "./components/Repo";

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
      <Route path="/" element={<App />}>
        <Route path="/" element={<Repo />} />
        <Route path="/labels" element={<Labels />}></Route>
        <Route path="/issues" element={<Issues />}></Route>
        <Route path="/newissue" element={<NewIssue />}></Route>
        <Route path="/issuePage/:issueId" element={<IssuePage />}></Route>
        <Route path="*" element={<Repo />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
