/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter'],
      },
      colors: {
        'white1': '#fff',
        'white': '#fcfefd',
        'off-white': '#b2bebd',
        'blue': '#004db1',
        'dark-pink':'#FF577F',
        'brown': '#561C24',
        'light-brown': '#6B240C',
        'orange': '#ff7849',
        'footer-color': '#000f26',
        'light-red':'#ed6462',
        'gold': '#b4a572',
        'light-orange':'#E7AB9A',
        'light-purple': '#D09CFA',
        'light-blue': '#B1AFFF',
        'green': '#11453b',
        'light-green': '#9DC08B',
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gray-light': '#AAAAAA',
        'red': '#5b0e0e',
        'grey-white':'#B8B5FF'
      },
    }
  },
  plugins: [],
}
