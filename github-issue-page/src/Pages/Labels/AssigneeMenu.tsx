import { CheckIcon, XIcon } from "@primer/octicons-react";
import { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { actionType } from "../../redux/reducer";
import api from "../../utils/api";
import { IssueContext } from "../../utils/SelectContext";

export default function AssigneeMenu({ isDisplayAssignee }) {
  const dispatch = useDispatch();
  const [assignees, setAssignees] = useState([]);
  const [query, setQuery] = useContext(IssueContext)["query"];
  const [searchQuery, setSearchQuery] = useContext(IssueContext)["searchQuery"];
  const [filter, setFilter] = useState("");

  const userInfo = {
    owner: "elaine011",
    repo: "test-issue",
  };

  useEffect(() => {
    async function getAssignee() {
      const data = await api.getAssignees(userInfo);
      setAssignees(data);
    }
    getAssignee();
  }, []);

  return (
    <div className="absolute left-0 text-sm sm:left-0 sm:text-[12px] md:left-auto">
      <div
        className={`${
          isDisplayAssignee ? "block " : "hidden"
        } fixed top-0 left-0 right-0 bottom-0 z-[100] flex flex-col p-4 sm:absolute sm:top-auto sm:right-auto  sm:bottom-auto sm:z-[1] sm:p-0 md:right-[-85px] md:left-auto`}
      >
        <div className="mt-0 h-4/5 rounded-xl border border-solid border-[rgba(0,0,0,0)] bg-white before:absolute before:top-0 before:right-0 before:bottom-0 before:left-0 before:z-[-5] before:bg-[#1B1F2480] before:content-str sm:mt-2 sm:h-auto sm:max-h-[480px] sm:w-[300px] sm:border-[hsla(210,18%,87%,1)] sm:before:content-none">
          <header className="flex items-center border-b border-solid border-b-[hsla(210,18%,87%,1)] p-4 sm:pt-[7px] sm:pr-[7px] sm:pb-[7px]">
            <span className="flex-1 font-semibold">
              Filter by who's assigned
            </span>
            <button className="m-[-16px] cursor-pointer rounded-none p-4 leading-none">
              <XIcon className="fill-fg-muted" />
            </button>
          </header>
          <div className="m-0 border-b border-solid border-b-[hsla(210,18%,87%,1)] p-4 sm:p-2">
            <input
              placeholder="Filter users"
              className="block w-full rounded-md border border-solid border-[#d0d7de] py-[5px] px-[12px] text-sm leading-5 focus:border focus:border-solid focus:border-[#0969da] focus:shadow-innerblue focus:outline-none"
              onClick={() => dispatch({ type: actionType.assigneeType })}
              onChange={(e) => setFilter(e.target.value)}
            />
          </div>
          <div className="max-h-[calc(100%-126px)] overflow-y-auto sm:max-h-[calc(485px-82px)]">
            <a className="flex w-full cursor-pointer items-center overflow-hidden border-b border-solid border-b-[hsla(210,18%,87%,1)] p-4 text-left text-[#24292f] sm:pt-[7px] sm:pb-[7px] ">
              <div className="mr-2 flex items-center">
                <CheckIcon fill={"#ffffff"} />
              </div>
              <span className="font-semibold">Assigned to nobody</span>
            </a>
            {!assignees && (
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
            {assignees.map((user, index) => {
              if (filter && !user.login.includes(filter)) return <></>;
              else
                return (
                  <a
                    className={`flex w-full cursor-pointer items-center overflow-hidden border-b p-4 text-left text-[#24292f] ${
                      user.length - 1 != index ? "border-solid" : "border-none"
                    } border-b-[hsla(210,18%,87%,1)] hover:bg-[rgba(234,238,242,0.5)] sm:pt-[7px] sm:pb-[7px]`}
                    key={index}
                    onClick={() => {
                      setSearchQuery([
                        ...searchQuery,
                        "assignee:" + user.login,
                      ]);
                      setQuery({ ...query, assignee: user.login });
                    }}
                  >
                    <div className="mr-2 flex items-center">
                      <CheckIcon
                        fill={query?.assignee === user.login ? "#000" : "#fff"}
                      />
                    </div>
                    <img
                      src={`${user.avatar_url}`}
                      className="mt-px mr-2 h-5 w-5 rounded-[2em] text-[14px] shadow-[0_0_0_1px_rgba(27,31,36,0.15)]"
                    />
                    <div className="min-w-0 leading-tight">
                      <div className="flex items-center">
                        <div className="truncate font-semibold text-[#24292f] sm:pt-[2px]">
                          {user.login}
                        </div>
                      </div>
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
