/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "light-blue-hover": "#162549", //hover button
        "light-blue": "#db8414", // primary button
        "light-gray": "#50514c", //secondary button
        "light-nude": "#e3ece3",
        "light-maroon": "#872c45",
        "light-text-heading": "#002248",
        "light-text-paragraph": "#0d0505",
        "dark-orange-hover": "#DB8E2A", //hover button
        "dark-orange": "#db8414", // primary button
        "dark-blue": "#162549", //background
        "dark-gray": "#9C9E95",
        primary: {
          DEFAULT: "#292D3E",
          dark: "#2f3447",
          light: "#ffffff",
        },
        accent: {
          DEFAULT: "#373d53",
          hover: "#474e6c",
          dark: "#454c69",
          light: "#eeeeef",
        },
      },
      transitionDuration: {
        DEFAULT: "150ms",
        250: "250ms",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwindcss-animate")],
  important: true,
};
