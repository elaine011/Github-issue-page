import { useState } from "react";

import IssueTitle from "../Pages/IssuePage/IssueTitle";
import api from "../utils/api";
import { IssueContext } from "../utils/SelectContext";

export default {
  title: "IssuePage/IssueTitle",
  component: IssueTitle,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => {
      const [issueCommentsData, setIssueCommentsData] = useState(null);
      const [displayStickHeader, setDisplayStickyHeader] = useState(false);
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
      return (
        <IssueContext.Provider
          value={{
            displayStickHeader: [displayStickHeader, setDisplayStickyHeader],
            editData: [editData, setEditData],
            updateIssue,
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
    <IssueTitle {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  title: "new issue",
  issueNumber: 38,
  state: "open",
  stateReason: null,
  author: "elaine011",
  totalComments: 3,
  createdTime: "3 days",
};
