/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./docs/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'main-bg': '#020103',
        'primary': "#FFB600",
        'dark-yellow': "#1B1700",
      },
      fontFamily: {
        'sans': ['"Inter"', ...defaultTheme.fontFamily.sans],
        'name': ['"Lexend Peta"'],
      },
      backgroundImage: {
        'hero': "url('./img/bg-hero.jpg')",
      },
      letterSpacing: {
        widest: '.25em',
      }
    },
  },
  plugins: [
		require('tailwindcss-animated'),
    require('tailwindcss-intersect')
	],
}

