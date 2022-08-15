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
      keyframes: {
        wiggle: {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(150)' },
        }
      },
      animation: {
        wiggle: 'wiggle 1s linear forwards 1',
      },
      scale: {
        '100': '100',
      }
    },
  },
  plugins: [],
}
