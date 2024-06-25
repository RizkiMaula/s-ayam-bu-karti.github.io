/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}*'],
  theme: {
    extend: {
      colors: {
        prime: '#F5FF8D',
        secondary: '#50CB86',
        black: '#312F44',
      },
      fontFamily: {
        roboto: ['Roboto'],
      },
      spacing: {},
    },
  },
  plugins: [],
};
