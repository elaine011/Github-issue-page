import LabelTag from "../components/LabelTag";

export default {
  title: "Label/LabelList/LabelTag",
  component: LabelTag,
  parameters: {
    layout: "centered",
  },
};

const Template = (args) => <LabelTag {...args} />;

export const Default = Template.bind({});
Default.args = {
  backgroundColor: "D4C5F9",
  lightOrDark: () => {},
  inputTagName: "bug",
};
