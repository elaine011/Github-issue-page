import { useDispatch } from "react-redux";
import { useContext, useState } from "react";

import { CheckIcon, XIcon } from "@primer/octicons-react";
import { actionType } from "../../redux/reducer";
import { IssueContext } from "../../utils/SelectContext";

export default function SortMenu({ isDisplaySort }) {
  const dispatch = useDispatch();
  const [query, setQuery] = useContext(IssueContext)["query"];
  const [check, setCheck] = useState(false);
  const [searchQuery, setSearchQuery] = useContext(IssueContext)["searchQuery"];

  const labelslist = [
    {
      state: "Newest",
      query: "created-desc",
    },
    {
      state: "Oldest",
      query: "created-asc",
    },
    {
      state: "Most commented",
      query: "comment-desc",
    },
    {
      state: "Least comment",
      query: "comment-asc",
    },
    {
      state: "Recently updated",
      query: "updated-desc",
    },
    {
      state: "Least recently updated",
      query: "updated-asc",
    },
  ];

  return (
    <div className="absolute left-0 text-sm sm:text-[12px] lg:right-0">
      <div
        className={`${
          isDisplaySort ? "block " : "hidden"
        } fixed top-0 left-0 right-0 bottom-0 z-[100] flex flex-col p-4 sm:absolute sm:top-auto sm:right-auto sm:left-auto sm:bottom-auto sm:z-[1] sm:p-0 lg:right-0`}
      >
        <div className="mt-0 h-4/5 rounded-xl border border-solid border-[rgba(0,0,0,0)] bg-white shadow-[0_8px_24px_rgba(140,149,159,0.2)] before:absolute before:top-0 before:right-0 before:bottom-0 before:left-0 before:z-[-5] before:bg-[#1B1F2480] before:content-str sm:mt-2 sm:h-auto sm:max-h-[480px] sm:w-[300px] sm:border-[hsla(210,18%,87%,1)] sm:before:content-none">
          <header className="flex items-center border-b border-solid border-b-[hsla(210,18%,87%,1)] p-4 sm:pt-[7px] sm:pr-[7px] sm:pb-[7px]">
            <span className="flex-1 font-semibold">Sort by</span>
            <button
              className="m-[-16px] cursor-pointer rounded-none p-4 leading-none"
              onClick={() => dispatch({ type: actionType.sortType })}
            >
              <XIcon className="fill-fg-muted" />
            </button>
          </header>

          <div className="max-h-[calc(100%-126px)] overflow-y-auto sm:max-h-[calc(485px-82px)]">
            {labelslist.map((item, index) => {
              return (
                <a
                  className={`flex w-full cursor-pointer items-start overflow-hidden border-b p-4 text-left text-[#24292f] ${
                    labelslist.length - 1 != index
                      ? "border-solid"
                      : "border-none"
                  } border-b-[hsla(210,18%,87%,1)] hover:bg-[rgba(234,238,242,0.5)] sm:pt-[7px] sm:pb-[7px]`}
                  key={index}
                  onClick={() => {
                    setSearchQuery([...searchQuery, "sort:" + item.query]);
                    setQuery({ ...query, sort: item.query });
                    setCheck(true);
                  }}
                >
                  {query.sort && (
                    <div className={"mr-2 flex items-start"}>
                      <CheckIcon
                        fill={query?.sort === item.query ? "#000" : "#fff"}
                      />
                    </div>
                  )}
                  <div className="min-w-0 leading-tight">
                    <div className="flex items-center">
                      <div className="truncate font-semibold text-[#24292f] sm:pt-[2px]">
                        {item.state}
                      </div>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
