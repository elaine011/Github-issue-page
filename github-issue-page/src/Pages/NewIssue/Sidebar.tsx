import { GearIcon } from "@primer/octicons-react";
import { useContext, useEffect, useState } from "react";
import api from "../../utils/api";
import { IssueContext } from "../../utils/SelectContext";
import DropdownList from "./DropdownList";
import SubmitBtn from "./SubmitBtn";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [listContent, setListContent] = useState({
    assignees: [],
    labels: [],
  });
  const [inputValue, setInputValue] = useContext(IssueContext)["inputValue"];
  const userInfo = {
    owner: "elaine011",
    repo: "test-issue",
  };
  const sideBarTitle = [
    {
      id: 0,
      title: "Assignees",
      description: "assign yourself",
    },
    {
      id: 1,
      title: "Labels",
      description: "None yet",
    },
    {
      id: 2,
      title: "Projects",
      description: "None yet",
    },
    {
      id: 3,
      title: "Milestone",
      description: "No milestone",
    },
    {
      id: 4,
      title: "Development",
      description: "Shows branches and pull requests linked to this issue.",
    },
    {
      id: 5,
      title: "Helpful resources",
      description: "GitHub Community Guidelines",
    },
  ];

  useEffect(() => {
    async function getDropdownData() {
      const assigneesData = await api.getAssignees(userInfo);
      const labelsData = await api.getLabels();
      setListContent({
        ...listContent,
        assignees: assigneesData,
        labels: labelsData,
      });
    }
    getDropdownData();
  }, []);

  return (
    <div className="w-full text-[12px] text-[#24292f] md:ml-4 md:max-w-[240px]">
      <>
        {sideBarTitle.map((item, index) =>
          index === 0 ? (
            <div className="pt-4" key={index}>
              <details className="h-[30px] md:relative">
                <summary className="cursor-pointer list-none text-[#57606a] hover:text-[#0969da]">
                  <span className="font-semibold">{item.title}</span>
                  <GearIcon size={16} className="float-right" />
                </summary>
                <div className={`md:absolute md:right-[86px]`}>
                  <DropdownList
                    isDisplayFullScreen={true}
                    isOpen={isOpen}
                    isAssigned={true}
                    isSuggested={true}
                    isEdited={false}
                    listContent={listContent.assignees}
                  />
                </div>
              </details>

              {!inputValue?.assignees ? (
                <>
                  <span> No one—</span>
                  <a
                    className="cursor-pointer text-[#57606a] hover:text-[#0969da]"
                    onClick={() => {
                      let assigneesArr = [
                        ...(inputValue?.assignees ?? []),
                        "elaine011",
                      ];
                      if (assigneesArr.includes("elaine011")) {
                        assigneesArr = assigneesArr.filter(
                          (element) => element !== "elaine011"
                        );
                      }
                      assigneesArr = [...assigneesArr, "elaine011"];

                      let assigneesImgArr = [
                        ...(inputValue?.assigneesImg ?? []),
                        "https://avatars.githubusercontent.com/u/70333832?v=4",
                      ];
                      if (
                        assigneesImgArr.includes(
                          "https://avatars.githubusercontent.com/u/70333832?v=4"
                        )
                      ) {
                        assigneesImgArr = assigneesImgArr.filter(
                          (element) =>
                            element !==
                            "https://avatars.githubusercontent.com/u/70333832?v=4"
                        );
                      }
                      assigneesImgArr = [
                        ...assigneesImgArr,
                        "https://avatars.githubusercontent.com/u/70333832?v=4",
                      ];

                      setInputValue({
                        ...inputValue,
                        assignees: assigneesArr,
                        assigneesImg: assigneesImgArr,
                      });
                    }}
                  >
                    {item.description}
                  </a>
                </>
              ) : (
                <span className="flex">
                  <div className="flex flex-col">
                    {inputValue?.assigneesImg.map((item) => (
                      <>
                        <img
                          src={item}
                          className="mb-[10px] h-5 w-5 cursor-pointer rounded-full"
                        />
                      </>
                    ))}
                  </div>
                  <div className="flex flex-col">
                    {inputValue?.assignees.map((item) => (
                      <a className="ml-1 mb-[10px] h-[20px] cursor-pointer font-semibold text-[#24292f] hover:text-[#0969da]">
                        {item}
                      </a>
                    ))}
                  </div>
                </span>
              )}
            </div>
          ) : index < 4 ? (
            <div
              className="mt-4 border-t border-t-[hsla(210,18%,87%,1)] pt-4"
              key={index}
            >
              <details className="h-[30px] md:relative">
                <summary className="cursor-pointer list-none text-[#57606a] hover:text-[#0969da]">
                  <span className="font-semibold">{item.title}</span>
                  <GearIcon size={16} className="float-right" />
                </summary>
                <div className={`md:absolute md:right-[86px]`}>
                  {item.title === "Labels" && (
                    <DropdownList
                      isDisplayFullScreen={true}
                      isOpen={isOpen}
                      isAssigned={true}
                      isSuggested={false}
                      isEdited={true}
                      listContent={listContent.labels}
                    />
                  )}
                </div>
              </details>
              {!inputValue?.labels ? (
                <span>
                  <a>{item.description}</a>
                </span>
              ) : (
                <span className="flex">
                  {item.title === "Labels" && (
                    <div className="flex">
                      {inputValue?.labels.map((item, index) => (
                        <a className="mr-1 mb-[10px] h-[20px] cursor-pointer font-semibold text-[#24292f]">
                          <span
                            className="rounded-full px-[7px] py-[2px]"
                            style={{
                              backgroundColor: `#${inputValue?.labelsColor[index]}`,
                            }}
                          >
                            {item}
                          </span>
                        </a>
                      ))}
                    </div>
                  )}
                </span>
              )}
            </div>
          ) : (
            <div
              className="mt-4 border-t border-t-[hsla(210,18%,87%,1)] pt-4"
              key={index}
            >
              <details className="h-[30px] md:relative">
                <summary className="list-none text-[#57606a]">
                  {item.title === "Helpful resources" ? (
                    <span className="font-semibold text-[#24292f]">
                      {item.title}
                    </span>
                  ) : (
                    <span className="font-semibold">{item.title}</span>
                  )}
                </summary>
              </details>
              <span>
                {item.description == "GitHub Community Guidelines" ? (
                  <a
                    href="https://docs.github.com/articles/github-community-guidelines"
                    className="cursor-pointer text-[#0969da] hover:underline"
                  >
                    {item.description}
                  </a>
                ) : (
                  <a>{item.description}</a>
                )}
              </span>
            </div>
          )
        )}
        <div className="mt-4 border-t border-t-[hsla(210,18%,87%,1)] pt-4"></div>
        <div className="mt-6 w-full md:hidden">
          <SubmitBtn />
        </div>
      </>
    </div>
  );
}
