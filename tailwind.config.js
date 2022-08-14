/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    colors: {
      'orange':'#98BC32',
      'orange-light':'#54ED5A',
      'white':'#ffffff',
    },
    extend: {
      scale: {
        '100': '100',
      }
    },
  },
  plugins: [],
}
