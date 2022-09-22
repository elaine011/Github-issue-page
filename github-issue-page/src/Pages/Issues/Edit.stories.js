import { useState } from "react";

import Edit from "./Edit";
import { SelectContext } from "../../SelectContext";

export default {
  title: "Label/Edit",
  component: Edit,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => {
      const [selectedSort, setSelectedSort] = useState(false);
      const [selectedEditBtn, setSelectedEditBtn] = useState(false);
      return (
        <SelectContext.Provider
          value={{
            sort: [selectedSort, setSelectedSort],
            edit: [selectedEditBtn, setSelectedEditBtn],
          }}
        >
          <Story />
        </SelectContext.Provider>
      );
    },
  ],
};

const Template = (args) => <Edit {...args} />;

export const Default = Template.bind({});
Default.args = {};
