import {
  CheckIcon,
  IssueOpenedIcon,
  MilestoneIcon,
  SearchIcon,
  TagIcon,
  XIcon,
} from "@primer/octicons-react";
import { useState } from "react";
import FiltersMenu from "./FiltersMenu";

export default function () {
  const [displayFiltersMenu, setDisplayFiltersMenu] = useState(false);

  return (
    <div className="mx-auto mt-6 flex max-w-7xl flex-wrap justify-between px-4 text-sm">
      <div className="flex w-full flex-wrap md:mb-4 md:h-8 md:flex-nowrap">
        <div className="flex w-full justify-between md:w-auto md:flex-nowrap">
          <div className="flex text-primary-text md:ml-auto md:pl-2">
            <div>
              <button className="rounded-r-0 flex items-center rounded-l-md border border-solid border-primary-border py-5px px-4 hover:bg-[#f3f4f6]">
                <TagIcon size={16} className="left-2 top-9px" />
                <span className="mx-3px">Labels</span>
                <span className="hidden rounded-[2em] border border-solid border-counter-border bg-neutral-muted px-1.5 text-center	text-xs font-medium leading-18px text-primary-text md:block">
                  7
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
          <button className="ml-4 whitespace-nowrap rounded-md border border-solid border-secondary-border bg-btn-primary-bg py-5px px-4 font-medium text-white hover:bg-[#2c974b]">
            <span className="hidden md:block">New issue</span>
            <span className="md:hidden">New</span>
          </button>
        </div>
        <div className="my-6 flex w-full md:order-first md:mt-0 md:w-auto md:grow">
          <button
            className="relative flex h-8 items-center rounded-l-md border border-solid border-secondary-border bg-primary-bg py-5px  px-4 font-medium text-primary-text shadow-shadow hover:bg-[#f3f4f6]"
            onClick={() => setDisplayFiltersMenu(!displayFiltersMenu)}
          >
            Filters
            <span className="ml-1 mt-1 inline-block h-0 w-0 border-4 border-b-0 border-solid border-transparent border-t-fg-muted content-str"></span>
            <FiltersMenu
              displayFiltersMenu={displayFiltersMenu}
              setDisplayFiltersMenu={setDisplayFiltersMenu}
            />
          </button>
          <div className="relative w-full">
            <SearchIcon
              size={16}
              className="absolute left-2 top-9px fill-fg-muted"
            />
            <input
              type="text"
              placeholder="Search all issues"
              value="is:issue is:open"
              className="w-full rounded-r-md border border-solid border-secondary-border bg-primary-bg py-5px pl-8 pr-3 text-fg-muted shadow-input-shadow"
            ></input>
          </div>
        </div>
      </div>
      <div className="order-last mb-4 lg:hidden">
        <a href="#/">
          <IssueOpenedIcon size={16} className="mr-1" />
          <span className="font-semibold text-primary-text">5 Open</span>
        </a>
        <a href="#/" className="ml-2.5">
          <CheckIcon size={16} className="mr-1 fill-fg-muted" />
          <span className="text-fg-muted hover:text-primary-text">
            1 Closed
          </span>
        </a>
      </div>
      <a
        href="#/"
        className="mx-auto mb-4 flex w-full max-w-7xl items-center font-semibold text-fg-muted hover:fill-inherit hover:text-[#0969da]"
      >
        <XIcon
          size={16}
          className="mr-1 rounded-md bg-[#6e7781] fill-white hover:bg-[#0969da]"
        />
        <span>Clear current search query, filters, and sorts</span>
      </a>
    </div>
  );
}
