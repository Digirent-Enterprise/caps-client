/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Plugin} */

const plugin = require("tailwindcss/plugin");
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
        "light-button-blue": "#213363", //hover button
        "light-primary-button": "#213363", //hover button
        "light-primary-icon": "#213363", //hover button
        "light-button-blue-hover": "#2069ad", // button
        "light-user-message": "#2069ad", // button
        "light-chatbot-message": "#545b77", // button
        "light-secondary-button": "#9ca3af",
        "light-primary-border": "#9ca3af",
        "light-gray": "#f2f2f2",
        "light-orange": "#db8414",

        "light-nude": "#e3ece3",
        "light-white": "#ffffff", //text
        "light-maroon": "#872c45",
        "light-yellow": "#fde047",
        "light-border-gray": "#d1d5db",
        "light-bg-blue": "#213363",
        "light-text-heading": "#213363",
        "light-text": "#213363",
        "light-text-paragraph": "#0d0505",
        "light-text-modal": "#9ca3af", //text in settings modal
        "light-background-gray": "#eee", // background
        "light-search-gray": "#50514c",
        "light-header-footer": "#db8414", //header footer
        "light-search-text-white": "#50514c",
        "light-input-gray": "#50514c",
        "light-input-hover-gray": "#872c45",
        "dark-green-hover": "#0e9272", //hover button
        "dark-green": "#14a27d", // primary button
        "dark-bg-primary": "#202123",
        "dark-blue": "#162549", //background
        "dark-header-footer": "#162549", //header footer
        "dark-gray-heavy": "#0e1629",
        "dark-gray": "#1e293b",
        "dark-white": "#ffffff", //text
        "dark-red": "#dc2626",
        "dark-green-heading": "#db8414", //text heading
        red: "#dc2626",
        primary: {
          DEFAULT: "#b5c2c9",
          dark: "#2f3447",
          light: "#b5c2c9",
        },
        accent: {
          DEFAULT: "#b5c2c9",
          hover: "#474e6c",
          dark: "#454c69",
          light: "#b5c2c9",
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
  plugins: [
    require("tailwindcss-animate"),
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".content-auto": {
          "content-visibility": "auto",
        },
        ".content-hidden": {
          "content-visibility": "hidden",
        },
        ".content-visible": {
          "content-visibility": "visible",
        },
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
      });
    }),
  ],
  important: true,
};
