import { useState } from "react";
import { Provider } from "react-redux";
import LabelsMenu from "../Pages/Issues/LabelsMenu";
import { store } from "../redux/store";
import { IssueContext } from "../utils/SelectContext";

export default {
  title: "Issue/LabelsMenu",
  component: LabelsMenu,
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
        token: process.env.REACT_APP_PASSWORD,
      });
      return (
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
      );
    },
  ],
};

const Template = (args) => (
  <div
    style={{
      position: "relative",
      top: "0",
      left: "10%",
      right: "0",
      width: "50%",
    }}
  >
    <LabelsMenu {...args}/>
  </div>
);

export const Loading = Template.bind({});
Loading.args = {
  isDisplayLabels: true,
};
