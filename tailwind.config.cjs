/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    extend: {},
    screens:{
      'xs' : '330px',
      ...defaultTheme.screens,
    }
  },
  plugins: [
    require('tailwindcss-debug-screens'),
    require('@tailwindcss/line-clamp'),
    require('tw-elements/dist/plugin'),
  ],
}