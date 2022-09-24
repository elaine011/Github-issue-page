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

const Template = (args) => <LabelList {...args} />;

export const Default = Template.bind({});
Default.args = {
  labelTag: LabelTag,
  defaultLabelTag: "bug",
  defaultDesc: "Something isn't working",
  defaultState: "2 open issues and pull requests",
};
