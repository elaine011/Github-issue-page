import { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { CheckIcon, XIcon } from "@primer/octicons-react";
import Loading from "../../components/Loading";
import { actionType } from "../../redux/reducer";
import api from "../../utils/api";
import { IssueContext } from "../../utils/SelectContext";

export default function AssigneeMenu({
  isDisplayAssignee,
  isDisplayFullScreen,
}) {
  const dispatch = useDispatch();
  const [userData, setUserData] = useContext(IssueContext)["userData"];
  const [assignees, setAssignees] = useState([]);
  const [query, setQuery] = useContext(IssueContext)["query"];
  const [searchQuery, setSearchQuery] = useContext(IssueContext)["searchQuery"];
  const [filter, setFilter] = useState("");

  const userInfo = {
    owner: userData.userName,
    repo: userData.repo,
    token: userData.token,
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
          isDisplayAssignee ? "block" : "hidden"
        } fixed top-0 left-0 right-0 bottom-0 z-[100] flex flex-col p-4 md:right-[-85px] ${
          isDisplayFullScreen
            ? "md:absolute md:top-auto md:bottom-auto md:z-[1] md:p-0"
            : "sm:absolute sm:top-auto sm:right-auto sm:bottom-auto sm:z-[1] sm:p-0"
        } md:left-auto`}
      >
        <div
          className={`mt-0 h-4/5 rounded-xl border border-solid border-[rgba(0,0,0,0)] bg-white before:absolute before:top-0 before:right-0 before:bottom-0 before:left-0 before:z-[-5] before:bg-[#1B1F2480] before:content-str ${
            isDisplayFullScreen
              ? "md:mt-2 md:h-auto md:max-h-[480px] md:w-[300px] md:border-[hsla(210,18%,87%,1)] md:before:content-none"
              : "sm:mt-2 sm:h-auto sm:max-h-[480px] sm:w-[300px] sm:border-[hsla(210,18%,87%,1)] sm:before:content-none"
          }`}
        >
          <header className="flex items-center border-b border-solid border-b-[hsla(210,18%,87%,1)] p-4 sm:pt-[7px] sm:pr-[7px] sm:pb-[7px]">
            <span className="flex-1 font-semibold">
              Filter by who's assigned
            </span>
            <button
              className="m-[-16px] cursor-pointer rounded-none p-4 leading-none"
              onClick={() => dispatch({ type: actionType.assigneeType })}
            >
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
          <div
            className={`max-h-[calc(100%-126px)] overflow-y-auto ${
              isDisplayFullScreen
                ? "md:max-h-[calc(485px-82px)]"
                : "sm:max-h-[calc(485px-82px)]"
            } `}
          >
            <a className="flex w-full cursor-pointer items-center overflow-hidden border-b border-solid border-b-[hsla(210,18%,87%,1)] p-4 text-left text-[#24292f] sm:pt-[7px] sm:pb-[7px] ">
              <div className="mr-2 flex items-center">
                <CheckIcon fill={"#ffffff"} />
              </div>
              <span className="font-semibold">Assigned to nobody</span>
            </a>
            {!assignees && <Loading />}
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
