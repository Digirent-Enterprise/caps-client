/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: "#E18204",
        "darker-blue": "#44687E",
        grey: "#475D78",
        yellow: "#F5CE48",
        blue: "#002248",
        "light-blue": "#0072C6",
        white: "#FFFFFF",
        red: "#Ef4444",
        green: "#10B981",
        button: "#",
        "main-blue": "#169cd6",
        "main-green": "#10b981",
        "hover-button": "#",
        primary: {
          DEFAULT: "#292D3E",
          dark: "#2f3447",
        },
        accent: {
          DEFAULT: "#373d53",
          hover: "#474e6c",
          dark: "#454c69",
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
