/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ["Poppins", "Arial", "sans-serif"],
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
      colors: {
        primary: "#FFC91E",
        primaryLight: "#F5E090",
        white: "#FFFFFF",
        black: "#000000",
      },
    },
  },
  plugins: [],
}

