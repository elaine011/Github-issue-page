import { useContext } from "react";

import { ChevronLeftIcon, ChevronRightIcon } from "@primer/octicons-react";
import { IssueContext } from "../utils/SelectContext";

export default function Pagination() {
  const [query, setQuery] = useContext(IssueContext)["query"];
  const [issueData, setIssueData] = useContext(IssueContext)["issues"];

  return (
    <div className="mt-4 mb-6 flex items-center justify-center px-1 text-sm">
      <a
        className="grid cursor-pointer grid-flow-col	place-items-center border border-solid border-transparent py-5px px-2.5 text-[#0969da] hover:rounded-md hover:border-primary-border"
        onClick={() => {
          if (query.page > 1) {
            setQuery({ ...query, page: query.page - 1 });
          }
        }}
      >
        <ChevronLeftIcon size={16} className="mr-1" />
        <span>Previous</span>
      </a>
      <a
        className="grid cursor-pointer grid-flow-col place-items-center border border-solid border-transparent py-5px px-2.5 text-[#0969da] hover:rounded-md hover:border-primary-border"
        onClick={() => {
          if (issueData.length >= 10) {
            setQuery({ ...query, page: query.page + 1 });
          }
        }}
      >
        <span>Next</span>
        <ChevronRightIcon size={16} className="ml-1" />
      </a>
    </div>
  );
}
