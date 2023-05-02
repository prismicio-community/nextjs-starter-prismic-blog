module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./slices/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    },
    fontFamily: {
      sans: "Lato, sans-serif",
      serif: "'Libre Baskerville', sans-serif",
    },
    extend: {},
  },
  plugins: [],
};
