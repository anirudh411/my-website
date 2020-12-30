const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    gray: colors.coolGray,
    blue: colors.lightBlue,
    red: colors.rose,
    pink: colors.fuchsia,
    purple: colors.purple,
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
