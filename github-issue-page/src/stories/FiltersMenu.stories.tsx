import LabelHeader from "../Pages/Issues/IssueHeader";
import { useState } from "react";
import { IssueContext } from "../utils/SelectContext";
import { Provider } from "react-redux";
import { store } from "../redux/store";

export default {
  title: "Issue/LabelHeader",
  component: LabelHeader,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => {
      const [issueData, setIssueData] = useState(null);
      const [labelQuery, setLabelQuery] = useState([]);
      const [searchQuery, setSearchQuery] = useState(["is:issue is:open"]);
      const [query, setQuery] = useState({
        owner: "elaine011",
        repo: "test-issue",
        perPage: 10,
        page: 1,
      });

      return (
        <IssueContext.Provider
          value={{
            query: [query, setQuery],
            issues: [issueData, setIssueData],
            label: [labelQuery, setLabelQuery],
            searchQuery: [searchQuery, setSearchQuery],
          }}
        >
          <Provider store={store}>
            <Story />
          </Provider>
        </IssueContext.Provider>
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
    <LabelHeader issuesLength={30} />
  </div>
);

export const Default = Template.bind({});
Default.issuesLength = {};
