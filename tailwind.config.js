const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: colors.white,
      gray: colors.gray,
      primary: {
        lighter: 'hsl(207, 73%, 52%)',
        DEFAULT: 'hsl(207, 73%, 57%)',
        darker: 'hsl(207, 73%, 44%)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
