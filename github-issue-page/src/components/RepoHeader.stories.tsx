import RepoHeader from "./RepoHeader";

export default {
  title: "Components/RepoHeader",
  component: RepoHeader,
  parameters: {
    layout: "fullscreen",
  },
};

const Template = (args) => <RepoHeader {...args} />;

export const Default = Template.bind({});
Default.args = {};
