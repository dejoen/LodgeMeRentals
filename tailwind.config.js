/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
       'heroSectionBackgroundImage':"url('../src/assets/landingPageBg.svg')",
       'heroGradientImage':"url('../src/assets/Herogradient.svg')",
       'heroSmallScreen':"url('../src/assets/bgImage.svg')",
        'footerImage':"url('../src/assets/footerimage.svg')",
        'aboutBackgroundImage':"url('../src/assets/aboutbgimage.svg')",
        'aboutCaptureUserImage':"url('../src/assets/aboutcaptureimage.svg')",
        'blogBackgroundImage':"url('../src/assets/blogbgimage.svg')",
        'copyRightBackgroundImage':"url('../src/assets/crbgimage.svg')"
        
        
        
      },
      fontFamily:{
        nunito:["Nunito"]
      }
    },
   
  },
  plugins: [],
}