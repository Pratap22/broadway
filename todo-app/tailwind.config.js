module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'app': "#D98326",
        'app-50': '#F1ECE6',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
