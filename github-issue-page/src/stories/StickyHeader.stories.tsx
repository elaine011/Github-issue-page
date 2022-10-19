import { useState } from "react";

import StickyHeader from "../Pages/IssuePage/StickyHeader";
import { IssueContext } from "../utils/SelectContext";

export default {
  title: "IssuePage/StickyHeader",
  component: StickyHeader,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => {
      const [displayStickHeader, setDisplayStickyHeader] = useState(true);
      return (
        <IssueContext.Provider
          value={{
            displayStickHeader: [displayStickHeader, setDisplayStickyHeader],
          }}
        >
          <Story />
        </IssueContext.Provider>
      );
    },
  ],
};

const Template = (args) => (
  <div className="mx-4 mt-10">
    <StickyHeader {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  title: "new issue",
  issueNumber: 38,
  state: "open",
  stateReason: null,
  author: "elaine011",
  totalComments: 3,
  createdTime: "3 days",
};
