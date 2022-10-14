import { SmileyIcon } from "@primer/octicons-react";

export default function Reactions({ reactions }) {
  const param = {
    boxBlue: true,
    reactions: {
      good: { number: reactions["good"], isClicked: true },
      bad: { number: reactions["bad"], isClicked: true },
      confused: { number: reactions["confused"], isClicked: false },
      eyes: { number: reactions["eyes"], isClicked: true },
      heart: { number: reactions["heart"], isClicked: true },
      hooray: { number: reactions["hooray"], isClicked: true },
      laugh: { number: reactions["laugh"], isClicked: true },
      rocket: { number: reactions["rocket"], isClicked: true },
      total_count: reactions["total_count"],
    },
  };

  return (
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
                param?.reactions?.hooray?.isClicked ? "bg-[#ddf4ff]" : ""
              }`}
            >
              🎉
            </button>
            <button
              className={`my-1 mx-[2px] flex h-[32px] w-[32px] items-center justify-center truncate rounded-[6px] p-1 hover:bg-[#f3f4f6] ${
                param?.reactions?.confused?.isClicked ? "bg-[#ddf4ff]" : ""
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
                param?.reactions?.rocket?.isClicked ? "bg-[#ddf4ff]" : ""
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
