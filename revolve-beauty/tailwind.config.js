module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'hero_lg': '1245px',
      },
      colors: {
        studio_pink: '#E2C6BF',
        dark_gray: '#FFFFFF',
      },
    },
  },
  plugins: [],
};
