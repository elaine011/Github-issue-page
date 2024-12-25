import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import RepoHeader from "../components/RepoHeader";
import { IssueContext } from "../utils/SelectContext";

export default {
  title: "Components/RepoHeader",
  component: RepoHeader,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => {
      const [userData, setUserData] = useState({
        userName: "elaine011",
        repo: "test-issue",
        visibility: "public",
        token: "",
      });
      return (
        <BrowserRouter>
          <IssueContext.Provider value={{ userData: [userData, setUserData] }}>
            <Story />
          </IssueContext.Provider>
        </BrowserRouter>
      );
    },
  ],
};

const Template = (args) => <RepoHeader {...args} />;

export const Default = Template.bind({});
Default.args = {};
