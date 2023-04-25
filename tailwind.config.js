/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/core/**/*.{js,ts,jsx,tsx}",
    "./src/shared/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        "darker-white": "#F1F1F1",
        "custom-black": "#303030",
        "custom-darker-black": "#000000",
        red: "#FF5C5C",
        "darker-red": "#FF3D3D",
        green: "#6CFF72",
        yellow: "#FFF855",
        "custom-blue": "#0029F6",
        grey: "#D9D9D9",
        "light-grey": "#EDEDED",
        primary: "#666666",
      },
    },
  },
  variants: {
    extend: {
      visibility: ["group-hover"],
    },
  },
  plugins: [require("@tailwindcss/typography"), require("tailwindcss-animate")],
};
