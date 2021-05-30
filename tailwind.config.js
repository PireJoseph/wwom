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
        lighter: '#3E6F8D',
        DEFAULT: '#38647F',
        darker: '#325A72',
      },
      secondary: {
        lighter: '#81F4E1',
        DEFAULT: '#68C6B6',
        darker: '#5EB2A4',
      },
      alert: {
        lighter: '#FFBA49',
        DEFAULT: '#E5A742',
        darker: '#CF973B',
      },
      danger: {
        lighter: '#DF6556',
        DEFAULT: '#C95B4E',
        darker: '#B55246',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
