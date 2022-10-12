import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer";
import Login from "../../components/LoginHeader";
import RepoHeader from "../../components/RepoHeader";
import api from "../../utils/api";
import { handleCreateTime } from "../../utils/handleTime";
import { IssueContext } from "../../utils/SelectContext";
import Content from "../NewIssue/Content";
import Sidebar from "../NewIssue/Sidebar";
import AssignSection from "./AssignSection";
import IssueTitle from "./IssueTitle";
import TimeLine from "./TimeLine";

export default function IssuePage() {
  const [token, setToken] = useState("");
  const { issueId } = useParams();
  const [issueCommentsData, setIssueCommentsData] = useState(null);
  const [timelineData, setTimelineData] = useState(null);
  const [inputValue, setInputValue] = useState({});
  const [commentsData, setCommentsData] = useState({
    owner: "elaine011",
    repo: "test-issue",
    issue_number: issueId,
  });

  useEffect(() => {
    async function getListComment() {
      const data = await api.getListComments(commentsData);
      setIssueCommentsData(data);
    }
    async function getTimeline() {
      const data = await api.getTimeline(commentsData);
      setTimelineData(data);
    }
    getListComment();
    getTimeline();
  }, []);

  const handleSubmitBtn = () => {
    if (inputValue["title"] && inputValue["title"].length > 0) {
      return true;
    } else return false;
  };

  return (
    <>
      <Login setTokenFn={setToken} />
      <RepoHeader />
      <IssueContext.Provider
        value={{
          timelineData: [timelineData, setTimelineData],
          issueCommentsData: [issueCommentsData, setIssueCommentsData],
          inputValue: [inputValue, setInputValue],
          handleSubmitBtn,
        }}
      >
        {issueCommentsData && timelineData && (
          <div className="mt-6 flex max-w-[1280px] flex-col px-4 md:px-6 xl:mx-auto">
            <div>
              <IssueTitle
                title={issueCommentsData?.title}
                issueNumber={issueCommentsData?.number}
                state={issueCommentsData?.state}
                author={issueCommentsData?.user.login}
                totalComments={issueCommentsData?.comments}
                createdTime={handleCreateTime(issueCommentsData?.created_at)}
              />
              <AssignSection
                assignees={issueCommentsData?.assignees}
                labels={issueCommentsData?.labels}
              />
            </div>
            <div className="mt-6 max-w-[1280px] md:flex md:w-full">
              <div className="w-full">
                <TimeLine />
                <Content newComment={true} />
              </div>
              <Sidebar newComment={true} />
            </div>
          </div>
        )}
      </IssueContext.Provider>
      <Footer />
    </>
  );
}
