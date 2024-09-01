/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layouts/**/*.html',
    './content/**/*.md',
    './themes/**/*.{html,js}', // If you use themes
    './partials/**/*.html',
    './static/**/*.html',
    './src/**/*.{html,js}', // If you have a src directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}