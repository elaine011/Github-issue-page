import { useContext } from "react";

import { ChevronLeftIcon, ChevronRightIcon } from "@primer/octicons-react";
import { IssueContext } from "../utils/SelectContext";

export default function Pagination() {
  const [query, setQuery] = useContext(IssueContext)["query"];
  const [issueData, setIssueData] = useContext(IssueContext)["issues"];

  return (
    <div className="mt-4 mb-6 flex items-center justify-center px-1 text-sm">
      <a
        className={`grid grid-flow-col place-items-end border border-solid border-transparent py-5px px-2.5  hover:rounded-md ${
          query?.page === 1
            ? "text-[#8c959f]"
            : "cursor-pointer text-[#0969da] hover:border-primary-border"
        }`}
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
        className={`grid grid-flow-col place-items-end border border-solid border-transparent py-5px px-2.5  hover:rounded-md ${
          issueData.length >= 10
            ? "cursor-pointer text-[#0969da] hover:border-primary-border"
            : "text-[#8c959f]"
        }`}
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
