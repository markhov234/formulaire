const colors = require('tailwindcss/colors');
module.exports = {
  purge: [{
    code: 'layers',
    content: [
      './public/**/*.html', './src/**/*vue'
    ],
  }],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      amber: colors.amber,
      gray: colors.trueGray,
      gold: {
        light: '#ddbf5f',
        base: '#d4af37',
        dark: '#aa8c2c'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
