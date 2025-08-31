/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'skull-red': '#dc2626',
        'skull-dark': '#0f0f0f',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        slackey: ['Slackey', 'cursive'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}