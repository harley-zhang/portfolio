/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        grey: "#0a0a0a",
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
  plugins: [],
};