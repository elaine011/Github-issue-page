import { useState } from "react";

import { CheckIcon, IssueOpenedIcon } from "@primer/octicons-react";
import IssueList from "./IssueList";
import LabelsMenu from "./LabelsMenu";
import AssigneeMenu from "./AssigneeMenu";
import SortMenu from "./SortMenu";

export default function LabelContent() {
  const [displayLabelsMenu, setDisplayLabelsMenu] = useState(false);
  const [displayAssigneeMenu, setDisplayAsigneeMenu] = useState(false);
  const [displaySortMenu, setDisplaySortMenu] = useState(false);

  return (
    <div className="mx-auto max-w-7xl rounded-none sm:rounded-md sm:px-4 ">
      <div className="flex justify-between border border-solid border-primary-border bg-primary-bg p-4 sm:rounded-tl-md sm:rounded-tr-md">
        <div className="hidden text-sm lg:block">
          <a href="#/">
            <IssueOpenedIcon size={16} className="mr-1" />
            <span className="font-semibold text-primary-text">5 Open</span>
          </a>
          <a href="#/" className="ml-2.5">
            <CheckIcon
              size={16}
              className="mr-1 fill-fg-muted hover:fill-primary-text"
            />
            <span className="text-fg-muted hover:text-primary-text">
              1 Closed
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
            onClick={() => setDisplayLabelsMenu(!displayLabelsMenu)}
          >
            Label
            <span className="ml-1 hidden border-x-4 border-t-4 border-solid border-fg-muted border-x-transparent border-b-transparent align-middle sm:inline-block"></span>
            <LabelsMenu
              displayLabelsMenu={displayLabelsMenu}
              setDisplayLabelsMenu={setDisplayLabelsMenu}
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
            onClick={() => setDisplayAsigneeMenu(!displayAssigneeMenu)}
          >
            Assignee
            <span className="ml-1 hidden border-x-4 border-t-4 border-solid border-fg-muted border-x-transparent border-b-transparent align-middle sm:inline-block"></span>
            <AssigneeMenu
              displayAssigneeMenu={displayAssigneeMenu}
              setDisplayAsigneeMenu={setDisplayAsigneeMenu}
            />
          </div>
          <div
            className="relative cursor-pointer px-4 hover:text-primary-text"
            onClick={() => setDisplaySortMenu(!displaySortMenu)}
          >
            Sort
            <span className="ml-1 hidden border-x-4 border-t-4 border-solid border-fg-muted border-x-transparent border-b-transparent align-middle sm:inline-block"></span>
            <SortMenu
              displaySortMenu={displaySortMenu}
              setDisplaySortMenu={setDisplaySortMenu}
            />
          </div>
        </div>
      </div>
      <IssueList />
    </div>
  );
}
