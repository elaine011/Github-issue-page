import { useState } from "react";

import { SelectContext } from "../../utils/SelectContext";
import LabelList from "./LabelList";
import LabelTag from "../../components/LabelTag.stories";

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

const Template = (args) => <LabelList {...args} />;

export const Default = Template.bind({});
Default.args = {
  labelTag: LabelTag,
  defaultLabelTag: "",
  defaultDesc: "",
  defaultState: "",
};
