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
        black: "#18181D",
        white: "#FFFFFF",
        red: "#Ef4444",
        green: "#10B981",
        button: "#",
        "hover-button": "#",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwindcss-animate")],
  important: true,
};
