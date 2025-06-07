/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#1A365D',
        gold: '#FFC65C',
        cream: '#FFF8E8'
      },
      fontFamily: {
        cursive: ['Pacifico', 'cursive', 'serif'],
        sans: ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
};