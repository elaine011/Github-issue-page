import RepoHeader from "./RepoHeader";

export default {
  title: "Pages/RepoHeader",
  component: RepoHeader,
  parameters: {
    layout: "fullscreen",
  },
};

const Template = (args) => <RepoHeader {...args} />;

export const Default = Template.bind({});
Default.args = {};
