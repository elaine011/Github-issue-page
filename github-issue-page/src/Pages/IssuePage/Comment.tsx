import { KebabHorizontalIcon, SmileyIcon } from "@primer/octicons-react";
import { marked } from "marked";
import { useContext, useEffect, useState } from "react";
import { IssueContext } from "../../utils/SelectContext";
import EditSection from "./EditSection";
import "../../utils/prose.css";
import Reactions from "./Reactions";

export default function Comment({
  author,
  authorComment,
  actor,
  body,
  createdTime,
  owner,
  actorImg,
  reactions,
  commentId,
  header,
}) {
  const [isDisplayEdit, setIsDisplayEdit] = useState(false);
  const deleteComment = useContext(IssueContext)["deleteComment"];
  const [editData, setEditData] = useContext(IssueContext)["editData"];
  const [reactionsData, setReactionsData] =
    useContext(IssueContext)["reactionsData"];

  const editDropDownMenu = [
    ["Copy Link", "Quote reply"],
    ["Edit"],
    ["Report Content"],
    ["Copy Link", "Quote reply", "Reference in new issue"],
    ["Edit", "Hide", "Delete"],
  ];
  const param = {
    boxBlue: true,
    reactions: {
      good: {
        number: reactionsData.filter((item) => item.content === "+1").length,
        isClicked: reactionsData
          .filter((item) => item.content === "+1")
          .map((item) => item.user.login)
          .includes("elaine011"),
      },
      bad: {
        number: reactionsData.filter((item) => item.content === "-1").length,
        isClicked: reactionsData
          .filter((item) => item.content === "-1")
          .map((item) => item.user.login)
          .includes("elaine011"),
      },
      confused: {
        number: reactionsData.filter((item) => item.content === "confused")
          .length,
        isClicked: reactionsData
          .filter((item) => item.content === "confused")
          .map((item) => item.user.login)
          .includes("elaine011"),
      },
      eyes: {
        number: reactionsData.filter((item) => item.content === "eyes").length,
        isClicked: reactionsData
          .filter((item) => item.content === "eyes")
          .map((item) => item.user.login)
          .includes("elaine011"),
      },
      heart: {
        number: reactionsData.filter((item) => item.content === "heart").length,
        isClicked: reactionsData
          .filter((item) => item.content === "heart")
          .map((item) => item.user.login)
          .includes("elaine011"),
      },
      hooray: {
        number: reactionsData.filter((item) => item.content === "hooray")
          .length,
        isClicked: reactionsData
          .filter((item) => item.content === "hooray")
          .map((item) => item.user.login)
          .includes("elaine011"),
      },
      laugh: {
        number: reactionsData.filter((item) => item.content === "laugh").length,
        isClicked: reactionsData
          .filter((item) => item.content === "laugh")
          .map((item) => item.user.login)
          .includes("elaine011"),
      },
      rocket: {
        number: reactionsData.filter((item) => item.content === "rocket")
          .length,
        isClicked: reactionsData
          .filter((item) => item.content === "rocket")
          .map((item) => item.user.login)
          .includes("elaine011"),
      },
      total_count: reactionsData.length,
    },
  };

  const renderer = {
    listitem(text: string, booleantask: boolean, checked: boolean) {
      if (checked !== undefined) {
        return `<li class='check'>${text}</li>`;
      }
      return `<li>${text}</li>`;
    },
    paragraph(text: string) {
      const mentionText = text.match(/^\@/g);
      const hashText = text.match(/^\#/g);
      if (hashText) {
        return `<button class="hash">${text}</button>`;
      }
      return `<button ${mentionText ? "class=mention" : null}>${text}</button>`;
    },
  };
  marked.use({ renderer });

  return (
    <>
      <div className={`${isDisplayEdit ? "hidden" : "block"}`}>
        <div
          className={`hidden md:float-left md:block ${
            authorComment ? "md:mt-0" : "md:mt-4"
          }`}
        >
          <img
            src={actorImg}
            className="w-10 rounded-[50%] shadow-[0_0_0_1px_rgba(27,31,36,0.15)]"
          />
        </div>
        <div
          className={`relative text-[14px] text-[#24292f] before:absolute before:top-0 before:left-4 before:bottom-0 before:z-[-1] before:w-[2px] before:bg-[#d0d7de] before:content-str md:ml-14 ${
            authorComment ? "pb-4" : "py-4"
          }`}
        >
          <div
            className={`rounded-md border border-solid md:before:absolute md:before:top-[11px] md:before:right-[100%] md:before:left-[-13px] md:before:border-[7px] md:before:border-solid md:before:border-transparent md:after:absolute md:after:left-[-12px] md:after:top-[11px] md:after:right-[100%] md:after:border-[7px] md:after:border-solid md:after:border-transparent ${
              authorComment === true
                ? "border-[rgba(84,174,255,0.4)] md:before:border-r-[rgba(84,174,255,0.4)] md:after:border-r-[#ddf4ff]"
                : authorComment === false && author === actor
                ? "border-[rgba(84,174,255,0.4)] md:before:top-[27px] md:before:border-r-[rgba(84,174,255,0.4)] md:after:top-[27px] md:after:border-r-[#ddf4ff]"
                : "border-[#d0d7de] md:before:top-[27px] md:before:border-r-[#d0d7de] md:after:top-[27px] md:after:border-r-[#f6f8fa]"
            }`}
          >
            <div
              className={`flex items-center justify-between rounded-t-md px-4 ${
                authorComment === true
                  ? "bg-[#ddf4ff]"
                  : authorComment === false && author === actor
                  ? "bg-[#ddf4ff]"
                  : "bg-[#f6f8fa]"
              }`}
            >
              <div>
                <h3 className="font-semibold">
                  {actor}&nbsp;
                  <span className="font-normal text-[#57606a]">
                    commented {createdTime} ago
                  </span>
                </h3>
              </div>
              <div className="flex items-center text-[#57606a]">
                {owner === "OWNER" ? (
                  <span className="ml-1 hidden items-center rounded-[2em] border border-solid border-[rgba(84,174,255,0.4)] px-[7px] text-[12px] font-medium sm:flex">
                    Owner
                  </span>
                ) : owner === "COLLABORATOR" ? (
                  <span className="ml-1 hidden items-center rounded-[2em] border border-solid border-[#d0d7de] px-[7px] text-[12px] font-medium sm:flex">
                    Collaborator
                  </span>
                ) : (
                  <></>
                )}
                {author === actor && (
                  <span className="ml-1 hidden items-center rounded-[2em] border border-solid border-[rgba(84,174,255,0.4)] px-[7px] text-[12px] font-medium sm:flex">
                    Author
                  </span>
                )}
                <details className="relative hidden cursor-pointer md:mx-2 md:block md:py-2 md:px-1">
                  <summary className="list-none focus:text-[#0969da]">
                    <SmileyIcon size={16} />
                  </summary>
                  <div className="absolute left-[auto] top-[10px] right-full z-[15] mr-2 flex w-[auto] rounded-[6px] border border-solid border-[#d0d7de] bg-[#ffffff] py-0 px-[2px] shadow-[0_8px_24px_rgba(140,149,159,0.2)]">
                    <button
                      className={`my-1 mx-[2px] flex h-[32px] w-[32px] items-center justify-center truncate rounded-[6px] p-1 hover:bg-[#f3f4f6] ${
                        param?.reactions?.good?.isClicked ? "bg-[#ddf4ff]" : ""
                      }`}
                    >
                      👍
                    </button>
                    <button
                      className={`my-1 mx-[2px] flex h-[32px] w-[32px] items-center justify-center truncate rounded-[6px] p-1 hover:bg-[#f3f4f6] ${
                        param?.reactions?.bad?.isClicked ? "bg-[#ddf4ff]" : ""
                      }`}
                    >
                      👎
                    </button>
                    <button
                      className={`my-1 mx-[2px] flex h-[32px] w-[32px] items-center justify-center truncate rounded-[6px] p-1 hover:bg-[#f3f4f6] ${
                        param?.reactions?.laugh?.isClicked ? "bg-[#ddf4ff]" : ""
                      }`}
                    >
                      😄
                    </button>
                    <button
                      className={`my-1 mx-[2px] flex h-[32px] w-[32px] items-center justify-center truncate rounded-[6px] p-1 hover:bg-[#f3f4f6] ${
                        param?.reactions?.hooray?.isClicked
                          ? "bg-[#ddf4ff]"
                          : ""
                      }`}
                    >
                      🎉
                    </button>
                    <button
                      className={`my-1 mx-[2px] flex h-[32px] w-[32px] items-center justify-center truncate rounded-[6px] p-1 hover:bg-[#f3f4f6] ${
                        param?.reactions?.confused?.isClicked
                          ? "bg-[#ddf4ff]"
                          : ""
                      }`}
                    >
                      😕
                    </button>
                    <button
                      className={`my-1 mx-[2px] flex h-[32px] w-[32px] items-center justify-center truncate rounded-[6px] p-1 hover:bg-[#f3f4f6] ${
                        param?.reactions?.heart?.isClicked ? "bg-[#ddf4ff]" : ""
                      }`}
                    >
                      ❤️
                    </button>
                    <button
                      className={`my-1 mx-[2px] flex h-[32px] w-[32px] items-center justify-center truncate rounded-[6px] p-1 hover:bg-[#f3f4f6] ${
                        param?.reactions?.rocket?.isClicked
                          ? "bg-[#ddf4ff]"
                          : ""
                      }`}
                    >
                      🚀
                    </button>
                    <button
                      className={`my-1 mx-[2px] flex h-[32px] w-[32px] items-center justify-center truncate rounded-[6px] p-1 hover:bg-[#f3f4f6] ${
                        param?.reactions?.eyes?.isClicked ? "bg-[#ddf4ff]" : ""
                      }`}
                    >
                      👀
                    </button>
                  </div>
                </details>
                <details className="relative ml-2 md:ml-0">
                  <summary className="cursor-pointer list-none px-1 py-2 focus:text-[#0969da]">
                    <KebabHorizontalIcon size={16} />
                  </summary>
                  <div className="absolute left-auto right-[-6px] z-10 w-[185px] rounded-md border border-solid border-[#d0d7de] bg-[#fff] py-2 text-[#24292f] shadow-[0_8px_24px_rgba(140,149,159,0.2)] before:absolute before:left-auto before:right-[9px] before:top-[-17px] before:border-[8px] before:border-solid before:border-transparent before:border-b-[#d0d7de] before:content-str after:absolute after:left-auto after:right-[9px] after:top-[-16px] after:border-[8px] after:border-solid after:border-transparent after:border-b-[#fff] after:content-str">
                    <ul>
                      {authorComment
                        ? editDropDownMenu[0].map((item, index) => (
                            <li
                              className="cursor-pointer p-2 pl-4 hover:bg-[#0969da] hover:text-[#fff]"
                              key={index}
                            >
                              {item}
                            </li>
                          ))
                        : editDropDownMenu[3].map((item, index) => (
                            <li
                              className="cursor-pointer p-2 pl-4 hover:bg-[#0969da] hover:text-[#fff]"
                              key={index}
                            >
                              {item}
                            </li>
                          ))}
                      <div className="my-2 border-t border-solid border-[#d0d7de]"></div>
                      {authorComment
                        ? editDropDownMenu[1].map((item, index) => (
                            <li
                              className="cursor-pointer p-2 pl-4 hover:bg-[#0969da] hover:text-[#fff]"
                              key={index}
                              onClick={() =>
                                item === "Edit" ? setIsDisplayEdit(true) : ""
                              }
                            >
                              {item}
                            </li>
                          ))
                        : editDropDownMenu[4].map((item, index) =>
                            item === "Delete" ? (
                              <li
                                className="cursor-pointer p-2 pl-4 text-[#cf222e] hover:bg-[#cf222e] hover:text-[#fff]"
                                key={index}
                                onMouseEnter={() =>
                                  setEditData({
                                    ...editData,
                                    commentId: commentId,
                                  })
                                }
                                onClick={() => {
                                  alert(
                                    "Are you sure you want to delete this?"
                                  );
                                  deleteComment();
                                }}
                              >
                                {item}
                              </li>
                            ) : (
                              <li
                                className="cursor-pointer p-2 pl-4 hover:bg-[#0969da] hover:text-[#fff]"
                                key={index}
                                onClick={() =>
                                  item === "Edit" ? setIsDisplayEdit(true) : ""
                                }
                              >
                                {item}
                              </li>
                            )
                          )}
                      <div className="my-2 border-t border-solid border-[#d0d7de]"></div>
                      {editDropDownMenu[2].map((item, index) => (
                        <li
                          className="cursor-pointer p-2 pl-4 hover:bg-[#0969da] hover:text-[#fff]"
                          key={index}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </details>
              </div>
            </div>
            <div className="rounded-b-md bg-[#fff] p-4">
              {body === null ? (
                <p className="mb-4">
                  <em>No description provided.</em>
                </p>
              ) : (
                <p
                  className="prose mb-4 break-all"
                  dangerouslySetInnerHTML={{
                    __html: marked(body ?? ""),
                  }}
                ></p>
              )}
              <div className="flex">
                <Reactions
                  reactions={reactions}
                  header={header}
                  commentId={commentId}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${isDisplayEdit ? "block" : "hidden"}`}>
        <div
          className={`hidden md:float-left md:block ${
            authorComment ? "md:mt-0" : "md:mt-4"
          }`}
        >
          <img
            src={actorImg}
            className="w-10 rounded-[50%] shadow-[0_0_0_1px_rgba(27,31,36,0.15)]"
          />
        </div>
        <div
          className={`relative before:absolute before:top-0 before:bottom-0 before:left-4 before:z-[-1] before:w-[2px] before:bg-[#d0d7de] before:content-str md:ml-14 before:md:left-[72px]  ${
            authorComment ? "pb-4" : "py-4"
          } ${isDisplayEdit ? "md:ml-0" : ""}`}
        >
          <EditSection
            setIsDisplayEdit={setIsDisplayEdit}
            body={body}
            commentId={commentId}
          />
        </div>
      </div>
    </>
  );
}
