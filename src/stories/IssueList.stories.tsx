import { useState } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import IssueList from "../Pages/Issues/IssueList";
import { store } from "../redux/store";
import { IssueContext } from "../utils/SelectContext";

export default {
  title: "Issue/IssueList",
  component: IssueList,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => {
      const [issueData, setIssueData] = useState(null);
      const [labelQuery, setLabelQuery] = useState([]);
      const [searchQuery, setSearchQuery] = useState(["is:issue is:open"]);
      const [inputValue, setInputValue] = useState("");
      const [query, setQuery] = useState({
        owner: "elaine011",
        repo: "test-issue",
        perPage: 10,
        page: 1,
      });
      const [userData, setUserData] = useState({
        userName: "elaine011",
        repo: "test-issue",
        visibility: "public",
        token: "",
      });

      return (
        <BrowserRouter>
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
              <Story />
            </Provider>
          </IssueContext.Provider>
        </BrowserRouter>
      );
    },
  ],
};

const Template = (args) => (
  <div
    style={{
      position: "absolute",
      left: "0",
      right: "0",
      transform: "translateY(45vh)",
    }}
  >
    <IssueList {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  title: "Animation",
  labels: [
    {
      color: "bfd4f2",
      default: "false",
      description: "new label",
      id: 4577502895,
      name: "new",
      node_id: "LA_kwDOIA0rNc8AAAABENcmrw",
      url: "https://api.github.com/repos/elaine011/test-issue/labels/new",
    },
  ],
  issueNumber: "34",
  createdTime: "1 days ago",
  author: "elaine011",
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
      subscriptions_url: "https://api.github.com/users/elaine011/subscriptions",
      type: "User",
      url: "https://api.github.com/users/elaine011",
    },
    {
      avatar_url: "https://avatars.githubusercontent.com/u/57607232?v=4",
      events_url: "https://api.github.com/users/chloe7303/events{/privacy}",
      followers_url: "https://api.github.com/users/chloe7303/followers",
      following_url:
        "https://api.github.com/users/chloe7303/following{/other_user}",
      gists_url: "https://api.github.com/users/chloe7303/gists{/gist_id}",
      gravatar_id: "",
      html_url: "https://github.com/chloe7303",
      id: 57607232,
      login: "chloe7303",
      node_id: "MDQ6VXNlcjU3NjA3MjMy",
      organizations_url: "https://api.github.com/users/chloe7303/orgs",
      received_events_url:
        "https://api.github.com/users/chloe7303/received_events",
      repos_url: "https://api.github.com/users/chloe7303/repos",
      site_admin: false,
      starred_url:
        "https://api.github.com/users/chloe7303/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/chloe7303/subscriptions",
      type: "User",
      url: "https://api.github.com/users/chloe7303",
    },
  ],
  commentNumber: 3,
  state: "open",
  stateReason: "null",
};
