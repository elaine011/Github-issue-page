import SearchBar from "./SearchBar";

export default {
  title: "Pages/SearchBar",
  component: SearchBar,
  parameters: {
    layout: "centered",
  },
};

const Template = (args) => <SearchBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  inputValue: "",
};
