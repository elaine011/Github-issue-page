import { useContext, useEffect, useState } from "react";

import Footer from "../../components/Footer";
import api from "../../utils/api";
import { IssueContext, SelectContext } from "../../utils/SelectContext";
import LabelContent from "./LabelContent";
import LabelHeader from "./LabelHeader";

export default function Issues() {
  const [selectedSort, setSelectedSort] = useState<Boolean>(false);
  const [createLabel, setCreateLabel] = useState<Boolean>(false);
  const [labels, setLabels] = useState(null);
  const [userData, setUserData] = useContext(IssueContext)["userData"];

  useEffect(() => {
    async function getLabels() {
      const data = await api.getLabels(userData);
      setLabels(data);
    }
    getLabels();
  }, []);

  return (
    <>
      <SelectContext.Provider
        value={{
          sort: [selectedSort, setSelectedSort],
          create: [createLabel, setCreateLabel],
          labels: [labels, setLabels],
        }}
      >
        <LabelHeader />
        <LabelContent />
      </SelectContext.Provider>
      <Footer />
    </>
  );
}
