import { GearIcon } from "@primer/octicons-react";
import { useEffect, useState } from "react";
import api from "../../utils/api";
import DropdownList from "./DropdownList";
import SubmitBtn from "./SubmitBtn";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [listContent, setListContent] = useState({
    assignees: [],
    labels: [],
  });
  const userInfo = {
    owner: "elaine011",
    repo: "test-issue",
  };

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
      <div className="pt-4">
        <details className="h-[30px] md:relative">
          <summary className="cursor-pointer list-none text-[#57606a] hover:text-[#0969da]">
            <span className="md:font-semibold">Assignees</span>
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
        <span>
          No one—
          <a className="cursor-pointer text-[#57606a] hover:text-[#0969da]">
            assign yourself
          </a>
        </span>
      </div>
      <div className="mt-4 border-t border-t-[hsla(210,18%,87%,1)] pt-4">
        <details className="h-[30px] md:relative">
          <summary className="cursor-pointer list-none text-[#57606a] hover:text-[#0969da]">
            <span className="md:font-semibold">Labels</span>
            <GearIcon size={16} className="float-right" />
          </summary>
          <div className={`md:absolute md:right-[86px]`}>
            <DropdownList
              isDisplayFullScreen={true}
              isOpen={isOpen}
              isAssigned={true}
              isSuggested={false}
              isEdited={true}
              listContent={listContent.labels}
            />
          </div>
        </details>
        <span>
          <a>None yet</a>
        </span>
      </div>
      <div className="mt-4 border-t border-t-[hsla(210,18%,87%,1)] pt-4"></div>
      <div className="mt-6 w-full md:hidden">
        <SubmitBtn />
      </div>
    </div>
  );
}
