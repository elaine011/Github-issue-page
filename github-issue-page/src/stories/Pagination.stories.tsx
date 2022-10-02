import { useState } from "react";
import Pagination from "../components/Pagination";
import { IssueContext } from "../utils/SelectContext";

export default {
  title: "Issue/Pagination",
  component: Pagination,
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
          <Story />
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
    <Pagination {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {};
