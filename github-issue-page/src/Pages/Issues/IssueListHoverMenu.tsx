import {
  IssueClosedIcon,
  IssueOpenedIcon,
  SkipIcon,
} from "@primer/octicons-react";

export function IssueListHoverMenu({
  title,
  labels,
  issueNumber,
  author,
  createdTime,
  content,
  stateReason,
}) {
  return (
    <div className="z-99 border-borderGray absolute top-[-207px] left-[50px] w-[400px] rounded border border-solid bg-white">
      <div className="border-borderGray border-b border-solid p-2">
        <div className="my-2 flex items-center">
          <button className="text-textGray text-[14px] hover:underline">
            elaine011/test-issue
          </button>
          <span className="text-textGray ml-1 block text-[14px]">
            on {createdTime.toString().split(" ")[1]}{" "}
            {createdTime.toString().split(" ")[2]}
          </span>
        </div>

        <div className="my-1 flex items-start">
          {stateReason === null ? (
            <IssueOpenedIcon fill={"#1a7f37"} />
          ) : stateReason === "not_planned" ? (
            <SkipIcon fill={"#57606a"} />
          ) : (
            <IssueClosedIcon fill={"#8250df"} />
          )}
          <h3 className="whitespace-pre-wrap px-1 text-[16px]">{title}</h3>
          <span className="text-textGray">#{issueNumber}</span>
        </div>
        <p className="text-textGray mb-2 pl-3">{content}</p>
        <div className="flex items-center pl-3">
          {/* {labels.length !== 0 &&
            labels.map(({ name, bgColor, id }) => {
              return (
                <div className="mr-[5px] flex" key={id}>
                  <LabelTag labelName={name} />
                </div>
              );
            })} */}
        </div>
      </div>
      <div className="flex items-center p-2">
        <img
          src={author}
          alt="userImage"
          className="rounded-circle mr-1 h-[20px] w-[20px]"
        />
        <span className="text-textGray whitespace-nowrap">
          You are assigned and were mentioned
        </span>
      </div>
    </div>
  );
}
