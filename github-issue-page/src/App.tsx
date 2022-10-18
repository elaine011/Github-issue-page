import { useEffect, useState } from "react";
import LoginHeader from "./components/LoginHeader";
import { Outlet } from "react-router-dom";
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
    });
  }, [token]);

  return (
    <>
      <LoginHeader
        userData={userData}
        setUserData={setUserData}
        setToken={setToken}
      />
      <IssueContext.Provider
        value={{ userData: [userData, setUserData], token: [token, setToken] }}
      >
        {token && <Outlet />}
      </IssueContext.Provider>
    </>
  );
}

export default App;
