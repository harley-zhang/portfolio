/** @type {import("tailwindcss").Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        "grey-dark": "#0a0a0a",
        "grey-light": "#cbcbcb",
        "grey-underline": "#616161",
        "grey-present-bg": "#252525",
        "grey-reference": "#161616",
      },
      fontFamily: {
        "sf-light": ["SF Pro Display Light", "sans-serif"],
        "sf-regular": ["SF Pro Display Regular", "sans-serif"],
        "sf-medium": ["SF Pro Display Medium", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        ".no-scrollbar": {
          "-ms-overflow-style": "none", /* IE and Edge */
          "scrollbar-width": "none", /* Firefox */
        },
      });
    }),
  ],
};