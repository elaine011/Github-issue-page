import { useState } from "react";
import Sidebar from "../Pages/NewIssue/Sidebar";
import api from "../utils/api";
import { IssueContext } from "../utils/SelectContext";

export default {
  title: "NewIssue/Sidebar",
  component: Sidebar,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => {
      const [inputValue, setInputValue] = useState({});
      const [issueCommentsData, setIssueCommentsData] = useState(null);
      const handleSubmitBtn = () => {
        if (inputValue["title"] && inputValue["title"].length > 0) {
          return true;
        } else return false;
      };

      const [userData, setUserData] = useState({
        userName: "elaine011",
        repo: "test-issue",
        visibility: "public",
        token: "",
      });
      const [editData, setEditData] = useState({
        owner: userData.userName,
        repo: userData.repo,
        issue_number: 51,
        token: userData.token,
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
            inputValue: [inputValue, setInputValue],
            handleSubmitBtn,
            updateIssue,
            userData: [userData, setUserData],
            editData: [editData, setEditData],
          }}
        >
          <Story />
        </IssueContext.Provider>
      );
    },
  ],
};

const Template = (args) => <Sidebar {...args} />;

export const Default = Template.bind({});
Default.args = {
  listContent: {
    assignees: [
      {
        avatar_url: "https://avatars.githubusercontent.com/u/70333832?v=4",
        events_url: "https://api.github.com/users/elaine011/events{/privacy}",
        followers_url: "https://api.github.com/users/elaine011/followers",
        following_url:
          "https://api.github.com/users/elaine011/following{/other_user}",
        gists_url: "https://api.github.com/users/elaine011/gists{/gist_id}",
        gravatar_id: "",
        html_url: "https://github.com/elaine011",
        id: 70333832,
        login: "elaine011",
        node_id: "MDQ6VXNlcjcwMzMzODMy",
        organizations_url: "https://api.github.com/users/elaine011/orgs",
        received_events_url:
          "https://api.github.com/users/elaine011/received_events",
        repos_url: "https://api.github.com/users/elaine011/repos",
        site_admin: false,
        starred_url:
          "https://api.github.com/users/elaine011/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/elaine011/subscriptions",
        type: "User",
        url: "https://api.github.com/users/elaine011",
      },
    ],
    labels: [],
  },
  getSideBarApi: () => {},
};
