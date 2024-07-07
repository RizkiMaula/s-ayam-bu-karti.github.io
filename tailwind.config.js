/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}*'],
  theme: {
    extend: {
      colors: {
        primary: '#114232',
        secondary: '#87A922',
        accent1: '#F6F193',
        accent2: '#F7F6BB',
      },
      fontFamily: {
        roboto: ['Roboto'],
      },
      spacing: {},
    },
  },
  plugins: [],
};
