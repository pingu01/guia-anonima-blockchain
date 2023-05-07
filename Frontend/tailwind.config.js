/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    extend: {
      colors: {
        navbar: '#222222',
        background: '#00000'
      },

      fontFamily: {
        'Roboto': ['Roboto', 'sans-serif']
      },

      gridTemplateRows:{
        7: 'repeat(7, minmax(0, 1fr))'
      }
    },
  },
  plugins: [],
}
