import Footer from "./Footer";

export default {
  title: "Pages/Footer",
  component: Footer,
  parameters: {
    layout: "fullscreen",
  },
};

const Template = (args) => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = {};
