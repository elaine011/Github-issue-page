import { IssueClosedIcon, SkipIcon } from "@primer/octicons-react";
import { useContext } from "react";
import { IssueContext } from "../../utils/SelectContext";

export default function SubmitBtn({ btnText, isCloseIssue }) {
  const handleSubmitBtn = useContext(IssueContext)["handleSubmitBtn"];
  const createIssue = useContext(IssueContext)["createIssue"];
  const closedIssueMenu = [
    {
      icon: <IssueClosedIcon size={16} fill={"#8250df"} />,
      title: "Close as completed",
      desc: "Done, closed, fixed, resolved",
    },
    {
      icon: <SkipIcon size={16} />,
      title: "Close as not planned",
      desc: "Won't fix, can't repro, duplicate, state",
    },
  ];

  return (
    <>
      <button
        className={`flex h-full w-full items-center rounded-md border border-solid border-[rgba(27,31,36,0.15)] px-4 py-[5px] text-center text-[14px] ${
          isCloseIssue === true
            ? "rounded-r-none border-r-0 bg-[#f6f8fa] font-medium text-[#24292f] shadow-[0_1px_0_rgba(27,31,36,0.1),inset_0_1px_0_rgba(255,255,255,0.03)]"
            : isCloseIssue === false && handleSubmitBtn()
            ? "bg-[#2da44e] text-[#fff] shadow-[0_1px_0_rgba(27,31,36,0.1),inset_0_1px_0_rgba(255,255,255,0.03)]"
            : "bg-[#94d3a2] text-[rgba(255,255,255,0.8)] shadow-[0_1px_0_rgba(27,31,36,0.1),inset_0_1px_0_rgba(255,255,255,0.03)]"
        }`}
        disabled={!handleSubmitBtn()}
        onClick={() => createIssue()}
      >
        {isCloseIssue && (
          <div className="mr-1 text-[#8250df]">
            <IssueClosedIcon size={16} />
          </div>
        )}
        {btnText}
      </button>
      {isCloseIssue && (
        <details className="p-auto relative rounded-r-md border border-solid border-[rgba(27,31,36,0.15)] bg-[#f3f4f6] shadow-[0_1px_0_rgba(27,31,36,0.1),inset_0_1px_0_rgba(255,255,255,0.03)]">
          <summary className="m-auto list-none px-4 py-[5px] after:inline-block after:border-4 after:border-b-0 after:border-solid after:border-[#000] after:border-b-transparent after:border-r-transparent after:border-l-transparent after:align-[2px] after:content-str"></summary>
          <div className="absolute right-0 z-10 mt-1 mb-5 w-[300px] rounded-md border border-solid border-[#d0d7de] bg-[#fff] text-[#24292f] shadow-[0_8px_24px_rgba(140,149,159,0.2)]">
            {closedIssueMenu.map((item) => (
              <div className="border-b border-solid border-[#d0d7de] p-2 pl-[30px] last-of-type:border-none">
                <div className="flex text-[14px] font-semibold">
                  <div className="mr-1">{item.icon}</div>
                  <div>{item.title}</div>
                </div>
                <div className="text-[12px] text-[#57606a]">{item.desc}</div>
              </div>
            ))}
          </div>
        </details>
      )}
    </>
  );
}
