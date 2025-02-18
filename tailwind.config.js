/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./frontend/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        sigmar: ["Sigmar", "cursive"],
        dancing: ["Dancing Script", "cursive"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};