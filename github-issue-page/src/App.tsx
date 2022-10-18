import { useEffect, useState } from "react";
import LoginHeader from "./components/LoginHeader";
import { Outlet } from "react-router-dom";
import { IssueContext } from "./utils/SelectContext";

function App() {
  const [token, setToken] = useState("");
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("supabase.auth.token")) ?? [];
    setUserData({
      userName: data.currentSession?.user.identities[0].identity_data.user_name,
      repo: JSON.parse(localStorage.getItem("userData"))?.repo ?? "",
      visibility:
        JSON.parse(localStorage.getItem("userData"))?.visibility ?? "",
    });
  }, []);

  return (
    <>
      <LoginHeader setTokenFn={setToken} />
      <IssueContext.Provider value={{ userData: [userData, setUserData] }}>
        {token && <Outlet />}
      </IssueContext.Provider>
    </>
  );
}

export default App;
