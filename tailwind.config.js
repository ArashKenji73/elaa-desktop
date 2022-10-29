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
    },
    extend: {
      colors:{
        'elaa-violet': '#A993DB',
        'elaa-light-violet': '#F3F3FF'
      }
    },
  },
  plugins: [],
}
