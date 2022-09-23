import Delete from "./Delete";

export default {
  title: "Label/Delete",
  component: Delete,
  parameters: {
    layout: "centered",
  },
};

const Template = (args) => <Delete {...args} />;

export const Default = Template.bind({});
Default.args = {};
