import { useState, useEffect } from "react";

import IssueHeader from "./IssueHeader";
import IssuesContent from "./IssuesContent";
import Footer from "../../components/Footer";
import { SelectContext } from "../../utils/SelectContext";
import api from "../../utils/api";

export default function Issues() {
  const [selectedSort, setSelectedSort] = useState<Boolean>(false);
  const [createLabel, setCreateLabel] = useState<Boolean>(false);
  const [labels, setLabels] = useState(null);

  useEffect(() => {
    async function getLabels() {
      const data = await api.getLabels();
      setLabels(data);
    }
    getLabels();
  }, []);
  // console.log(labels);

  return (
    <>
      <SelectContext.Provider
        value={{
          sort: [selectedSort, setSelectedSort],
          create: [createLabel, setCreateLabel],
          labels: [labels, setLabels],
        }}
      >
        <IssueHeader />
        <IssuesContent />
      </SelectContext.Provider>
      <Footer />
    </>
  );
}
