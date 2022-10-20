import { useState } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import IssueHeader from "../Pages/Issues/IssueHeader";
import { store } from "../redux/store";
import { IssueContext } from "../utils/SelectContext";

export default {
  title: "Issue/IssueHeader",
  component: IssueHeader,
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
    <IssueHeader issuesLength={30} />
  </div>
);

export const Default = Template.bind({});
Default.issuesLength = {};
