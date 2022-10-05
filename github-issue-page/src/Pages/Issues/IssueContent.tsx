import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";

import { CheckIcon, IssueOpenedIcon } from "@primer/octicons-react";
import LabelsMenu from "./LabelsMenu";
import AssigneeMenu from "./AssigneeMenu";
import SortMenu from "./SortMenu";
import { actionType } from "../../redux/reducer";
import { IssueContext } from "../../utils/SelectContext";

export default function LabelContent() {
  const dispatch = useDispatch();
  const isDisplayAssignee = useSelector((state) => state["assignee"]);
  const isDisplayLabels = useSelector((state) => state["label"]);
  const isDisplaySort = useSelector((state) => state["sort"]);
  const [query, setQuery] = useContext(IssueContext)["query"];

  return (
    <div className="mx-auto max-w-7xl rounded-none sm:rounded-md sm:px-4 ">
      <div className="flex justify-between border border-solid border-primary-border bg-primary-bg p-4 sm:rounded-tl-md sm:rounded-tr-md">
        <div className="hidden text-sm lg:block">
          <a
            href="#/"
            onClick={() => setQuery({ owner: "elaine011", repo: "test-issue" })}
          >
            <IssueOpenedIcon size={16} className="mr-1" />
            <span className="font-semibold text-primary-text">Open</span>
          </a>
          <a
            href="#/"
            className="ml-2.5"
            onClick={() => setQuery({ ...query, state: "closed" })}
          >
            <CheckIcon
              size={16}
              className="mr-1 fill-fg-muted hover:fill-primary-text"
            />
            <span className="text-fg-muted hover:text-primary-text">
              Closed
            </span>
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
