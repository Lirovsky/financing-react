/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        filter:
          "linear-gradient(rgba(48, 110, 232, .8), rgba(48, 110, 232, .9)), url('src/img/header2.jpg')",
      },
      fontFamily: {
        worksans: ['"Work Sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
