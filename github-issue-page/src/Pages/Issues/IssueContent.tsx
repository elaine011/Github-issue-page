import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";

import { CheckIcon, IssueOpenedIcon } from "@primer/octicons-react";
import * as _ from "lodash";
import { actionType } from "../../redux/reducer";
import { IssueContext } from "../../utils/SelectContext";
import AssigneeMenu from "./AssigneeMenu";
import LabelsMenu from "./LabelsMenu";
import SortMenu from "./SortMenu";

export default function LabelContent() {
  const dispatch = useDispatch();
  const [userData, setUserData] = useContext(IssueContext)["userData"];
  const isDisplayAssignee = useSelector((state) => state["assignee"]);
  const isDisplayLabels = useSelector((state) => state["label"]);
  const isDisplaySort = useSelector((state) => state["sort"]);
  const [query, setQuery] = useContext(IssueContext)["query"];
  const [searchQuery, setSearchQuery] = useContext(IssueContext)["searchQuery"];

  return (
    <div className="mx-auto max-w-7xl rounded-none sm:rounded-md sm:px-4 ">
      <div className="flex justify-between border border-solid border-primary-border bg-primary-bg p-4 sm:rounded-tl-md sm:rounded-tr-md">
        <div className="hidden text-sm lg:block">
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
              console.log(searchQuery.includes("is:issue is:open"));
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
            <CheckIcon
              size={16}
              className="mr-1 fill-fg-muted hover:fill-primary-text"
            />
            <span>Closed</span>
          </a>
        </div>
        <div className="flex grow justify-between text-sm text-fg-muted sm:justify-start lg:justify-end">
          <div className="cursor-pointer px-4 hover:text-primary-text">
            Author
            <span className="ml-1 hidden border-x-4 border-t-4 border-solid border-fg-muted border-x-transparent border-b-transparent align-middle sm:inline-block"></span>
          </div>
          <div
            className="relative cursor-pointer px-4 hover:text-primary-text"
            onClick={() => dispatch({ type: actionType.labelType })}
          >
            Label
            <span className="ml-1 hidden border-x-4 border-t-4 border-solid border-fg-muted border-x-transparent border-b-transparent align-middle sm:inline-block"></span>
            <LabelsMenu
              isDisplayLabels={isDisplayLabels}
              isDisplayFullScreen={false}
            />
          </div>
          <div className="hidden cursor-pointer px-4 hover:text-primary-text md:block">
            Projects
            <span className="ml-1 hidden border-x-4 border-t-4 border-solid border-fg-muted border-x-transparent border-b-transparent align-middle sm:inline-block"></span>
          </div>
          <div className="hidden cursor-pointer px-4 hover:text-primary-text md:block">
            Milestones
            <span className="ml-1 hidden border-x-4 border-t-4 border-solid border-fg-muted border-x-transparent border-b-transparent align-middle sm:inline-block"></span>
          </div>
          <div
            className="relative cursor-pointer px-4 hover:text-primary-text"
            onClick={() => dispatch({ type: actionType.assigneeType })}
          >
            Assignee
            <span className="ml-1 hidden border-x-4 border-t-4 border-solid border-fg-muted border-x-transparent border-b-transparent align-middle sm:inline-block"></span>
            <AssigneeMenu
              isDisplayAssignee={isDisplayAssignee}
              isDisplayFullScreen={false}
            />
          </div>
          <div
            className="relative cursor-pointer px-4 hover:text-primary-text"
            onClick={() => dispatch({ type: actionType.sortType })}
          >
            Sort
            <span className="ml-1 hidden border-x-4 border-t-4 border-solid border-fg-muted border-x-transparent border-b-transparent align-middle sm:inline-block"></span>
            <SortMenu isDisplaySort={isDisplaySort} />
          </div>
        </div>
      </div>
    </div>
  );
}
