/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#9f4298",
        "secondary-color": "#c2b4d6",
        "navbar-bg-color": "#C4BA3B",
        "light-mode-bg-color": "#d1afd3",
        "dark-mode-bg-color": "#9f4298",
      },
    },
  },
  plugins: [],
};
