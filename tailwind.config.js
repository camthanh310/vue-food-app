/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#8a2b06',
        'organe-lighter': '#ad5502',
        'organe-light': '#b94517',
        'organe-dark': '#92320c',
        'organe-darkest': '#641e03',
        'organe-darker': '#4d1601',
        'organe-super-dakr': '#5a1a01',
        'dark-gray': '#3f3f3f',
        'light-gray': '#383838',
        'lighter-gray': '#363636',
        'dark-primary': '#2c0d00'
      },
      boxShadow: {
        '3xl': '0 2px 8px rgba(0, 0, 0, 0.25)',
        '4xl': '0 1px 18px 10px rgba(0, 0, 0, 0.25)'
      },
      spacing: {
        '5.4': '1.35rem',
        100: '25rem'
      },
      fontFamily: {
        'sans': ['Noto Sans JP', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'base', // only generate global styles
      strategy: 'class', // only generate classes
    })
  ],
}
