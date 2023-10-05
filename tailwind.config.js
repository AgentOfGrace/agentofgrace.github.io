/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "lato": '"Lato", sans-serif',
        "raleway": '"Raleway", sans-serif',
        "roboto": '"Roboto", sans-serif',
      },
      animation: {
        "fadeLeft": 'fadeLeft 0.75s ease-out 0.25s 1 forwards',
        "fadeLeftDelay": 'fadeLeft 0.75s ease-out 1s 1 forwards'
      },
      colors: {
        "discord": '#5865F2'
      }
    },
  },
  plugins: [],
}

