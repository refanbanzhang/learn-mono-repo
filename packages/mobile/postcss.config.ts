import type { Config } from 'postcss-load-config';

const config: Config = {
  plugins: [
    require('tailwindcss')('./tailwind.config.ts'),
    require('autoprefixer'),
    require('./postcss-half-px'),
  ],
};

module.exports = config;