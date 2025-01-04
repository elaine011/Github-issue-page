import { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  MilestoneIcon,
  SearchIcon,
  TagIcon,
  XIcon,
} from "@primer/octicons-react";
import FiltersMenu from "./FiltersMenu";
import { actionType } from "../../redux/reducer";
import { IssueContext } from "../../utils/SelectContext";
import StateBtn from "./StateBtn";

export default function ({ issuesLength }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userData, setUserData] = useContext(IssueContext)["userData"];
  const filters = useSelector((state) => state["filter"]);
  const [hoverClearQuery, setHoverClearQuery] = useState(false);
  const [query, setQuery] = useContext(IssueContext)["query"];
  const [labelQuery, setLabelQuery] = useContext(IssueContext)["label"];
  const [searchQuery, setSearchQuery] = useContext(IssueContext)["searchQuery"];
  const [inputValue, setInputValue] = useContext(IssueContext)["input"];

  return (
    <div className="mx-auto mt-6 flex max-w-7xl flex-wrap justify-between px-4 text-sm">
      <div className="flex w-full flex-wrap md:mb-4 md:h-8 md:flex-nowrap">
        <div className="flex w-full justify-between md:w-auto md:flex-nowrap">
          <div className="flex text-primary-text md:ml-auto md:pl-2">
            <div>
              <button className="rounded-r-0 flex items-center rounded-l-md border border-solid border-primary-border py-5px px-4 hover:bg-[#f3f4f6]">
                <TagIcon size={16} className="left-2 top-9px" />
                <a className="mx-3px" onClick={() => navigate("/labels")}>
                  Labels
                </a>
                <span className="hidden rounded-[2em] border border-solid border-counter-border bg-neutral-muted px-1.5 text-center	text-xs font-medium leading-18px text-primary-text md:block">
                  {issuesLength}
                </span>
              </button>
            </div>
            <div>
              <button className="flex flex-nowrap rounded-r-md border border-solid border-primary-border py-5px px-4 hover:bg-[#f3f4f6]">
                <MilestoneIcon size={16} className="left-2 top-9px" />
                <span className="mx-3px">MileStones</span>
                <span className="hidden rounded-[2em] border border-solid border-counter-border bg-neutral-muted px-1.5 text-center	text-xs font-medium leading-18px text-primary-text md:block">
                  0
                </span>
              </button>
            </div>
          </div>
          <button
            className="ml-4 whitespace-nowrap rounded-md border border-solid border-secondary-border bg-btn-primary-bg py-5px px-4 font-medium text-white hover:bg-[#2c974b]"
            onClick={() => navigate("/newissue")}
          >
            <a className="hidden md:block">New issue</a>
            <a className="md:hidden">New</a>
          </button>
        </div>
        <div className="my-6 flex w-full md:order-first md:mt-0 md:w-auto md:grow">
          <button
            className="relative flex h-8 items-center rounded-l-md border border-solid border-secondary-border bg-primary-bg py-5px  px-4 font-medium text-primary-text shadow-shadow hover:bg-[#f3f4f6]"
            onClick={() => dispatch({ type: actionType.filtersType })}
          >
            Filters
            <span className="ml-1 mt-1 inline-block h-0 w-0 border-4 border-b-0 border-solid border-transparent border-t-fg-muted content-str"></span>
            <FiltersMenu />
          </button>
          <div className="relative w-full">
            <SearchIcon
              size={16}
              className="absolute left-2 top-9px fill-fg-muted"
            />
            <input
              type="text"
              placeholder="Search all issues"
              value={searchQuery.join(" ")}
              className="w-full rounded-r-md border border-solid border-secondary-border bg-primary-bg py-5px pl-8 pr-3 text-fg-muted shadow-input-shadow"
              onChange={(e) => {
                setInputValue(e.target.value.split("is:issue is:open")[1]);
              }}
            ></input>
          </div>
        </div>
      </div>
      <StateBtn />

      {(query.label ||
        query.assignee ||
        query.sort ||
        query.created ||
        query.mentioned ||
        query.state) && (
        <a
          className="mx-auto mb-4 flex w-full max-w-7xl cursor-pointer items-center font-semibold text-fg-muted hover:fill-inherit hover:text-[#0969da]"
          onMouseEnter={() => setHoverClearQuery(true)}
          onMouseLeave={() => setHoverClearQuery(false)}
        >
          <XIcon
            size={16}
            className={`mr-1 rounded-md bg-[#6e7781] fill-white ${
              hoverClearQuery ? "bg-[#0969da]" : "bg-[#617781]"
            }`}
          />
          <span
            onClick={() => {
              setQuery({
                owner: userData.userName,
                repo: userData.repo,
                perPage: 10,
                page: 1,
              });
              setLabelQuery([]);
              setSearchQuery(["is:issue is:open"]);
            }}
          >
            Clear current search query, filters, and sorts
          </span>
        </a>
      )}
    </div>
  );
}
