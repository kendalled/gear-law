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
        'warm-gray': colors.warmGray,
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
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio')
  ]
}
