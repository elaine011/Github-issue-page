import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../utils/api";

import { IssueContext } from "../utils/SelectContext";
import Footer from "./Footer";

export default function Repo() {
  const [repo, setRepo] = useState(null);
  const [runAgain, setRunAgain] = useState(false);
  const [userData, setUserData] = useContext(IssueContext)["userData"];
  const navigate = useNavigate();
  const token = JSON.parse(window.localStorage.getItem("loginToken"));
  useEffect(() => {
    setRunAgain(true);
  }, []);

  useEffect(() => {
    async function getRepo() {
      const repo = await api.getRepo(token);
      setRepo(repo);
    }
    getRepo();
  }, [runAgain]);

  return (
    <>
      {repo && (
        <div className="mx-auto mt-16 max-w-[1280px] px-8 md:flex md:px-6">
          <div className="mx-auto flex max-w-[360px] flex-col justify-center md:mr-6 md:justify-start">
            <img
              src={repo[0].owner.avatar_url}
              className="mb-2 w-full rounded-full border border-solid border-[#d0d7de]"
            />
            <div className="text-center text-[24px] font-semibold text-[#24292f]">
              {userData.userName}
            </div>
          </div>
          <div className="w-full">
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
                >
                  <div className="flex items-center">
                    <h1 className="cursor-pointer text-[20px] font-semibold text-[#0969da] hover:underline">
                      {item.name}
                    </h1>
                    <span
                      className="ml-1 grid place-items-center rounded-[2em] border border-solid border-[#d0d7de] px-[7px] text-[12px] font-medium text-[#57606a]"
                      key={index}
                    >
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
        </div>
      )}
      <Footer />
    </>
  );
}
