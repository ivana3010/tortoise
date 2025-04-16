/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':'#784313',
        'lightblue':'#e0eaf7'
      },
      gridTemplateColumns:{
        'auto': 'repeat(auto-fill, minmax(200px,1fr))'
      },
      fontFamily: {
        bungee: ['Bungee Shade', 'cursive'],
        courgette: ['Courgette', 'sans-serif']
    },
    
    },
  },
  plugins: [],
}