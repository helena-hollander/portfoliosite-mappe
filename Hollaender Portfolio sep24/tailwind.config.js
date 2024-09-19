/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["DisplayFont", "serif"], bold: ["BoldFont", "serif"],
      },
    },
  },
  plugins: [],
}