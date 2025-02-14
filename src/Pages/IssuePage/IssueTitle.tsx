import { useCallback, useContext, useRef, useState } from "react";

import {
  IssueClosedIcon,
  IssueOpenedIcon,
  SkipIcon,
} from "@primer/octicons-react";
import { IssueContext } from "../../utils/SelectContext";

export default function IssueTitle({
  title,
  issueNumber,
  state,
  stateReason,
  author,
  totalComments,
  createdTime,
}) {
  const [isEditTitle, setIsEditTitle] = useState(false);
  const [inputValue, setInputValue] = useState({ title: title });
  const [displayStickHeader, setDisplayStickyHeader] =
    useContext(IssueContext)["displayStickHeader"];
  const [editData, setEditData] = useContext(IssueContext)["editData"];
  const updateIssue = useContext(IssueContext)["updateIssue"];
  const observer = useRef<IntersectionObserver | null>(null);
  const headerBottom = useCallback((node: HTMLDivElement) => {
    if (node) {
      const options = {
        rootMargin: "0px",
        threshold: 0,
      };
      const callback = (entries: IntersectionObserverEntry[]) => {
        if (entries[0].isIntersecting) {
          setDisplayStickyHeader(false);
        } else {
          setDisplayStickyHeader(true);
        }
      };
      observer.current = new IntersectionObserver(callback, options);
      observer.current.observe(node);
    }
  }, []);

  return (
    <div>
      <div className={isEditTitle ? "hidden" : "block"}>
        <div className="md:flex md:items-center">
          <div className="mb-4 flex w-full justify-between md:order-1 md:mb-0 md:justify-end">
            <div>
              <button
                className="rounded-md border border-solid border-[rgba(27,31,36,0.15)] bg-[#f6f8fa] py-[3px] px-3 text-[12px] font-medium leading-5 text-[#24292f] shadow-[inset_0_1px_0_rgba(255,255,255,0.25)]"
                onClick={() => setIsEditTitle(true)}
              >
                Edit
              </button>
              <button className="ml-2 rounded-md border-[rgba(27,31,36,0.15)] bg-[#2da44e] px-4 py-[3px] text-[12px] font-medium leading-5 text-[#fff] shadow-[inset_0_1px_0_rgba(255,255,255,0.3)]">
                New issue
              </button>
            </div>
            <a
              href="#comment-box"
              className="py-1 text-[14px] text-[#0969da] md:hidden"
            >
              Jump to bottom
            </a>
          </div>
          <div className="mb-2 flex text-[26px] font-normal md:text-[32px]">
            <h1 className="whitespace-nowrap text-[#24292f]">{title}</h1>
            <span className="ml-2 font-light text-[#57606a]">
              #{issueNumber}
            </span>
          </div>
        </div>
      </div>
      <div className={`${isEditTitle ? "block md:flex" : "hidden"} mb-2`}>
        <input
          type="text"
          value={inputValue?.title}
          className="w-full rounded-md border border-solid border-[#d0d7de] bg-[#f6f8fa] py-[5px] px-3 leading-5 text-[#24292f] shadow-[inset_0_1px_0_rgba(208,215,222,0.2)] md:mr-4"
          onChange={(e) => {
            setInputValue({ ...inputValue, title: e.target.value });
            setEditData({ ...editData, title: e.target.value });
          }}
        />
        <div className="mt-2 flex md:mt-0">
          <button
            className="mr-2 rounded-md border border-solid border-[rgba(27,31,36,0.15)] bg-[#f6f8fa] py-[5px] px-4 text-[14px] font-medium leading-5 text-[#24292f] shadow-[inset_0_1px_0_rgba(255,255,255,0.25)]"
            onClick={() => {
              updateIssue();
              setIsEditTitle(false);
            }}
          >
            Save
          </button>
          <button
            className="text-[14px] text-[#0969da]"
            onClick={() => setIsEditTitle(false)}
          >
            Cancel
          </button>
        </div>
      </div>
      <div className="inline-block w-full">
        <div
          className="mb-4 flex items-center border-b border-solid border-[#d0d7de] pb-2"
          ref={headerBottom}
        >
          {state === "open" ? (
            <div className="mr-2 mb-2 flex flex-nowrap items-center self-start rounded-[2em] bg-[#2da44e] px-3 py-[5px] text-center text-[14px] font-medium leading-5 text-[#fff]">
              <IssueOpenedIcon size={16} />
              <span className="ml-1 h-6">{state}</span>
            </div>
          ) : stateReason === "completed" ? (
            <div className="mr-2 mb-2 flex flex-nowrap items-center self-start rounded-[2em] bg-[#8250df] px-3 py-[5px] text-center text-[14px] font-medium leading-5 text-[#fff]">
              <IssueClosedIcon size={16} />
              <span className="ml-1 h-6">{state}</span>
            </div>
          ) : (
            <div className="mr-2 mb-2 flex flex-nowrap items-center self-start rounded-[2em] bg-[#6e7781] px-3 py-[5px] text-center text-[14px] font-medium leading-5 text-[#fff]">
              <SkipIcon size={16} />
              <span className="ml-1 h-6">{state}</span>
            </div>
          )}
          <span className="mb-2 flex-auto text-[14px] text-[#57606a]">
            <span className="font-semibold">{author}&nbsp;</span>
            <span>
              opened this issue {createdTime} ago · {totalComments} comments
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
