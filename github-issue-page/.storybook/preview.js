export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      backgroundColor: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
