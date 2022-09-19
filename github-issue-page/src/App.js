import { Reset } from "styled-reset";
import { createGlobalStyle } from "styled-components";

import Login from "./components/Login";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: '-apple-system','BlinkMacSystemFont',"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
  }
`;

function App() {
  return (
    <>
      <Reset />
      <GlobalStyle />
      <Login />
    </>
  );
}

export default App;
