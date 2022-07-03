/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'varela': ['Varela Round', 'sans-serif'],
      },
      colors: {
        'yoona-red': '#ee4a46',
        'yoona-yellow': '#ffbf3f',
      }
    }
  },
  plugins: [],
}
