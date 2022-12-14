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
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1140px',
        '2xl': '1496px',
      },
    },
    extend: {
      colors:{
        'elaa-violet': '#A993DB',
        'elaa-light-violet': '#F3F3FF',
        'elaa-mint': '#BAE0E3',
        'elaa-mint-dark': '#608E92',
        'elaa-khaki': '#DED1CA',
        'elaa-khaki-dark': '#9E887C'
      }
    },
  },
  plugins: [],
}
