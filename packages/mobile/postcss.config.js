const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const postcssHalfPx = require('./postcss-half-px');

module.exports = {
  plugins: [
    postcssHalfPx,
    tailwindcss,
    autoprefixer,
  ],
};