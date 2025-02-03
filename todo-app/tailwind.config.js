module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        app: "#D98326",
        "app-50": "#F1ECE6",
        "light-bg": "#F3F3F3",
        "app-blue": "#76B7CD",
        "app-100": "#969696",
        "app-fade": "#323232",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
