import * as _ from "lodash";
import { useContext } from "react";

import { CheckIcon, IssueOpenedIcon } from "@primer/octicons-react";
import { IssueContext } from "../../utils/SelectContext";

export default function StateBtn() {
  const [userData, setUserData] = useContext(IssueContext)["userData"];
  const [query, setQuery] = useContext(IssueContext)["query"];
  const [searchQuery, setSearchQuery] = useContext(IssueContext)["searchQuery"];
  return (
    <div className="order-last mb-4 lg:hidden">
      <a
        className={`cursor-pointer ${
          searchQuery.includes("is:issue is:open")
            ? "font-semibold text-[#24292f]"
            : "text-[#57606a] hover:text-primary-text"
        }`}
        onClick={() => {
          setQuery({ owner: userData.userName, repo: userData.repo });
          const searchArr = _.uniq(["is:issue is:open", ...searchQuery]);
          setSearchQuery(_.pull(searchArr, "is:issue is:closed"));
        }}
      >
        <IssueOpenedIcon size={16} className="mr-1" />
        <span>Open</span>
      </a>
      <a
        className={`ml-2.5 cursor-pointer ${
          searchQuery.includes("is:issue is:closed")
            ? "font-semibold text-[#24292f]"
            : "text-[#57606a] hover:text-primary-text"
        }`}
        onClick={() => {
          setQuery({ ...query, state: "closed" });
          const searchArr = _.uniq(["is:issue is:closed", ...searchQuery]);
          setSearchQuery(_.pull(searchArr, "is:issue is:open"));
        }}
      >
        <CheckIcon size={16} className="mr-1 fill-fg-muted" />
        <span>Closed</span>
      </a>
    </div>
  );
}
