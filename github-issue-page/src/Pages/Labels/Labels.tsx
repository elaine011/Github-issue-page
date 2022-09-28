import { useState } from "react";

import Footer from "../../components/Footer";
import Login from "../../components/LoginHeader";
import Pagination from "../../components/Pagination";
import RepoHeader from "../../components/RepoHeader";
import LabelContent from "./LabelContent";
import LabelHeader from "./LabelHeader";

export default function Labels() {
  const [token, setToken] = useState("");

  return (
    <>
      <Login setTokenFn={setToken} />
      <RepoHeader />
      {token && (
        <>
          <LabelHeader />
          <LabelContent />
          <Pagination />
          <Footer />
        </>
      )}
    </>
  );
}
