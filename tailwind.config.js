/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
       'heroSectionBackgroundImage':"url('./src/assets/LandingPageBg.svg')",
       'heroGradientImage':"url('./src/assets/Herogradient.svg')",
       'heroSmallScreen':"url('./src/assets/bgImage.svg')"

      }
    },
  },
  plugins: [],
}