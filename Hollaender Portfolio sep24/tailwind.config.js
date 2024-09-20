/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      '6xl': '3.052rem',
      '7xl': '3.052rem',
      '8xl': '3.052rem',
      '9xl': '3.052rem',
      '10xl': '8rem',
    },
    extend: {
      fontFamily: {
        display: ["DisplayFont", "serif"], bold: ["BoldFont", "serif"],
      },
    },
  },
  plugins: [],
}