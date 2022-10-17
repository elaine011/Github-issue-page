import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import api from "../utils/api";
import Footer from "./Footer";
import { IssueContext } from "../utils/SelectContext";

export default function Repo() {
  const [repo, setRepo] = useState(null);
  const [userData, setUserData] = useContext(IssueContext)["userData"];
  const navigate = useNavigate();
  useEffect(() => {
    async function getRepo() {
      const repo = await api.getRepo();
      setRepo(repo);
    }
    getRepo();
  }, []);
  return (
    <>
      {repo && (
        <div className="px-4 md:px-6">
          {repo.map((item, index) => (
            <>
              <div
                className="border-b border-solid border-[hsla(210,18%,87%,1)] py-6"
                onClick={() => {
                  setUserData({
                    ...userData,
                    repo: item.name,
                    visibility: item.visibility,
                  });
                  navigate("/issues");
                }}
                key={index}
              >
                <div className="flex items-center">
                  <h1 className="cursor-pointer text-[20px] font-semibold text-[#0969da] hover:underline">
                    {item.name}
                  </h1>
                  <span className="ml-1 grid place-items-center rounded-[2em] border border-solid border-[#d0d7de] px-[7px] text-[12px] font-medium text-[#57606a]">
                    {item.visibility}
                  </span>
                </div>
                <div className="my-2 pr-6 text-[#57606a]">
                  {item.description}
                </div>
                <div>
                  {item.topics.map((topic) => (
                    <span className="my-1 mr-[1.5px] cursor-pointer rounded-[2em] bg-[#ddf4ff] px-[10px] text-[12px] font-medium leading-[22px] text-[#0969da] hover:bg-[#0969da] hover:text-[#fff]">
                      {topic}
                    </span>
                  ))}
                </div>
                <div className="mt-2 text-[12px]">{item.language}</div>
              </div>
            </>
          ))}
        </div>
      )}
      <Footer />
    </>
  );
}
