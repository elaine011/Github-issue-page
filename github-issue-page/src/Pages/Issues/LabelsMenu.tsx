import { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { XIcon, CheckIcon } from "@primer/octicons-react";
import { actionType } from "../../redux/reducer";
import { IssueContext, Labels } from "../../utils/SelectContext";
import api from "../../utils/api";

export default function LabelsMenu({ isDisplayLabels, isDisplayFullScreen }) {
  const dispatch = useDispatch();
  const [labelslist, setLabelslist] = useState<Labels[]>();
  const [query, setQuery] = useContext(IssueContext)["query"];
  const [labelQuery, setLabelQuery] = useContext(IssueContext)["label"];
  const [searchQuery, setSearchQuery] = useContext(IssueContext)["searchQuery"];
  const [check, setCheck] = useState(false);
  const [filter, setFilter] = useState("");
  const [userData, setUserData] = useContext(IssueContext)["userData"];

  useEffect(() => {
    async function getLabels() {
      const data = await api.getLabels(userData);
      setLabelslist(data);
    }
    getLabels();
  }, []);

  return (
    <div className="absolute left-0 text-sm sm:text-[12px] lg:right-0">
      <div
        className={`${
          isDisplayLabels ? "block " : "hidden"
        } fixed top-0 left-0 right-0 bottom-0 z-[100] flex flex-col p-4 ${
          isDisplayFullScreen
            ? "md:absolute md:top-auto md:right-auto md:left-auto md:bottom-auto md:z-[1] md:p-0"
            : "sm:absolute sm:top-auto sm:right-auto sm:left-auto sm:bottom-auto sm:z-[1] sm:p-0"
        } lg:right-0`}
      >
        <div
          className={`mt-0 h-4/5 rounded-xl border border-solid border-[rgba(0,0,0,0)] bg-white before:absolute before:top-0 before:right-0 before:bottom-0 before:left-0 before:z-[-5] before:bg-[#1B1F2480] before:content-str ${
            isDisplayFullScreen
              ? "md:mt-2 md:h-auto md:max-h-[480px] md:w-[300px] md:border-[hsla(210,18%,87%,1)] md:before:content-none"
              : "sm:mt-2 sm:h-auto sm:max-h-[480px] sm:w-[300px] sm:border-[hsla(210,18%,87%,1)] sm:before:content-none"
          }`}
        >
          <header className="flex items-center border-b border-solid border-b-[hsla(210,18%,87%,1)] p-4 sm:pt-[7px] sm:pr-[7px] sm:pb-[7px]">
            <span className="flex-1 font-semibold">Filter by Label</span>
            <button className="m-[-16px] cursor-pointer rounded-none p-4 leading-none">
              <XIcon className="fill-fg-muted" />
            </button>
          </header>
          <div className="m-0 border-b border-solid border-b-[hsla(210,18%,87%,1)] p-4 sm:p-2">
            <input
              placeholder="Filter labels"
              className="block w-full rounded-md border border-solid border-[#d0d7de] py-[5px] px-[12px] text-sm leading-5 focus:border focus:border-solid focus:border-[#0969da] focus:shadow-innerblue focus:outline-none"
              onClick={() => dispatch({ type: actionType.labelType })}
              onChange={(e) => setFilter(e.target.value)}
            />
          </div>
          {!labelslist && (
            <div role="status" className="grid place-items-center py-8">
              <svg
                aria-hidden="true"
                className="mr-2 h-8 w-8 animate-spin fill-blue-600 text-gray-200 dark:text-gray-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
            </div>
          )}
          <div
            className={`max-h-[calc(100%-126px)] overflow-y-auto ${
              isDisplayFullScreen
                ? "md:max-h-[calc(485px-82px)]"
                : "sm:max-h-[calc(485px-82px)]"
            } `}
          >
            <a className="flex w-full cursor-pointer items-start overflow-hidden border-b border-solid border-b-[hsla(210,18%,87%,1)] p-4 text-left text-[#24292f] sm:pt-[7px] sm:pb-[7px]">
              <div className="mr-2 flex items-start">
                <CheckIcon fill={"#ffffff"} />
              </div>
              <span className="font-semibold">Unlabeled</span>
            </a>
            {labelslist &&
              labelslist.map((item, index) => {
                if (filter && !item.name.includes(filter)) return <></>;
                else
                  return (
                    <a
                      className={`flex w-full cursor-pointer items-start overflow-hidden border-b p-4 text-left text-[#24292f] ${
                        item.length - 1 != index
                          ? "border-solid"
                          : "border-none"
                      } border-b-[hsla(210,18%,87%,1)] hover:bg-[rgba(234,238,242,0.5)] sm:pt-[7px] sm:pb-[7px]`}
                      key={index}
                      onClick={() => {
                        setSearchQuery([...searchQuery, "label:" + item.name]);
                        labelQuery.push(item.name);
                        setQuery({
                          ...query,
                          label: labelQuery,
                        });
                        if (query.hasOwnProperty("label")) {
                          query.label = query.label.join(",");
                        }
                        setCheck(true);
                      }}
                    >
                      {query.label && (
                        <div className="mr-2 flex items-start">
                          <CheckIcon
                            fill={
                              query?.label[index] === item.name
                                ? "#000"
                                : "#fff"
                            }
                          />
                        </div>
                      )}
                      <span
                        className="mt-px mr-2 h-[1em] w-[1em] rounded-[2em] text-[14px]"
                        style={{ backgroundColor: `#${item.color}` }}
                      />
                      <div className="min-w-0 leading-tight">
                        <div className="flex items-center">
                          <div className="truncate font-semibold text-[#24292f] sm:pt-[2px]">
                            {item.name}
                          </div>
                          {item?.usercustomname != "" ? (
                            <div className="ml-2 truncate font-normal text-[#57606a] sm:pt-[2px]">
                              {item.des}
                            </div>
                          ) : (
                            <></>
                          )}
                        </div>
                        {item.des != "" ? (
                          <div className="mt-1 truncate font-medium text-[#57606a]">
                            {item.des}
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
