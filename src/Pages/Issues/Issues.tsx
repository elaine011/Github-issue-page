import { useContext, useEffect, useState } from "react";
import { Provider } from "react-redux";

import Footer from "../../components/Footer";
import Pagination from "../../components/Pagination";
import RepoHeader from "../../components/RepoHeader";
import { store } from "../../redux/store";
import api from "../../utils/api";
import { IssueContext } from "../../utils/SelectContext";
import IssueContent from "./IssueContent";
import IssueHeader from "./IssueHeader";
import IssueList from "./IssueList";
import NoIssue from "./NoIssue";

export default function Labels() {
  const [userData, setUserData] = useContext(IssueContext)["userData"];
  const [issueData, setIssueData] = useState(null);
  const [labelQuery, setLabelQuery] = useState([]);
  const [searchQuery, setSearchQuery] = useState(["is:issue is:open"]);
  const [inputValue, setInputValue] = useState("");
  const [query, setQuery] = useState({
    owner: userData?.userName,
    repo: userData?.repo,
    perPage: 10,
    page: 1,
  });

  const now = new Date().getTime();

  useEffect(() => {
    userData?.repo &&
      localStorage.setItem("userData", JSON.stringify(userData));
  }, []);

  useEffect(() => {
    async function getLabels() {
      const data = await api.getListIssues(query);
      setIssueData(data);
    }
    if (query.owner && query.repo) getLabels();
  }, [query]);

  function handleCreateTime(time) {
    const createdTime = Date.parse(time);
    const remainTime = now - createdTime;
    const convertDay = 24 * 3600 * 1000;
    const convertHour = 3600 * 1000;
    const convertMins = 60 * 1000;
    const days = Math.round(remainTime / convertDay);
    const hours = Math.round((remainTime % convertDay) / convertHour);
    const minutes = Math.round(
      ((remainTime % convertDay) % convertHour) / convertMins
    );
    const seconds = Math.round(
      (((remainTime % convertDay) % convertHour) % convertMins) / 1000
    );

    return seconds > 0
      ? `${seconds} seconds`
      : minutes > 0
      ? `${minutes} minutes`
      : hours > 0
      ? `${hours} hours`
      : days > 0
      ? `${days} days`
      : null;
  }

  return (
    <>
      <IssueContext.Provider
        value={{
          query: [query, setQuery],
          issues: [issueData, setIssueData],
          label: [labelQuery, setLabelQuery],
          searchQuery: [searchQuery, setSearchQuery],
          input: [inputValue, setInputValue],
          userData: [userData, setUserData],
        }}
      >
        <Provider store={store}>
          <RepoHeader />
          {issueData && (
            <>
              <IssueHeader issuesLength={issueData.length} />
              <IssueContent />
              {issueData.map((item, index) => {
                return (
                  <div
                    className=" px-0 sm:px-4 lg:mx-auto lg:max-w-[1280px]"
                    key={item.id}
                  >
                    <IssueList
                      title={item.title}
                      labels={item.labels}
                      issueNumber={item.number}
                      createdTime={handleCreateTime(item.created_at)}
                      author={item.user.login}
                      assignees={item.assignees}
                      commentNumber={item.comments}
                      state={item.state}
                      stateReason={item.state_reason}
                      key={index}
                    />
                  </div>
                );
              })}
              {issueData.length === 0 && (
                <div className="px-0 sm:px-4 lg:mx-auto lg:max-w-[1280px]">
                  <NoIssue />
                </div>
              )}
              <Pagination />
            </>
          )}
          <Footer />
        </Provider>
      </IssueContext.Provider>
    </>
  );
}
