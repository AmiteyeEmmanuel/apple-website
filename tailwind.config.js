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
        'brown': '#561C24',
        'light-brown': '#6B240C',
        'orange': '#ff7849',
        gray: {
          DEFAULT: "#86868b",
          100: "#94928d",
          200: "#afafaf",
          300: "#42424570",
        },
        zinc: "#101010",
      },
    }
  },
  plugins: [],
}
