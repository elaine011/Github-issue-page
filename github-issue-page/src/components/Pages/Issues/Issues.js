import { useState } from "react";

import IssueHeader from "./IssueHeader";
import Login from "../../Login";
import IssuesContent from "./IssuesContent";
import Footer from "../../Footer";

export default function Issues() {
  const [selectedSort, setSelectedSort] = useState(false);
  const [selectedEditBtn, setSelectedEditBtn] = useState(false);
  return (
    <>
      <Login />
      <IssueHeader />
      <IssuesContent
        selectedSort={selectedSort}
        setSelectedSort={setSelectedSort}
        selectedEditBtn={selectedEditBtn}
        setSelectedEditBtn={setSelectedEditBtn}
      />
      <Footer />
    </>
  );
}
