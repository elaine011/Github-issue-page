import { SmileyIcon } from "@primer/octicons-react";
import { useContext } from "react";
import { IssueContext } from "../../utils/SelectContext";

export default function Reactions({ reactions, header, commentId }) {
  const [userData, setUserData] = useContext(IssueContext)["userData"];
  const [reactionsData, setReactionsData] =
    useContext(IssueContext)["reactionsData"];
  const createListCommentsReactions =
    useContext(IssueContext)["createListCommentsReactions"];
  const createissueCommentReactions =
    useContext(IssueContext)["createissueCommentReactions"];
  const [editData, setEditData] = useContext(IssueContext)["editData"];

  const headerParam = {
    boxBlue: true,
    reactions: {
      good: {
        number: reactionsData.filter((item) => item.content === "+1").length,
        isClicked: reactionsData
          .filter((item) => item.content === "+1")
          .map((item) => item.user.login)
          .includes(userData.userName),
      },
      bad: {
        number: reactionsData.filter((item) => item.content === "-1").length,
        isClicked: reactionsData
          .filter((item) => item.content === "-1")
          .map((item) => item.user.login)
          .includes(userData.userName),
      },
      confused: {
        number: reactionsData.filter((item) => item.content === "confused")
          .length,
        isClicked: reactionsData
          .filter((item) => item.content === "confused")
          .map((item) => item.user.login)
          .includes(userData.userName),
      },
      eyes: {
        number: reactionsData.filter((item) => item.content === "eyes").length,
        isClicked: reactionsData
          .filter((item) => item.content === "eyes")
          .map((item) => item.user.login)
          .includes(userData.userName),
      },
      heart: {
        number: reactionsData.filter((item) => item.content === "heart").length,
        isClicked: reactionsData
          .filter((item) => item.content === "heart")
          .map((item) => item.user.login)
          .includes(userData.userName),
      },
      hooray: {
        number: reactionsData.filter((item) => item.content === "hooray")
          .length,
        isClicked: reactionsData
          .filter((item) => item.content === "hooray")
          .map((item) => item.user.login)
          .includes(userData.userName),
      },
      laugh: {
        number: reactionsData.filter((item) => item.content === "laugh").length,
        isClicked: reactionsData
          .filter((item) => item.content === "laugh")
          .map((item) => item.user.login)
          .includes(userData.userName),
      },
      rocket: {
        number: reactionsData.filter((item) => item.content === "rocket")
          .length,
        isClicked: reactionsData
          .filter((item) => item.content === "rocket")
          .map((item) => item.user.login)
          .includes(userData.userName),
      },
      total_count: reactionsData.length,
    },
  };
  const param = {
    boxBlue: true,
    reactions: {
      good: { number: reactions["+1"], isClicked: true },
      bad: { number: reactions["-1"], isClicked: true },
      confused: { number: reactions["confused"], isClicked: false },
      eyes: { number: reactions["eyes"], isClicked: true },
      heart: { number: reactions["heart"], isClicked: true },
      hooray: { number: reactions["hooray"], isClicked: true },
      laugh: { number: reactions["laugh"], isClicked: true },
      rocket: { number: reactions["rocket"], isClicked: true },
      total_count: reactions["total_count"],
    },
  };

  return header ? (
    <div>
      <div className="mb-4 flex bg-[#ffffff]">
        <details
          className={`${
            headerParam?.reactions?.total_count ? "block" : "hidden"
          } relative`}
        >
          <summary className="inline-flex h-[26px] w-[26px] items-center rounded-[50%] border border-solid border-[hsla(210,18%,87%,1)] bg-[#f6f8fa]">
            <SmileyIcon className="ml-1 fill-[#57606a]" />
          </summary>
          <div className="absolute bottom-[100%] left-[auto] top-auto z-10 my-2 mr-2 flex w-[auto] rounded-[6px] border border-solid border-[#d0d7de] bg-[#fff] py-0 px-[2px] shadow-[0_8px_24px_rgba(140,149,159,0.2)]">
            <button
              className={`my-1 mx-[2px] flex h-[32px] w-[32px] items-center justify-center truncate rounded-[6px] p-1 hover:bg-[#f3f4f6] ${
                headerParam?.reactions?.good?.isClicked ? "bg-[#ddf4ff]" : ""
              }`}
              onMouseEnter={() =>
                setEditData({
                  ...editData,
                  commentId: commentId,
                  reaction: "+1",
                })
              }
              onClick={() =>
                !headerParam?.reactions?.good?.isClicked &&
                createissueCommentReactions()
              }
            >
              👍
            </button>
            <button
              className={`my-1 mx-[2px] flex h-[32px] w-[32px] items-center justify-center truncate rounded-[6px] p-1 hover:bg-[#f3f4f6] ${
                headerParam?.reactions?.bad?.isClicked ? "bg-[#ddf4ff]" : ""
              }`}
              onMouseEnter={() =>
                setEditData({
                  ...editData,
                  commentId: commentId,
                  reaction: "-1",
                })
              }
              onClick={() =>
                !headerParam?.reactions?.bad?.isClicked &&
                createissueCommentReactions()
              }
            >
              👎
            </button>
            <button
              className={`my-1 mx-[2px] flex h-[32px] w-[32px] items-center justify-center truncate rounded-[6px] p-1 hover:bg-[#f3f4f6] ${
                headerParam?.reactions?.laugh?.isClicked ? "bg-[#ddf4ff]" : ""
              }`}
              onMouseEnter={() =>
                setEditData({
                  ...editData,
                  commentId: commentId,
                  reaction: "laugh",
                })
              }
              onClick={() =>
                !headerParam?.reactions?.laugh?.isClicked &&
                createissueCommentReactions()
              }
            >
              😄
            </button>
            <button
              className={`my-1 mx-[2px] flex h-[32px] w-[32px] items-center justify-center truncate rounded-[6px] p-1 hover:bg-[#f3f4f6] ${
                headerParam?.reactions?.hooray?.isClicked ? "bg-[#ddf4ff]" : ""
              }`}
              onMouseEnter={() =>
                setEditData({
                  ...editData,
                  commentId: commentId,
                  reaction: "hooray",
                })
              }
              onClick={() =>
                !headerParam?.reactions?.hooray?.isClicked &&
                createissueCommentReactions()
              }
            >
              🎉
            </button>
            <button
              className={`my-1 mx-[2px] flex h-[32px] w-[32px] items-center justify-center truncate rounded-[6px] p-1 hover:bg-[#f3f4f6] ${
                headerParam?.reactions?.confused?.isClicked
                  ? "bg-[#ddf4ff]"
                  : ""
              }`}
              onMouseEnter={() =>
                setEditData({
                  ...editData,
                  commentId: commentId,
                  reaction: "confused",
                })
              }
              onClick={() =>
                !headerParam?.reactions?.confused?.isClicked &&
                createissueCommentReactions()
              }
            >
              😕
            </button>
            <button
              className={`my-1 mx-[2px] flex h-[32px] w-[32px] items-center justify-center truncate rounded-[6px] p-1 hover:bg-[#f3f4f6] ${
                headerParam?.reactions?.heart?.isClicked ? "bg-[#ddf4ff]" : ""
              }`}
              onMouseEnter={() =>
                setEditData({
                  ...editData,
                  commentId: commentId,
                  reaction: "heart",
                })
              }
              onClick={() =>
                !headerParam?.reactions?.heart?.isClicked &&
                createissueCommentReactions()
              }
            >
              ❤️
            </button>
            <button
              className={`my-1 mx-[2px] flex h-[32px] w-[32px] items-center justify-center truncate rounded-[6px] p-1 hover:bg-[#f3f4f6] ${
                headerParam?.reactions?.rocket?.isClicked ? "bg-[#ddf4ff]" : ""
              }`}
              onMouseEnter={() =>
                setEditData({
                  ...editData,
                  commentId: commentId,
                  reaction: "rocket",
                })
              }
              onClick={() =>
                !headerParam?.reactions?.rocket?.isClicked &&
                createissueCommentReactions()
              }
            >
              🚀
            </button>
            <button
              className={`my-1 mx-[2px] flex h-[32px] w-[32px] items-center justify-center truncate rounded-[6px] p-1 hover:bg-[#f3f4f6] ${
                headerParam?.reactions?.eyes?.isClicked ? "bg-[#ddf4ff]" : ""
              }`}
              onMouseEnter={() =>
                setEditData({
                  ...editData,
                  commentId: commentId,
                  reaction: "eyes",
                })
              }
              onClick={() =>
                !headerParam?.reactions?.eyes?.isClicked &&
                createissueCommentReactions()
              }
            >
              👀
            </button>
          </div>
        </details>
        <div className="mt-[-5px] flex flex-wrap">
          <button
            className={`${
              headerParam?.reactions?.good?.number ? "flex" : "hidden"
            } h-[26px] py-0 px-1 text-[12px] leading-[26px] ${
              headerParam?.reactions?.good?.isClicked
                ? "rounded-[100px] border border-solid border-[#0969da] bg-[#ddf4ff]"
                : "rounded-[100px] border border-solid border-[#d0d7de] bg-[#ffffff]"
            } ml-2 mt-[5px]`}
          >
            <div className="h-4 w-4 text-[1em] ">👍</div>
            <span
              className={`ml-[2px] h-6 py-0 px-1 ${
                headerParam?.reactions?.good?.isClicked
                  ? "text-[#0969da]"
                  : "text-[#57606a]"
              }`}
            >
              {headerParam?.reactions?.good?.number}
            </span>
          </button>
          <button
            className={`${
              headerParam?.reactions?.bad?.number ? "flex" : "hidden"
            } h-[26px] py-0 px-1 text-[12px] leading-[26px] ${
              headerParam?.reactions?.bad?.isClicked
                ? "rounded-[100px] border border-solid border-[#0969da] bg-[#ddf4ff]"
                : "rounded-[100px] border border-solid border-[#d0d7de] bg-[#ffffff]"
            } ml-2 mt-[5px]`}
          >
            <div className="h-4 w-4 text-[1em] ">👎</div>
            <span
              className={`ml-[2px] h-6 py-0 px-1 ${
                headerParam?.reactions?.bad?.isClicked
                  ? "text-[#0969da]"
                  : "text-[#57606a]"
              }`}
            >
              {headerParam?.reactions?.bad?.number}
            </span>
          </button>
          <button
            className={`${
              headerParam?.reactions?.laugh?.number ? "flex" : "hidden"
            } h-[26px] py-0 px-1 text-[12px] leading-[26px] ${
              headerParam?.reactions?.laugh?.isClicked
                ? "rounded-[100px] border border-solid border-[#0969da] bg-[#ddf4ff]"
                : "rounded-[100px] border border-solid border-[#d0d7de] bg-[#ffffff]"
            } ml-2 mt-[5px]`}
          >
            <div className="h-4 w-4 text-[1em] ">😄</div>
            <span
              className={`ml-[2px] h-6 py-0 px-1 ${
                headerParam?.reactions?.laugh?.isClicked
                  ? "text-[#0969da]"
                  : "text-[#57606a]"
              }`}
            >
              {headerParam?.reactions?.laugh?.number}
            </span>
          </button>
          <button
            className={`${
              headerParam?.reactions?.hooray?.number ? "flex" : "hidden"
            } h-[26px] py-0 px-1 text-[12px] leading-[26px] ${
              headerParam?.reactions?.hooray?.isClicked
                ? "rounded-[100px] border border-solid border-[#0969da] bg-[#ddf4ff]"
                : "rounded-[100px] border border-solid border-[#d0d7de] bg-[#ffffff]"
            } ml-2 mt-[5px]`}
          >
            <div className="h-4 w-4 text-[1em] ">🎉</div>
            <span
              className={`ml-[2px] h-6 py-0 px-1 ${
                headerParam?.reactions?.hooray?.isClicked
                  ? "text-[#0969da]"
                  : "text-[#57606a]"
              }`}
            >
              {headerParam?.reactions?.hooray?.number}
            </span>
          </button>
          <button
            className={`${
              headerParam?.reactions?.confused?.number ? "flex" : "hidden"
            } h-[26px] py-0 px-1 text-[12px] leading-[26px] ${
              headerParam?.reactions?.confused?.isClicked
                ? "rounded-[100px] border border-solid border-[#0969da] bg-[#ddf4ff]"
                : "rounded-[100px] border border-solid border-[#d0d7de] bg-[#ffffff]"
            } ml-2 mt-[5px]`}
          >
            <div className="h-4 w-4 text-[1em] ">😕</div>
            <span
              className={`ml-[2px] h-6 py-0 px-1 ${
                headerParam?.reactions?.confused?.isClicked
                  ? "text-[#0969da]"
                  : "text-[#57606a]"
              }`}
            >
              {headerParam?.reactions?.confused?.number}
            </span>
          </button>
          <button
            className={`${
              headerParam?.reactions?.heart?.number ? "flex" : "hidden"
            } h-[26px] py-0 px-1 text-[12px] leading-[26px] ${
              headerParam?.reactions?.heart?.isClicked
                ? "rounded-[100px] border border-solid border-[#0969da] bg-[#ddf4ff]"
                : "rounded-[100px] border border-solid border-[#d0d7de] bg-[#ffffff]"
            } ml-2 mt-[5px]`}
          >
            <div className="h-4 w-4 text-[1em] ">❤️</div>
            <span
              className={`ml-[2px] h-6 py-0 px-1 ${
                headerParam?.reactions?.heart?.isClicked
                  ? "text-[#0969da]"
                  : "text-[#57606a]"
              }`}
            >
              {headerParam?.reactions?.heart?.number}
            </span>
          </button>
          <button
            className={`${
              headerParam?.reactions?.rocket?.number ? "flex" : "hidden"
            } h-[26px] py-0 px-1 text-[12px] leading-[26px] ${
              headerParam?.reactions?.rocket?.isClicked
                ? "rounded-[100px] border border-solid border-[#0969da] bg-[#ddf4ff]"
                : "rounded-[100px] border border-solid border-[#d0d7de] bg-[#ffffff]"
            } ml-2 mt-[5px]`}
          >
            <div className="h-4 w-4 text-[1em] ">🚀</div>
            <span
              className={`ml-[2px] h-6 py-0 px-1 ${
                headerParam?.reactions?.rocket?.isClicked
                  ? "text-[#0969da]"
                  : "text-[#57606a]"
              }`}
            >
              {headerParam?.reactions?.rocket?.number}
            </span>
          </button>
          <button
            className={`${
              headerParam?.reactions?.eyes?.number ? "flex" : "hidden"
            } h-[26px] py-0 px-1 text-[12px] leading-[26px] ${
              headerParam?.reactions?.eyes?.isClicked
                ? "rounded-[100px] border border-solid border-[#0969da] bg-[#ddf4ff]"
                : "rounded-[100px] border border-solid border-[#d0d7de] bg-[#ffffff]"
            } ml-2 mt-[5px]`}
          >
            <div className="h-4 w-4 text-[1em] ">👀</div>
            <span
              className={`ml-[2px] h-6 py-0 px-1 ${
                headerParam?.reactions?.eyes?.isClicked
                  ? "text-[#0969da]"
                  : "text-[#57606a]"
              }`}
            >
              {headerParam?.reactions?.eyes?.number}
            </span>
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div>
      <div className="mb-4 flex bg-[#ffffff]">
        <details
          className={`${
            param?.reactions?.total_count ? "block" : "hidden"
          } relative`}
        >
          <summary className="inline-flex h-[26px] w-[26px] items-center rounded-[50%] border border-solid border-[hsla(210,18%,87%,1)] bg-[#f6f8fa]">
            <SmileyIcon className="ml-1 fill-[#57606a]" />
          </summary>
          <div className="absolute bottom-[100%] left-[auto] top-auto z-10 my-2 mr-2 flex w-[auto] rounded-[6px] border border-solid border-[#d0d7de] bg-[#fff] py-0 px-[2px] shadow-[0_8px_24px_rgba(140,149,159,0.2)]">
            <button
              className={`my-1 mx-[2px] flex h-[32px] w-[32px] items-center justify-center truncate rounded-[6px] p-1 hover:bg-[#f3f4f6] ${
                param?.reactions?.good?.isClicked ? "bg-[#ddf4ff]" : ""
              }`}
              onMouseEnter={() =>
                setEditData({
                  ...editData,
                  commentId: commentId,
                  reaction: "+1",
                })
              }
              onClick={() =>
                !headerParam?.reactions?.good?.isClicked &&
                createListCommentsReactions()
              }
            >
              👍
            </button>
            <button
              className={`my-1 mx-[2px] flex h-[32px] w-[32px] items-center justify-center truncate rounded-[6px] p-1 hover:bg-[#f3f4f6] ${
                param?.reactions?.bad?.isClicked ? "bg-[#ddf4ff]" : ""
              }`}
              onMouseEnter={() =>
                setEditData({
                  ...editData,
                  commentId: commentId,
                  reaction: "-1",
                })
              }
              onClick={() =>
                !headerParam?.reactions?.bad?.isClicked &&
                createListCommentsReactions()
              }
            >
              👎
            </button>
            <button
              className={`my-1 mx-[2px] flex h-[32px] w-[32px] items-center justify-center truncate rounded-[6px] p-1 hover:bg-[#f3f4f6] ${
                param?.reactions?.laugh?.isClicked ? "bg-[#ddf4ff]" : ""
              }`}
              onMouseEnter={() =>
                setEditData({
                  ...editData,
                  commentId: commentId,
                  reaction: "laugh",
                })
              }
              onClick={() =>
                !headerParam?.reactions?.laugh?.isClicked &&
                createListCommentsReactions()
              }
            >
              😄
            </button>
            <button
              className={`my-1 mx-[2px] flex h-[32px] w-[32px] items-center justify-center truncate rounded-[6px] p-1 hover:bg-[#f3f4f6] ${
                param?.reactions?.hooray?.isClicked ? "bg-[#ddf4ff]" : ""
              }`}
              onMouseEnter={() =>
                setEditData({
                  ...editData,
                  commentId: commentId,
                  reaction: "hooray",
                })
              }
              onClick={() =>
                !headerParam?.reactions?.hooray?.isClicked &&
                createListCommentsReactions()
              }
            >
              🎉
            </button>
            <button
              className={`my-1 mx-[2px] flex h-[32px] w-[32px] items-center justify-center truncate rounded-[6px] p-1 hover:bg-[#f3f4f6] ${
                param?.reactions?.confused?.isClicked ? "bg-[#ddf4ff]" : ""
              }`}
              onMouseEnter={() =>
                setEditData({
                  ...editData,
                  commentId: commentId,
                  reaction: "confused",
                })
              }
              onClick={() =>
                !headerParam?.reactions?.confused?.isClicked &&
                createListCommentsReactions()
              }
            >
              😕
            </button>
            <button
              className={`my-1 mx-[2px] flex h-[32px] w-[32px] items-center justify-center truncate rounded-[6px] p-1 hover:bg-[#f3f4f6] ${
                param?.reactions?.heart?.isClicked ? "bg-[#ddf4ff]" : ""
              }`}
              onMouseEnter={() =>
                setEditData({
                  ...editData,
                  commentId: commentId,
                  reaction: "heart",
                })
              }
              onClick={() =>
                !headerParam?.reactions?.heart?.isClicked &&
                createListCommentsReactions()
              }
            >
              ❤️
            </button>
            <button
              className={`my-1 mx-[2px] flex h-[32px] w-[32px] items-center justify-center truncate rounded-[6px] p-1 hover:bg-[#f3f4f6] ${
                param?.reactions?.rocket?.isClicked ? "bg-[#ddf4ff]" : ""
              }`}
              onMouseEnter={() =>
                setEditData({
                  ...editData,
                  commentId: commentId,
                  reaction: "rocket",
                })
              }
              onClick={() =>
                !headerParam?.reactions?.rocket?.isClicked &&
                createListCommentsReactions()
              }
            >
              🚀
            </button>
            <button
              className={`my-1 mx-[2px] flex h-[32px] w-[32px] items-center justify-center truncate rounded-[6px] p-1 hover:bg-[#f3f4f6] ${
                param?.reactions?.eyes?.isClicked ? "bg-[#ddf4ff]" : ""
              }`}
              onMouseEnter={() =>
                setEditData({
                  ...editData,
                  commentId: commentId,
                  reaction: "eyes",
                })
              }
              onClick={() =>
                !headerParam?.reactions?.eyes?.isClicked &&
                createListCommentsReactions()
              }
            >
              👀
            </button>
          </div>
        </details>
        <div className="mt-[-5px] flex flex-wrap">
          <button
            className={`${
              param?.reactions?.good?.number ? "flex" : "hidden"
            } h-[26px] py-0 px-1 text-[12px] leading-[26px] ${
              param?.reactions?.good?.isClicked
                ? "rounded-[100px] border border-solid border-[#0969da] bg-[#ddf4ff]"
                : "rounded-[100px] border border-solid border-[#d0d7de] bg-[#ffffff]"
            } ml-2 mt-[5px]`}
          >
            <div className="h-4 w-4 text-[1em] ">👍</div>
            <span
              className={`ml-[2px] h-6 py-0 px-1 ${
                param?.reactions?.good?.isClicked
                  ? "text-[#0969da]"
                  : "text-[#57606a]"
              }`}
            >
              {param?.reactions?.good?.number}
            </span>
          </button>
          <button
            className={`${
              param?.reactions?.bad?.number ? "flex" : "hidden"
            } h-[26px] py-0 px-1 text-[12px] leading-[26px] ${
              param?.reactions?.bad?.isClicked
                ? "rounded-[100px] border border-solid border-[#0969da] bg-[#ddf4ff]"
                : "rounded-[100px] border border-solid border-[#d0d7de] bg-[#ffffff]"
            } ml-2 mt-[5px]`}
          >
            <div className="h-4 w-4 text-[1em] ">👎</div>
            <span
              className={`ml-[2px] h-6 py-0 px-1 ${
                param?.reactions?.bad?.isClicked
                  ? "text-[#0969da]"
                  : "text-[#57606a]"
              }`}
            >
              {param?.reactions?.bad?.number}
            </span>
          </button>
          <button
            className={`${
              param?.reactions?.laugh?.number ? "flex" : "hidden"
            } h-[26px] py-0 px-1 text-[12px] leading-[26px] ${
              param?.reactions?.laugh?.isClicked
                ? "rounded-[100px] border border-solid border-[#0969da] bg-[#ddf4ff]"
                : "rounded-[100px] border border-solid border-[#d0d7de] bg-[#ffffff]"
            } ml-2 mt-[5px]`}
          >
            <div className="h-4 w-4 text-[1em] ">😄</div>
            <span
              className={`ml-[2px] h-6 py-0 px-1 ${
                param?.reactions?.laugh?.isClicked
                  ? "text-[#0969da]"
                  : "text-[#57606a]"
              }`}
            >
              {param?.reactions?.laugh?.number}
            </span>
          </button>
          <button
            className={`${
              param?.reactions?.hooray?.number ? "flex" : "hidden"
            } h-[26px] py-0 px-1 text-[12px] leading-[26px] ${
              param?.reactions?.hooray?.isClicked
                ? "rounded-[100px] border border-solid border-[#0969da] bg-[#ddf4ff]"
                : "rounded-[100px] border border-solid border-[#d0d7de] bg-[#ffffff]"
            } ml-2 mt-[5px]`}
          >
            <div className="h-4 w-4 text-[1em] ">🎉</div>
            <span
              className={`ml-[2px] h-6 py-0 px-1 ${
                param?.reactions?.hooray?.isClicked
                  ? "text-[#0969da]"
                  : "text-[#57606a]"
              }`}
            >
              {param?.reactions?.hooray?.number}
            </span>
          </button>
          <button
            className={`${
              param?.reactions?.confused?.number ? "flex" : "hidden"
            } h-[26px] py-0 px-1 text-[12px] leading-[26px] ${
              param?.reactions?.confused?.isClicked
                ? "rounded-[100px] border border-solid border-[#0969da] bg-[#ddf4ff]"
                : "rounded-[100px] border border-solid border-[#d0d7de] bg-[#ffffff]"
            } ml-2 mt-[5px]`}
          >
            <div className="h-4 w-4 text-[1em] ">😕</div>
            <span
              className={`ml-[2px] h-6 py-0 px-1 ${
                param?.reactions?.confused?.isClicked
                  ? "text-[#0969da]"
                  : "text-[#57606a]"
              }`}
            >
              {param?.reactions?.confused?.number}
            </span>
          </button>
          <button
            className={`${
              param?.reactions?.heart?.number ? "flex" : "hidden"
            } h-[26px] py-0 px-1 text-[12px] leading-[26px] ${
              param?.reactions?.heart?.isClicked
                ? "rounded-[100px] border border-solid border-[#0969da] bg-[#ddf4ff]"
                : "rounded-[100px] border border-solid border-[#d0d7de] bg-[#ffffff]"
            } ml-2 mt-[5px]`}
          >
            <div className="h-4 w-4 text-[1em] ">❤️</div>
            <span
              className={`ml-[2px] h-6 py-0 px-1 ${
                param?.reactions?.heart?.isClicked
                  ? "text-[#0969da]"
                  : "text-[#57606a]"
              }`}
            >
              {param?.reactions?.heart?.number}
            </span>
          </button>
          <button
            className={`${
              param?.reactions?.rocket?.number ? "flex" : "hidden"
            } h-[26px] py-0 px-1 text-[12px] leading-[26px] ${
              param?.reactions?.rocket?.isClicked
                ? "rounded-[100px] border border-solid border-[#0969da] bg-[#ddf4ff]"
                : "rounded-[100px] border border-solid border-[#d0d7de] bg-[#ffffff]"
            } ml-2 mt-[5px]`}
          >
            <div className="h-4 w-4 text-[1em] ">🚀</div>
            <span
              className={`ml-[2px] h-6 py-0 px-1 ${
                param?.reactions?.rocket?.isClicked
                  ? "text-[#0969da]"
                  : "text-[#57606a]"
              }`}
            >
              {param?.reactions?.rocket?.number}
            </span>
          </button>
          <button
            className={`${
              param?.reactions?.eyes?.number ? "flex" : "hidden"
            } h-[26px] py-0 px-1 text-[12px] leading-[26px] ${
              param?.reactions?.eyes?.isClicked
                ? "rounded-[100px] border border-solid border-[#0969da] bg-[#ddf4ff]"
                : "rounded-[100px] border border-solid border-[#d0d7de] bg-[#ffffff]"
            } ml-2 mt-[5px]`}
          >
            <div className="h-4 w-4 text-[1em] ">👀</div>
            <span
              className={`ml-[2px] h-6 py-0 px-1 ${
                param?.reactions?.eyes?.isClicked
                  ? "text-[#0969da]"
                  : "text-[#57606a]"
              }`}
            >
              {param?.reactions?.eyes?.number}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
