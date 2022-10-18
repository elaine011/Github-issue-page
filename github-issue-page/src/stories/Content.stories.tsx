import { useState } from "react";
import { IssueContext } from "../utils/SelectContext";
import Content from "../Pages/NewIssue/Content";

export default {
  title: "NewIssue/Content",
  component: Content,
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

const Template = (args) => <Content {...args} />;

export const Default = Template.bind({});
Default.args = {};
