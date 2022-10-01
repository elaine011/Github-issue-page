import { useEffect, useState } from "react";

import Footer from "../../components/Footer";
import Login from "../../components/LoginHeader";
import Pagination from "../../components/Pagination";
import RepoHeader from "../../components/RepoHeader";
import LabelContent from "./LabelContent";
import LabelHeader from "./LabelHeader";
import { store } from "../../redux/store";
import { Provider } from "react-redux";
import api from "../../utils/api";
import IssueList from "./IssueList";
import { IssueContext } from "../../utils/SelectContext";
import NoIssue from "./NoIssue";

export default function Labels() {
  const [token, setToken] = useState("");
  const [issueData, setIssueData] = useState(null);
  const [labelQuery, setLabelQuery] = useState([]);
  const [searchQuery, setSearchQuery] = useState(["is:issue is:open"]);

  const [query, setQuery] = useState({
    owner: "elaine011",
    repo: "test-issue",
    perPage: 10,
    page: 1,
  });

  const now = new Date().getTime();

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
    const hours = Math.round((days % convertDay) / convertHour);
    const minutes = Math.floor(
      ((days % convertDay) % convertHour) / convertMins
    );
    const seconds = Math.round(
      (((days % convertDay) % convertHour) % convertMins) / 1000
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
      <Login setTokenFn={setToken} />
      <IssueContext.Provider
        value={{
          query: [query, setQuery],
          issues: [issueData, setIssueData],
          label: [labelQuery, setLabelQuery],
          searchQuery: [searchQuery, setSearchQuery],
        }}
      >
        <Provider store={store}>
          <RepoHeader />
          {issueData && (
            <>
              <LabelHeader issuesLength={issueData.length} />
              <LabelContent />
              {issueData.map((item) => {
                return (
                  <div
                    className="px-0 sm:px-4 lg:mx-auto lg:max-w-[1280px]"
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
