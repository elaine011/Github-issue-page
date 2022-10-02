import { useState } from "react";

import { SelectContext } from "../../src/utils/SelectContext";
import LabelList from "../Pages/Labels/LabelList";

export default {
  title: "Label/LabelList",
  component: LabelList,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    backgroundColor: { control: "color" },
  },
  decorators: [
    (Story) => {
      const [selectedSort, setSelectedSort] = useState(false);
      const [createLabel, setCreateLabel] = useState(false);
      const [labels, setLabels] = useState(null);

      return (
        <SelectContext.Provider
          value={{
            sort: [selectedSort, setSelectedSort],
            create: [createLabel, setCreateLabel],
            labels: [labels, setLabels],
          }}
        >
          <Story />
        </SelectContext.Provider>
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
      transform: "translateY(50vh)",
    }}
  >
    <LabelList {...args} />
  </div>
);

export const List = Template.bind({});
List.args = {
  LabelTagColor: "D4C5F9",
  LableTagName: "bug",
  LabelDesc: "Further information is requested",
  defaultState: "2 open issues and pull requests",
};