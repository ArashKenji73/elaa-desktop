/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    container: {
      // you can configure the container to be centered
      center: true,
      screens: {
        sm: '540px',
        md: '720px',
        lg: '960px',
        xl: '1140px',
        '2xl': '1320px',
      },
    },
    extend: {
      colors:{
        'elaa-violet': '#A993DB',
        'elaa-light-violet': '#F3F3FF',
        'elaa-mint': '#BAE0E3',
        'elaa-mint-dark': '#608E92',
        'elaa-khaki': '#DED1CA'
      }
    },
  },
  plugins: [],
}
