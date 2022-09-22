import LabelTag from "./LabelTag";

export default {
  title: "Label/LabelTag",
  component: LabelTag,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <LabelTag {...args} />;

export const Default = Template.bind({});
Default.args = {
  tagName: "bug",
  backgroundColor: "rgb(215, 58, 74)",
};
