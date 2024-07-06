/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/hero/bg-hero.png')",
        tokenomics: "url('/2.section/bg.png')",
        features: "url('/features/bg.png')",
      },
      colors: {
        lightBlue : '#AED6FB'
      }
    },
  },
  plugins: [],
}