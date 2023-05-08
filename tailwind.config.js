/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./src/index.html", "./src/scripts/**/*.js"],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      width: {
        34: "8.5rem",
      },
      height: {
        34: "8.5rem",
      },
    },
  },
  plugins: [],
};
