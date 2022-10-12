import {
  CommentIcon,
  IssueClosedIcon,
  IssueOpenedIcon,
  SkipIcon,
} from "@primer/octicons-react";
import { useContext } from "react";
import { IssueContext } from "../../utils/SelectContext";
import { useNavigate } from "react-router-dom";

export default function IssueList({
  title,
  labels,
  issueNumber,
  createdTime,
  author,
  assignees,
  commentNumber,
  state,
  stateReason,
}) {
  const [inputValue, setInputValue] = useContext(IssueContext)["input"];
  const Navigate = useNavigate();

  if (inputValue && !title.toLowerCase().includes(inputValue)) return <></>;
  return (
    <div
      className="border border-t-0"
      onClick={(e) => {
        console.log(issueNumber);
        Navigate(`/issuePage/${issueNumber}`);
      }}
    >
      <div className="flex border border-transparent px-[16px] py-[8px] hover:bg-primary-bg">
        {state === "open" ? (
          <IssueOpenedIcon className="fill-primary" fill="#127f37" />
        ) : stateReason === "completed" ? (
          <IssueClosedIcon size={16} fill="#8250df" />
        ) : stateReason === "not_planned" ? (
          <SkipIcon size={16} fill="#57606a" />
        ) : null}
        <div className="px-2">
          <span className="text-4 mr-[5px] font-semibold leading-[21.6px] hover:cursor-pointer hover:text-[#0969da]">
            {title}
          </span>
          {labels.map((item) => {
            return (
              <span className="mr-[5px] block md:inline" key={item.id}>
                <div
                  className={`inline-block h-5 rounded-[10px]  px-[7px] text-[12px] font-semibold leading-[20px] marker:mr-[5px] hover:cursor-pointer`}
                  style={{ backgroundColor: `#${item.color}` }}
                >
                  {item.name}
                </div>
              </span>
            );
          })}
          <div className="text-text mt-2 text-xs hover:cursor-pointer">
            #{issueNumber} opened on {createdTime} agos by {author}
          </div>
        </div>
        <div className="ml-auto hidden min-w-[20%] sm:flex ">
          <div className="flex-1"></div>
          <span className=" ml-auto flex min-w-[30%] hover:cursor-pointer">
            {assignees
              .slice(0)
              .reverse()
              .map((img, index) => {
                return (
                  <img
                    className={`${
                      index === 2
                        ? "mr-[-18px]"
                        : index > 2
                        ? "mr-[-6px]"
                        : "mr-[-11px]"
                    } h-[20px] w-[20px] rounded-[50%] z-${index} hover:-translate-x-6`}
                    src={img.avatar_url}
                    alt=""
                    key={index}
                  />
                );
              })}
          </span>
          <span className="ml-[15px] flex flex-1 flex-nowrap justify-end hover:cursor-pointer hover:text-[#0969da]">
            {commentNumber > 0 ? (
              <>
                <CommentIcon size={16} />
                <span className="ml-[3px] text-[12px]">{commentNumber}</span>
              </>
            ) : (
              <></>
            )}
          </span>
        </div>
      </div>
    </div>
  );
}
