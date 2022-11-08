module.exports = {
  content: [
    "./content/**/*.md",
    "./content/**/*.html",
    "./layouts/**/*.html",
    "./assets/**/*.js",
    "./themes/digitalgarden/content/**/*.md",
    "./themes/digitalgarden/content/**/*.html",
    "./themes/digitalgarden/layouts/**/*.html",
    "./themes/digitalgarden/assets/**/*.js",
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/line-clamp')],
}
