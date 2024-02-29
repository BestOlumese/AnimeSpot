/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'primary': '#252526',
        'black': '#000',
        'white': '#fff',
      },
    },
    fontFamily: {
      sans: ['Bai Jamjuree', 'sans-serif'],
    },
  },
  plugins: [],
}