/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#CB893D',
        primary: '#FEFAE0',
        secondary: '#283618'
      },
      fontFamily: {
        "knewave": ['Knewave', 'sans-serif'],
        "yellowTail": ['Yellowtail', 'sans-serif'],
        "roboto": ['Roboto', 'sans-serif']
    }
    },
  },
  plugins: [],
}

