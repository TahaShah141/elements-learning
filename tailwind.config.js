/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Poppins"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'foreground': "#353535"
      },
      screens: {
        'xs': "350px"
      }
    },
  },
  plugins: [],
}

