/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        grey: "#0a0a0a",
        red: "#ff534d",
        "light-blue": "#e0ebff",
        "navy-blue": "#0f3e99",
      },
      backgroundImage: (theme) => ({
        "gradient-rainbow": "linear-gradient (81.66deg, #00b5ee 7.21%,#ff45a4 45.05%, #ffba00 78.07%)",
        "gradient-rainblue": "linear-gradient (90deg, #24cbff 14.53%, #fc59ff 69.36%, #ffbd0c 107.73%)",
      }),
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