/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        darkgrey: "#0a0a0a",
        lightgrey: "#cbcbcb",
      },
      fontFamily: {
        helvetica: ["HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", "sans-serif"],
      },
      letterSpacing: {
        wide: '0.03em',
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
      lg: "1400px",
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.no-scrollbar::-webkit-scrollbar': {
          display: 'none',
        },
        '.no-scrollbar': {
          '-ms-overflow-style': 'none', /* IE and Edge */
          'scrollbar-width': 'none', /* Firefox */
        },
      });
    }),
  ],
};