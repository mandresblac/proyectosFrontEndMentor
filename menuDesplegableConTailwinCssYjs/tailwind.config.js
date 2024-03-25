/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./components/**/*.{html,js}",
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
        "bg-proyect": "#EAEBEF",
        "hover-elements": "#F6F8FA",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
