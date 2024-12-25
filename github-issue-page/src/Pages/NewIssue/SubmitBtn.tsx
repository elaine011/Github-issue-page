import { useContext, useState } from "react";

import {
  IssueClosedIcon,
  IssueReopenedIcon,
  SkipIcon,
} from "@primer/octicons-react";
import { IssueContext } from "../../utils/SelectContext";

export default function SubmitBtn({ btnText, isCloseIssue, closeState }) {
  const handleSubmitBtn = useContext(IssueContext)["handleSubmitBtn"];
  const createIssue = useContext(IssueContext)["createIssue"];
  const updateIssue = useContext(IssueContext)["updateIssue"];
  const createComment = useContext(IssueContext)["createComment"];
  const [editData, setEditData] = useContext(IssueContext)["editData"];
  const [state, setState] = useState(closeState);
  const [btn, setBtn] = useState(btnText);
  const [isDisplayDropDown, setIsDisplayDropDown] = useState(true);
  const closedIssueMenu = [
    [
      {
        icon: (
          <IssueClosedIcon
            size={16}
            className="text-[#8250df] group-hover:text-[#fff]"
          />
        ),
        title: "Close as completed",
        desc: "Done, closed, fixed, resolved",
      },
      {
        icon: <SkipIcon size={16} />,
        title: "Close as not planned",
        desc: "Won't fix, can't repro, duplicate, state",
      },
    ],
    [
      {
        icon: (
          <IssueReopenedIcon
            size={16}
            className="text-[#1a7f37] group-hover:text-[#fff]"
          />
        ),
        title: "Reopen issue",
        desc: "",
      },
      {
        icon: <SkipIcon size={16} />,
        title: "Close as not planned",
        desc: "",
      },
    ],
    [
      {
        icon: (
          <IssueReopenedIcon
            size={16}
            className="text-[#1a7f37] group-hover:text-[#fff]"
          />
        ),
        title: "Reopen issue",
        desc: "",
      },
      {
        icon: (
          <IssueClosedIcon
            size={16}
            className="text-[#8250df] group-hover:text-[#fff]"
          />
        ),
        title: "Close as completed",
        desc: "",
      },
    ],
  ];

  async function handleApi(btn) {
    if (
      btn === "Reopen" ||
      btn === "Close as completed" ||
      btn === "Close as not planned" ||
      btn === "Close with comment"
    ) {
      await updateIssue();
    }
    if (btn === "Close issue") {
      await createComment();
      await updateIssue();
    }
    if (btn === "Reopen") {
      setEditData({ ...editData, state: "open", stateReason: "reopend" });
    } else if (btn === "Close issue") {
      setEditData({ ...editData, state: "closed", stateReason: "completed" });
    } else if (btn === "Close with comment") {
      setEditData({ ...editData, state: "closed", stateReason: "completed" });
    }
  }

  return (
    <>
      <button
        className={`flex h-full w-full items-center rounded-md border border-solid border-[rgba(27,31,36,0.15)] px-4 py-[5px] text-center text-[14px] ${
          isCloseIssue === true
            ? "cursor-pointer rounded-r-none border-r-0 bg-[#f6f8fa] font-medium text-[#24292f] shadow-[0_1px_0_rgba(27,31,36,0.1),inset_0_1px_0_rgba(255,255,255,0.03)]"
            : isCloseIssue === false && handleSubmitBtn()
            ? "cursor-pointer bg-[#2da44e] text-[#fff] shadow-[0_1px_0_rgba(27,31,36,0.1),inset_0_1px_0_rgba(255,255,255,0.03)]"
            : "bg-[#94d3a2] text-[rgba(255,255,255,0.8)] shadow-[0_1px_0_rgba(27,31,36,0.1),inset_0_1px_0_rgba(255,255,255,0.03)]"
        }`}
        onClick={() =>
          btn === "Submit new issue" ? createIssue() : handleApi(btn)
        }
      >
        {isCloseIssue &&
          (btn === "Reopen" ? (
            <div className="mr-1 text-[#1a7f37]">
              <IssueReopenedIcon size={16} />
            </div>
          ) : btn === "Close issue" ? (
            <div className="mr-1 text-[#8250df]">
              <IssueClosedIcon size={16} />
            </div>
          ) : state.state === "open" ? (
            <div className="mr-1 text-[#1a7f37]">
              <IssueReopenedIcon size={16} />
            </div>
          ) : state.reason === "completed" ? (
            <div className="mr-1 text-[#8250df]">
              <IssueClosedIcon size={16} />
            </div>
          ) : (
            <div className="mr-1 text-[#57606a]">
              <SkipIcon size={16} />
            </div>
          ))}
        {btn === "Close issue" && !handleSubmitBtn()
          ? "Close issue"
          : btn === "Close issue" && handleSubmitBtn()
          ? "Close with comment"
          : btn}
      </button>
      {isCloseIssue && (
        <details className="p-auto relative cursor-pointer rounded-r-md border border-solid border-[rgba(27,31,36,0.15)] bg-[#f3f4f6] shadow-[0_1px_0_rgba(27,31,36,0.1),inset_0_1px_0_rgba(255,255,255,0.03)]">
          <summary
            className="m-auto list-none px-4 py-[5px] after:inline-block after:border-4 after:border-b-0 after:border-solid after:border-[#000] after:border-b-transparent after:border-r-transparent after:border-l-transparent after:align-[2px] after:content-str"
            onClick={() => setIsDisplayDropDown(true)}
          ></summary>
          <div
            className={`${
              isDisplayDropDown ? "" : "hidden"
            } absolute right-0 z-10 mt-1 mb-5 w-[300px] rounded-md border border-solid border-[#d0d7de] bg-[#fff] text-[#24292f] shadow-[0_8px_24px_rgba(140,149,159,0.2)]`}
          >
            {closeState.state === "open"
              ? closedIssueMenu[0].map((item, index) => (
                  <div
                    className="group border-b border-solid border-[#d0d7de] p-2 pl-[30px] last-of-type:border-none hover:bg-[#0969da] hover:text-[#fff] hover:last-of-type:rounded-b-md"
                    key={index}
                    onClick={() => {
                      item.title === "Close as completed"
                        ? setState({ state: "closed", reason: "completed" })
                        : setState({ state: "closed", reason: "not_planned" });
                      item.title === "Close as completed"
                        ? setBtn("Close as completed")
                        : setBtn("Close as not planned");
                      item.title === "Close as completed"
                        ? setEditData({
                            ...editData,
                            state: "closed",
                            stateReason: "completed",
                          })
                        : setEditData({
                            ...editData,
                            state: "closed",
                            stateReason: "not_planned",
                          });
                      setIsDisplayDropDown(false);
                    }}
                  >
                    <div className="flex text-[14px] font-semibold">
                      <div className="mr-1">{item.icon}</div>
                      <div>{item.title}</div>
                    </div>
                    <div className="text-[12px] text-[#57606a] group-hover:text-white">
                      {item.desc}
                    </div>
                  </div>
                ))
              : closeState.reason === "completed"
              ? closedIssueMenu[1].map((item, index) => (
                  <div
                    className="group border-b border-solid border-[#d0d7de] p-2 pl-[30px] last-of-type:border-none hover:bg-[#0969da] hover:text-[#fff] hover:last-of-type:rounded-b-md"
                    key={index}
                    onClick={() => {
                      item.title === "Reopen issue"
                        ? setState({ state: "open", reason: "" })
                        : setState({ state: "closed", reason: "not_planned" });
                      item.title === "Reopen issue"
                        ? setBtn("Reopen")
                        : setBtn("Close as not planned");
                      item.title === "Reopen issue"
                        ? setEditData({
                            ...editData,
                            state: "open",
                            stateReason: "reopened",
                          })
                        : setEditData({
                            ...editData,
                            state: "closed",
                            stateReason: "not_planned",
                          });
                      setIsDisplayDropDown(false);
                    }}
                  >
                    <div className="flex text-[14px] font-semibold">
                      <div className="mr-1">{item.icon}</div>
                      <div>{item.title}</div>
                    </div>
                    <div className="text-[12px] text-[#57606a]">
                      {item.desc}
                    </div>
                  </div>
                ))
              : closedIssueMenu[2].map((item, index) => (
                  <div
                    className="group border-b border-solid border-[#d0d7de] p-2 pl-[30px] last-of-type:border-none hover:bg-[#0969da] hover:text-[#fff] hover:last-of-type:rounded-b-md"
                    key={index}
                    onClick={() => {
                      item.title === "Reopen issue"
                        ? setState({ state: "open", reason: "" })
                        : setState({ state: "closed", reason: "completed" });
                      item.title === "Reopen issue"
                        ? setBtn("Reopen")
                        : setBtn("Close as completed");
                      item.title === "Reopen issue"
                        ? setEditData({
                            ...editData,
                            state: "open",
                            stateReason: "reopened",
                          })
                        : setEditData({
                            ...editData,
                            state: "closed",
                            stateReason: "completed",
                          });
                      setIsDisplayDropDown(false);
                    }}
                  >
                    <div className="flex text-[14px] font-semibold">
                      <div className="mr-1">{item.icon}</div>
                      <div>{item.title}</div>
                    </div>
                    <div className="text-[12px] text-[#57606a]">
                      {item.desc}
                    </div>
                  </div>
                ))}
          </div>
        </details>
      )}
    </>
  );
}
