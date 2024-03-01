/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'pokemon': ["PokemonFR"],
        'playstation': ["Playstation"]
      },
      animation:{
        'jump': 'bounce 0.5s linear 1.5'
      }
    },
  },
  plugins: [],
}