/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "light-blue-hover": "#162549", //hover button and text
        "light-blue": "#db8414", // primary button
        "light-gray": "#50514c", //secondary button
        "light-nude": "#e3ece3",
        "light-maroon": "#44687e",
        "light-border-gray": "#d1d5db",
        "light-text-heading": "#002248",
        "light-text-paragraph": "#0d0505",
        "light-text-modal": "#9ca3af", //text in settings modal
        "light-background-gray": "#ffffff", // background
        "light-search-gray": "#50514c",
        "light-header-footer": "#db8414", //header footer
        "light-search-text-white": "#50514c",
        "light-input-gray": "#50514c",
        "light-input-hover-gray": "#872c45",
        "dark-orange-hover": "#DB8E2A", //hover button
        "dark-orange": "#db8414", // primary button
        "dark-blue": "#162549", //background
        "dark-header-footer": "#162549", //header footer
        "dark-gray": "#9C9E95",
        "dark-orange-heading": "#db8414", //text heading
        "dark-white": "#ffffff", //text
        red: "#dc2626",
        primary: {
          DEFAULT: "#292D3E",
          dark: "#2f3447",
          light: "#eeeeef",
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
