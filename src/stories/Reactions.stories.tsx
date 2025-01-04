import { useState } from "react";

import Reactions from "../Pages/IssuePage/Reactions";
import api from "../utils/api";
import { IssueContext } from "../utils/SelectContext";

export default {
  title: "IssuePage/Reactions",
  component: Reactions,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => {
      const [timelineData, setTimelineData] = useState(null);
      const [reactionsData, setReactionsData] = useState([]);
      const [editData, setEditData] = useState({
        owner: "elaine011",
        repo: "test-issue",
        issue_number: 38,
      });

      async function createListCommentsReactions() {
        await api.createListCommentsReactions(editData);
        async function getTimeline() {
          const data = await api.getTimeline(editData);
          setTimelineData(data);
        }
        getTimeline();
      }

      async function createissueCommentReactions() {
        await api.createissueCommentReactions(editData);
        async function getListCommentsReactions() {
          const data = await api.getListCommentsReactions(editData);
          setReactionsData(data);
        }
        getListCommentsReactions();
      }
      const [userData, setUserData] = useState({
        userName: "elaine011",
        repo: "test-issue",
        visibility: "public",
        token: "",
      });
      return (
        <IssueContext.Provider
          value={{
            editData: [editData, setEditData],
            reactionsData: [reactionsData, setReactionsData],
            createListCommentsReactions,
            createissueCommentReactions,
            userData: [userData, setUserData],
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
    <Reactions {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  reactions: {
    "+1": 1,
    "-1": 1,
    confused: 1,
    eyes: 1,
    heart: 1,
    hooray: 1,
    laugh: 2,
    rocket: 1,
    total_count: 4,
    url: "https://api.github.com/repos/elaine011/test-issue/issues/38",
  },
  commentId: 1398735045,
  header: false,
};
