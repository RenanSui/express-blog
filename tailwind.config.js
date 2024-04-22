/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/views/**/*.ejs'],
  theme: {
    extend: {
      fontFamily: {
        mplus2: ['"M PLUS 2"', 'sans-serif'],
      },
    },
  },
  plugins: [
    {
      tailwindcss: {},
      autoprefixer: {},
    },
  ],
}
