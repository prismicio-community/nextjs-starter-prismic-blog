const { fontFamily } = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./slices/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js",
    "./src/app/**/*.{ts,tsx}",
  ],
  theme: {
    container: { center: true, padding: "1rem" },
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
    },
    fontFamily: {
      serif: "'Libre Baskerville', sans-serif",
      secular: "'Secular One', sans-serif",
      montserrat: "Montserrat, sans-serif",
      hebrew: "Open Sans Hebrew, sans-serif",
      sans: ["var(--font-sans)", ...fontFamily.sans],
      athiti: "Athiti, sans-serif",
    },
    extend: {
      colors: {
        primary: "#d6b161",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities, theme }) {
      addUtilities({
        ".text-align-right": {
          "text-align": "right",
          direction: "rtl",
        },
        ".flex-center": {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
        ".my-container": {
          "@apply mx-auto md:max-w-screen-xl px-4 max-w-screen-sm": {},
        },
      });
    }),
  ],
};
