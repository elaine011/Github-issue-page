import { CommentIcon, IssueOpenedIcon } from "@primer/octicons-react";

export default function IssueList() {
  const assignees = [
    {
      login: "max80713",
      avatar_url: "https://avatars.githubusercontent.com/u/11663276?v=4",
    },
    {
      login: "kayliao",
      avatar_url: "https://avatars.githubusercontent.com/u/34449805?v=4",
    },
    {
      login: "chloe7303",
      avatar_url: "https://avatars.githubusercontent.com/u/57607232?v=4",
    },
    {
      login: "elaine011",
      avatar_url: "https://avatars.githubusercontent.com/u/70333832?v=4",
    },
    {
      login: "yarchiee",
      avatar_url: "https://avatars.githubusercontent.com/u/105163825?v=4",
    },
  ];
  return (
    <>
      <div className="rounded-b-md border border-t-0">
        <div className="flex border border-transparent border-t-primary-border px-[16px] py-[8px] hover:bg-primary-bg">
          <IssueOpenedIcon className="fill-primary" fill="#127f37" />
          <div className="px-2">
            <span className="text-4 mr-[5px] font-semibold leading-[21.6px] hover:cursor-pointer hover:text-[#0969da]">
              "SyntaxError: Unexpected end of JSON input" appears on startup of
              firebase-tools-instant-win.exe
            </span>
            <span className="block md:inline">
              <div className="mr-[5px] inline-block h-5 rounded-[10px] bg-[#dcb5ac] px-[7px] text-[12px] font-semibold leading-[20px] hover:cursor-pointer">
                bug
              </div>
            </span>
            <div className="text-text mt-2 text-xs hover:cursor-pointer">
              #3432 opened on 31 May 2021 by crowne
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
                      className={`ml-[-11px] mr-0 h-[20px] w-[20px] rounded-[50%] z-${index} hover:ml-0`}
                      src={img.avatar_url}
                      alt=""
                    />
                  );
                })}
            </span>
            <span className="ml-[15px] flex flex-1 flex-nowrap justify-center hover:cursor-pointer hover:text-[#0969da]">
              <CommentIcon size={16} />
              <span className="ml-[3px] text-[12px]">1</span>
            </span>
          </div>
        </div>
        <div className="flex border border-transparent border-t-primary-border px-[16px] py-[8px]">
          <IssueOpenedIcon className="fill-primary" fill="#127f37" />
          <div className="px-2">
            <span className="text-4 mr-[5px] font-semibold leading-[21.6px] hover:cursor-pointer hover:text-[#0969da]">
              "SyntaxError: Unexpected end of JSON input" appears on startup of
              firebase-tools-instant-win.exe
            </span>
            <span className="block md:inline">
              <div className="mr-[5px] inline-block h-5 rounded-[10px] bg-[#dcb5ac] px-[7px] text-[12px] font-semibold leading-[20px] hover:cursor-pointer">
                bug
              </div>
            </span>
            <div className="text-text mt-2 text-xs hover:cursor-pointer">
              #3432 opened on 31 May 2021 by crowne
            </div>
          </div>
          <div className="ml-auto hidden min-w-[20%] sm:flex ">
            <div className="flex-1"></div>
            <span className=" ml-auto flex min-w-[30%]  hover:cursor-pointer">
              {assignees
                .slice(0)
                .reverse()
                .map((img, index) => {
                  return (
                    <img
                      className={`mr-0 ml-[-11px] h-[20px] w-[20px] rounded-[50%] z-${index} hover:ml-0`}
                      src={img.avatar_url}
                      alt=""
                    />
                  );
                })}
            </span>
            <span className="ml-[15px] flex flex-1 flex-nowrap justify-center hover:cursor-pointer hover:text-[#0969da]">
              <CommentIcon size={16} />
              <span className="ml-[3px] text-[12px]">1</span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
