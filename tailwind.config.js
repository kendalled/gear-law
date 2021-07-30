const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'light-blue': colors.lightBlue,
        teal: colors.teal,
        cyan: colors.cyan,
        rose: colors.rose
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: 'class',
    }),
    require('@tailwindcss/aspect-ratio')
  ]
}
