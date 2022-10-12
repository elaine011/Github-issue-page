import { KebabHorizontalIcon, SmileyIcon } from "@primer/octicons-react";

export default function Comment({
  author,
  authorComment,
  actor,
  body,
  createdTime,
  owner,
  actorImg,
  reactions,
}) {
  const editDropDownMenu = [
    ["Copy Link", "Quote reply"],
    ["Edit"],
    ["Report Content"],
    ["Copy Link", "Quote reply", "Reference in new issue"],
    ["Edit", "Hide", "Delete"],
  ];

  return (
    <>
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
                <span className="ml-1 flex items-center rounded-[2em] border border-solid border-[rgba(84,174,255,0.4)] px-[7px] text-[12px] font-medium">
                  Owner
                </span>
              ) : owner === "COLLABORATOR" ? (
                <span className="ml-1 flex items-center rounded-[2em] border border-solid border-[#d0d7de] px-[7px] text-[12px] font-medium">
                  Collaborator
                </span>
              ) : (
                <></>
              )}
              {author === actor && (
                <span className="ml-1 flex items-center rounded-[2em] border border-solid border-[rgba(84,174,255,0.4)] px-[7px] text-[12px] font-medium">
                  Author
                </span>
              )}
              <div className="hidden md:mx-2 md:block md:py-2 md:px-1">
                <SmileyIcon size={16} />
              </div>
              <details className="relative ml-2 md:ml-0">
                <summary className="list-none px-1 py-2 focus:text-[#0969da]">
                  <KebabHorizontalIcon size={16} />
                </summary>
                <div className="absolute left-auto right-[-6px] z-10 w-[185px] rounded-md border border-solid border-[#d0d7de] bg-[#fff] py-2 text-[#24292f] shadow-[0_8px_24px_rgba(140,149,159,0.2)] before:absolute before:left-auto before:right-[9px] before:top-[-17px] before:border-[8px] before:border-solid before:border-transparent before:border-b-[#d0d7de] before:content-str after:absolute after:left-auto after:right-[9px] after:top-[-16px] after:border-[8px] after:border-solid after:border-transparent after:border-b-[#fff] after:content-str">
                  <ul>
                    {authorComment
                      ? editDropDownMenu[0].map((item, index) => (
                          <li className="p-2 pl-4" key={index}>
                            {item}
                          </li>
                        ))
                      : editDropDownMenu[3].map((item, index) => (
                          <li className="p-2 pl-4" key={index}>
                            {item}
                          </li>
                        ))}
                    <div className="my-2 border-t border-solid border-[#d0d7de]"></div>
                    {authorComment
                      ? editDropDownMenu[1].map((item, index) => (
                          <li className="p-2 pl-4" key={index}>
                            {item}
                          </li>
                        ))
                      : editDropDownMenu[4].map((item, index) => (
                          <li className="p-2 pl-4" key={index}>
                            {item}
                          </li>
                        ))}
                    <div className="my-2 border-t border-solid border-[#d0d7de]"></div>
                    {editDropDownMenu[2].map((item, index) => (
                      <li className="p-2 pl-4" key={index}>
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
              <p className="mb-4 break-all">{body}</p>
            )}
            <div className="flex">
              <div className="mr-1 grid h-6 w-6 place-items-center rounded-[50%] border border-solid border-[hsla(210,18%,87%,1)] bg-[#f6f8fa]">
                <SmileyIcon size={16} />
              </div>
              <div>reactions</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
