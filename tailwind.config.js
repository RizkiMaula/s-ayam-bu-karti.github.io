/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}*'],
  theme: {
    extend: {
      colors: {
        ijoterang: '#A5DD9B',
        ijopudar: '#C5EBAA',
        kuning: '#F6F193',
        pink: '#F2C18D',
      },
      fontFamily: {
        roboto: ['Roboto'],
      },
      spacing: {},
    },
  },
  plugins: [],
};
