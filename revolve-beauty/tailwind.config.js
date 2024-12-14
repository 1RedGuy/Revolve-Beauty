module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'hero_lg': '1245px',
      },
      colors: {
        studio_pink: '#FD83D0',
        dark_gray: '#FFFFFF',
      },
    },
  },
  plugins: [
  ],
};
