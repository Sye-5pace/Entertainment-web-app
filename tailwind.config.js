/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,ts,js}",
  ],
  theme: {
    fontFamily: {
      outfit: ['Outfit','sans-serf']
    },
    colors:{
      'vulcan': '#10141e',
      'mirage':'#161d2f',
      'waikawagray': '#5A698F',
      'sunsetorange': '#fc4747',
      'white':'#fff'
    },
    extend: {},
  },
  plugins: [
    plugin(function({addVariant}){
      addVariant('children','&>*')
    })
  ],
}