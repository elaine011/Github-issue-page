import { useState } from "react";

import { SelectContext } from "../utils/SelectContext";
import SortList from "./SortList";

export default {
  title: "Label/SortList",
  component: SortList,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    backgroundColor: { control: "color" },
  },
  decorators: [
    (Story) => {
      const [selectedSort, setSelectedSort] = useState(false);
      const [selectedEditBtn, setSelectedEditBtn] = useState(false);
      const [createLabel, setCreateLabel] = useState(false);

      return (
        <SelectContext.Provider
          value={{
            sort: [selectedSort, setSelectedSort],
            edit: [selectedEditBtn, setSelectedEditBtn],
            create: [createLabel, setCreateLabel],
          }}
        >
          <Story />
        </SelectContext.Provider>
      );
    },
  ],
};

const Template = (args) => <SortList {...args} />;

export const Default = Template.bind({});
Default.args = {};
