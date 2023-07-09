/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "light-blue-hover": "#162549", //text
        "light-blue": "#162539",
        "light-button-green": "#14a27d", //hover button
        "light-button-green-hover": "#0e9272", // button
        "light-orange": "#db8414", // primary button
        "light-gray": "#e5e5e5", //secondary button
        "light-nude": "#e3ece3",
        "light-white": "#ffffff", //text
        "light-maroon": "#872c45",
        "light-yellow": "#fde047",
        "light-border-gray": "#d1d5db",
        "light-green": "#2f855a",
        "light-text-heading": "#002248",
        "light-text-paragraph": "#0d0505",
        "light-text-modal": "#9ca3af", //text in settings modal
        "light-background-gray": "#ffffff", // background
        "light-search-gray": "#50514c",
        "light-header-footer": "#db8414", //header footer
        "light-search-text-white": "#50514c",
        "light-input-gray": "#50514c",
        "light-input-hover-gray": "#872c45",
        "dark-orange-hover": "#0e9272", //hover button
        "dark-orange": "#14a27d", // primary button
        "dark-blue": "#162549", //background
        "dark-header-footer": "#162549", //header footer
        "dark-gray-heavy": "#0e1629",
        "dark-gray": "#1e293b",
        "dark-white": "#ffffff", //text
        "dark-red": "#dc2626",
        "dark-orange-heading": "#db8414", //text heading
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
