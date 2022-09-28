import { XIcon, CheckIcon } from "@primer/octicons-react";

export default function LabelsMenu({
  displayLabelsMenu,
  setDisplayLabelsMenu,
}) {
  const labelslist = [
    {
      name: "123lll26",
      des: "123",
      color: "bg-[#acacac]",
      usercustomname: "elaine",
    },
    {
      name: "123456",
      des: "123",
      color: "bg-[#7F1D1D]",
    },
    {
      name: "bug",
      des: "fixed it",
      color: "bg-[#f29513]",
    },
    {
      name: "fight",
      des: "",
      color: "bg-[#7F1D1D]",
      usercustomname: "elaine",
    },
    {
      name: "new label1321",
      des: "123",
      color: "bg-[#7F1D1D]",
    },
    {
      name: "new",
      des: "new label",
      color: "bg-[#7F1D1D]",
    },
  ];

  return (
    <div className="absolute left-0 text-sm sm:text-[12px] lg:right-0">
      <div
        className={`${
          displayLabelsMenu ? "block " : "hidden"
        } fixed top-0 left-0 right-0 bottom-0 z-[100] flex flex-col p-4 sm:absolute sm:top-auto sm:right-auto sm:left-auto sm:bottom-auto sm:z-[1] sm:p-0 lg:right-0`}
      >
        <div className="mt-0 h-4/5 rounded-xl border border-solid border-[rgba(0,0,0,0)] bg-white before:absolute before:top-0 before:right-0 before:bottom-0 before:left-0 before:z-[-5] before:bg-[#1B1F2480] before:content-str sm:mt-2 sm:h-auto sm:max-h-[480px] sm:w-[300px] sm:border-[hsla(210,18%,87%,1)] sm:before:content-none">
          <header className="flex items-center border-b border-solid border-b-[hsla(210,18%,87%,1)] p-4 sm:pt-[7px] sm:pr-[7px] sm:pb-[7px]">
            <span className="flex-1 font-semibold">Filter by Label</span>
            <button
              className="m-[-16px] cursor-pointer rounded-none p-4 leading-none"
              onClick={() => setDisplayLabelsMenu(!displayLabelsMenu)}
            >
              <XIcon className="fill-fg-muted" />
            </button>
          </header>
          <div className="m-0 border-b border-solid border-b-[hsla(210,18%,87%,1)] p-4 sm:p-2">
            <input
              placeholder="Filter labels"
              className="block w-full rounded-md border border-solid border-[#d0d7de] py-[5px] px-[12px] text-sm leading-5 focus:border focus:border-solid focus:border-[#0969da] focus:shadow-innerblue focus:outline-none"
            />
          </div>
          <div className="max-h-[calc(100%-126px)] overflow-y-auto sm:max-h-[calc(485px-82px)]">
            <a className="flex w-full cursor-pointer items-start overflow-hidden border-b border-solid border-b-[hsla(210,18%,87%,1)] p-4 text-left text-[#24292f] sm:pt-[7px] sm:pb-[7px] ">
              <div className="mr-2 flex items-start">
                <CheckIcon fill={"#ffffff"} />
              </div>
              <span className="font-semibold">Unlabeled</span>
            </a>
            {labelslist.map((element, index) => {
              return (
                <a
                  className={`flex w-full cursor-pointer items-start overflow-hidden border-b p-4 text-left text-[#24292f] ${
                    labelslist.length - 1 != index
                      ? "border-solid"
                      : "border-none"
                  } border-b-[hsla(210,18%,87%,1)] hover:bg-[rgba(234,238,242,0.5)] sm:pt-[7px] sm:pb-[7px]`}
                >
                  <div className="mr-2 flex items-start">
                    <CheckIcon fill={"#000000"} />
                  </div>
                  <span
                    className={`${element.color} mt-px mr-2 h-[1em] w-[1em] rounded-[2em] text-[14px]`}
                  />
                  <div className="min-w-0 leading-tight">
                    <div className="flex items-center">
                      <div className="truncate font-semibold text-[#24292f] sm:pt-[2px]">
                        {element.name}
                      </div>
                      {element?.usercustomname != "" ? (
                        <div className="ml-2 truncate font-normal text-[#57606a] sm:pt-[2px]">
                          {element.des}
                        </div>
                      ) : (
                        <></>
                      )}
                    </div>
                    {element.des != "" ? (
                      <div className="mt-1 truncate font-medium text-[#57606a]">
                        {element.des}
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
