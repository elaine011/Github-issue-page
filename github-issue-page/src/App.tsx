import { useState } from "react";
import Login from "./components/LoginHeader";
import Labels from "./Pages/Labels/Labels";

function App() {
  const [token, setToken] = useState("");

  return (
    <>
      <Login setTokenFn={setToken} />
      {token && <Labels />}
    </>
  );
}

export default App;
