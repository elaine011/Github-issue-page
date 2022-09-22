import { useState } from "react";

import Delete from "./Delete";
import { SelectContext } from "../../utils/SelectContext";

export default {
  title: "Label/Delete",
  component: Delete,
  parameters: {
    layout: "centered",
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

const Template = (args) => <Delete {...args} />;

export const Default = Template.bind({});
Default.args = {};
