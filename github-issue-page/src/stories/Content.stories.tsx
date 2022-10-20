import { useState } from "react";
import Content from "../Pages/NewIssue/Content";
import { IssueContext } from "../utils/SelectContext";

export default {
  title: "NewIssue/Content",
  component: Content,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => {
      const [inputValue, setInputValue] = useState({});
      const [issueCommentsData, setIssueCommentsData] = useState(null);
      const [userData, setUserData] = useState({
        userName: "elaine011",
        repo: "test-issue",
        visibility: "public",
        token: process.env.REACT_APP_PASSWORD,
      });
      const [editData, setEditData] = useState({
        owner: userData.userName,
        repo: userData.repo,
        issue_number: 51,
        token: userData.token,
      });
      const handleSubmitBtn = () => {
        if (inputValue["body"] && inputValue["body"].length > 0) {
          return true;
        } else return false;
      };
      return (
        <IssueContext.Provider
          value={{
            inputValue: [inputValue, setInputValue],
            editData: [editData, setEditData],
            issueCommentsData: [issueCommentsData, setIssueCommentsData],
            handleSubmitBtn,
          }}
        >
          <Story />
        </IssueContext.Provider>
      );
    },
  ],
};

const Template = (args) => <Content {...args} />;

export const Default = Template.bind({});
Default.args = { newComment: true };
