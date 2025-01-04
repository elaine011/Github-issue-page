import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import LoginHeader from "./components/LoginHeader";
import { IssueContext } from "./utils/SelectContext";

function App() {
  const [userData, setUserData] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    setUserData({
      userName:
        userData?.userName ??
        JSON.parse(localStorage.getItem("userData"))?.userName,
      repo: JSON.parse(localStorage.getItem("userData"))?.repo ?? "",
      visibility:
        JSON.parse(localStorage.getItem("userData"))?.visibility ?? "",
      token: JSON.parse(localStorage.getItem("loginToken")) ?? token,
    });
  }, [token]);

  return (
    <IssueContext.Provider
      value={{ userData: [userData, setUserData], token: [token, setToken] }}
    >
      <>
        <LoginHeader />
        {token && <Outlet />}
      </>
    </IssueContext.Provider>
  );
}

export default App;
