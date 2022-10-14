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
import StickyHeader from "./StickyHeader";
import TimeLine from "./TimeLine";
import { Issue } from "../../utils/type";
export default function IssuePage() {
  const [token, setToken] = useState("");
  const { issueId } = useParams();
  const [issueCommentsData, setIssueCommentsData] = useState(null);
  const [timelineData, setTimelineData] = useState(null);
  const [inputValue, setInputValue] = useState({
    title: "",
    assignees: [],
    labels: [],
    assigneesImg: [],
    labelsColor: [],
  });
  const [displayStickHeader, setDisplayStickyHeader] = useState(false);
  const [editData, setEditData] = useState({
    owner: "elaine011",
    repo: "test-issue",
    issue_number: issueId,
  });
  const [commentsData, setCommentsData] = useState({
    owner: "elaine011",
    repo: "test-issue",
    issue_number: issueId,
  });
  const [listContent, setListContent] = useState({
    assignees: [],
    labels: [],
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
    async function getDropDownData() {
      const dropDownData = (await api.getListComments(commentsData)) as Issue;
      setInputValue({
        ...inputValue,
        assignees: dropDownData?.assignees.map((item) => item.login),
        labels: dropDownData?.labels.map((item) => item.name),
        assigneesImg: dropDownData?.assignees.map((item) => item.avatar_url),
        labelsColor: dropDownData.labels.map((item) => item.color),
      });
    }
    getListComment();
    getTimeline();
    getDropDownData();
  }, []);

  async function updateIssue() {
    await api.updateIssue(editData);
    async function getListComment() {
      const data = await api.getListComments(commentsData);
      setIssueCommentsData(data);
    }
    getListComment();
  }

  async function updateComment() {
    await api.updateComment(editData);
    async function getTimeline() {
      const data = await api.getTimeline(commentsData);
      setTimelineData(data);
    }
    getTimeline();
  }

  async function deleteComment() {
    await api.deleteComment(editData);
    async function getTimeline() {
      const data = await api.getTimeline(commentsData);
      setTimelineData(data);
    }
    getTimeline();
  }

  async function createComment() {
    await api.createComment(editData);
    async function getTimeline() {
      const data = await api.getTimeline(commentsData);
      setTimelineData(data);
    }
    getTimeline();
  }

  async function getSideBarApi() {
    const assigneesData = await api.getAssignees(commentsData);
    const labelsData = await api.getLabels();
    setListContent({
      ...listContent,
      assignees: assigneesData,
      labels: labelsData,
    });
  }

  const handleSubmitBtn = () => {
    if (inputValue["body"] && inputValue["body"].length > 0) {
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
          editData: [editData, setEditData],
          updateComment,
          displayStickHeader: [displayStickHeader, setDisplayStickyHeader],
          createComment,
          deleteComment,
          updateIssue,
        }}
      >
        {issueCommentsData && timelineData && (
          <div className="mt-6 flex max-w-[1280px] flex-col px-4 md:px-6 xl:mx-auto">
            <div>
              <StickyHeader
                title={issueCommentsData?.title}
                state={issueCommentsData?.state}
                stateReason={issueCommentsData?.state_reason}
                issueNumber={issueCommentsData?.number}
                author={issueCommentsData?.user.login}
                totalComments={issueCommentsData?.comments}
                createdTime={handleCreateTime(issueCommentsData?.created_at)}
              />
              <IssueTitle
                title={issueCommentsData?.title}
                issueNumber={issueCommentsData?.number}
                state={issueCommentsData?.state}
                stateReason={issueCommentsData?.state_reason}
                author={issueCommentsData?.user.login}
                totalComments={issueCommentsData?.comments}
                createdTime={handleCreateTime(issueCommentsData?.created_at)}
              />
              {issueCommentsData?.assignees.length > 0 &&
                issueCommentsData?.labels.length > 0 && (
                  <AssignSection
                    assignees={issueCommentsData?.assignees}
                    labels={issueCommentsData?.labels}
                  />
                )}
            </div>
            <div className="mt-6 max-w-[1280px] md:flex md:w-full">
              <div className="w-full">
                <TimeLine />
                <Content newComment={true} />
              </div>
              <Sidebar
                newComment={true}
                getSideBarApi={getSideBarApi}
                listContent={listContent}
              />
            </div>
          </div>
        )}
      </IssueContext.Provider>
      <Footer />
    </>
  );
}
