import { useState } from "react";
import Sidebar from "../Pages/NewIssue/Sidebar";
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
      const handleSubmitBtn = () => {
        if (inputValue["title"] && inputValue["title"].length > 0) {
          return true;
        } else return false;
      };
      return (
        <IssueContext.Provider
          value={{
            inputValue: [inputValue, setInputValue],
            handleSubmitBtn,
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
Default.args = {};
