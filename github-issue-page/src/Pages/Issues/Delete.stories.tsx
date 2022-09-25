import Delete from "./Delete";

export default {
  title: "Label/LabelList/Delete",
  component: Delete,
  parameters: {
    layout: "centered",
  },
  methods: {
    handleDelete: () => {
      alert(
        "Are you sure? Deleting a label will remove it from all issues and pull requests"
      );
    },
  },
};

const Template = (args) => <Delete {...args} />;

export const Default = Template.bind({});
Default.args = {};
