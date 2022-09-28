import { useState } from "react";
import Login from "./components/LoginHeader";
import Issues from "./Pages/Issues/Issues";

function App() {
  const [token, setToken] = useState("");

  return (
    <>
      <Login setTokenFn={setToken} />
      {token && <Issues />}
    </>
  );
}

export default App;
