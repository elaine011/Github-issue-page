/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-text": "#24292f",
        "primary-bg": "#f6f8fa",
        "btn-primary-bg": "#2da44e",
        "primary-border": "#d0d7de",
        "secondary-border": "rgba(27,31,36,0.15)",
        "counter-border": "rgba(0,0,0,0)",
        "neutral-muted": "rgba(175,184,193,0.2)",
        "fg-muted": "#57606a",
        shadow:
          "0 1px 0 rgba(27,31,36,0.04), inset 0 1px 0rgba(255,255,255,0.25)",
        "input-shadow": "inset 0 1px 0 rgb(208 215 222 / 20%)",
      },
      boxShadow: {
        innerblue: "inset 0 0 0 1px #0969da",
      },
      fontSize: {
        sm: ["14px", "20px"],
        base: ["16px", "24px"],
        lg: ["20px", "28px"],
        xl: ["24px", "32px"],
      },
      lineHeight: {
        "18px": "18px",
      },
      spacing: {
        "3px": "3px",
        "5px": "5px",
        "9px": "9px",
        "16px": "16px",
      },
      content: {
        str: '""',
      },
      screens: {
        sm: "544px",
        md: "768px",
        lg: "1012px",
        xl: "1280px",
      },
    },
  },
};
