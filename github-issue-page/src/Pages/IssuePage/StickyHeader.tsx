import { IssueOpenedIcon } from "@primer/octicons-react";
import { useContext } from "react";
import { IssueContext } from "../../utils/SelectContext";

export default function StickyHeader({
  title,
  state,
  issueNumber,
  author,
  totalComments,
  createdTime,
}) {
  const [displayStickHeader, setDisplayStickyHeader] =
    useContext(IssueContext)["displayStickHeader"];
  return (
    <header
      className={`${
        displayStickHeader ? "block" : "hidden"
      } fixed top-0 left-0 right-0 z-[200] flex border-b border-solid border-[#d0d7de] bg-white px-6 py-2 shadow-[0_1px_0_rgba(27,31,36,0.04)]`}
    >
      <div className="mr-1 flex whitespace-nowrap">
        <div className="mr-2 self-start rounded-[2em] bg-[#2da44e] px-3 py-[5px] text-center text-[14px] font-medium leading-5 text-[#fff]">
          <IssueOpenedIcon size={16} />
          <span className="ml-1">{state}</span>
        </div>
      </div>
      <div className="flex flex-col justify-between truncate">
        <h1 className="text-[14px] font-medium leading-[1.3] text-[#24292f]">
          {title} <span className="text-[#24292f]">#{issueNumber}</span>
        </h1>
        <p className="text-[12px]">
          <button className="mr-[4px] font-medium text-[#57606a]">
            {author}
          </button>
          <span className="text-[#57606a]">
            opened this issue {createdTime} ago · {totalComments} comments
          </span>
        </p>
      </div>
    </header>
  );
}
