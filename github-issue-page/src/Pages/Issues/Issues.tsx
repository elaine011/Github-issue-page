import { useState } from "react";

import IssueHeader from "./IssueHeader";
import Login from "../../components/Login";
import IssuesContent from "./IssuesContent";
import Footer from "../../components/Footer";
import { SelectContext } from "../../utils/SelectContext";

export default function Issues() {
  const [selectedSort, setSelectedSort] = useState<Boolean>(false);
  const [createLabel, setCreateLabel] = useState<Boolean>(false);
  return (
    <>
      <Login />
      <SelectContext.Provider
        value={{
          sort: [selectedSort, setSelectedSort],
          create: [createLabel, setCreateLabel],
        }}
      >
        <IssueHeader />
        <IssuesContent />
      </SelectContext.Provider>
      <Footer />
    </>
  );
}
