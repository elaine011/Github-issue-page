import { useState } from "react";

import { SelectContext } from "../utils/SelectContext";
import SortList from "../components/SortList";

export default {
  title: "Components/SortList",
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

const Template = (args) => <SortList {...args} />;

export const Default = Template.bind({});
Default.args = {};
