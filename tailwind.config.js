const { fontFamily } = require("tailwindcss/defaultTheme");

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
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      // "2xl": "1360px",
    },
    fontFamily: {
      // sans: "Lato, sans-serif",
      serif: "'Libre Baskerville', sans-serif",
      montserrat: "Montserrat, sans-serif",
      hebrew: "Open Sans Hebrew, sans-serif",
      sans: ["var(--font-sans)", ...fontFamily.sans],
    },
    extend: {
      colors: {
        primary: "#d6b161",
      },
    },
  },
  plugins: [],
};
