import { useState } from "react";

import { IssueContext } from "../utils/SelectContext";
import Comment from "../Pages/IssuePage/Comment";
import api from "../utils/api";

export default {
  title: "IssuePage/Comment",
  component: Comment,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => {
      const [issueCommentsData, setIssueCommentsData] = useState(null);
      const [timelineData, setTimelineData] = useState(null);
      const [reactionsData, setReactionsData] = useState([]);
      const [editData, setEditData] = useState({
        owner: "elaine011",
        repo: "test-issue",
        issue_number: 38,
      });
      async function updateIssue() {
        await api.updateIssue(editData);
        async function getListComment() {
          const data = await api.getListComments(editData);
          setIssueCommentsData(data);
        }
        getListComment();
      }
      async function deleteComment() {
        await api.deleteComment(editData);
        async function getTimeline() {
          const data = await api.getTimeline(editData);
          setTimelineData(data);
        }
        getTimeline();
      }
      return (
        <IssueContext.Provider
          value={{
            editData: [editData, setEditData],
            updateIssue,
            deleteComment,
            reactionsData: [reactionsData, setReactionsData],
          }}
        >
          <Story />
        </IssueContext.Provider>
      );
    },
  ],
};

const Template = (args) => (
  <div className="mx-4 mt-10">
    <Comment {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  author: "elaine011",
  authorComment: false,
  actor: "elaine011",
  body: "new comment",
  createdTime: "3 days",
  owner: "OWNER",
  actorImg: "https://avatars.githubusercontent.com/u/70333832?v=4",
  reactions: {
    "+1": 1,
    "-1": 0,
    confused: 1,
    eyes: 0,
    heart: 1,
    hooray: 0,
    laugh: 1,
    rocket: 0,
    total_count: 4,
    url: "https://api.github.com/repos/elaine011/test-issue/issues/38",
  },
  commentId: 1398735045,
  header: true,
};
