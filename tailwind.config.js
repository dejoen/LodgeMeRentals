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
        'copyRightBackgroundImage':"url('../src/assets/crbgimage.svg')",
        'termsBackgroundImage':"url('../src/assets/termsbgimage.svg')",
        'resourceBackgroundImage':"url('../src/assets/rsbgimage.svg')",
        'faqBackgroundImage':"url('../src/assets/faqbgimage.svg')",
        'agentSignUpBackgroundImage':"url('../src/assets/agentsbgimage.svg')",
        'agentNavbarBgImage':"url('../src/assets/agentnavbarbgimage.svg')"

        
        
        
        
        
        
        
      },
      fontFamily:{
        nunito:["Nunito"]
      },
      keyframes:{
        popUp :{
           "0%":{
            transform:"scale(1)"
           },
           "50%":{
            transform:"scale(1.4)"
           },
           "60%":{
            transform:"scale(1.1)"
           },
           "70%":{
            transform:"scale(1.2)"
           },
           "80%":{
            transform:"scale(1)"
           },
           "90%":{
            transform:"scale(1.1)"
           },
           "100%":{
            transform:"scale(1)"
           }
        }
      },
      animation:{
        popUpAnimation:"popUp 1s linear 1"
      },
    backgroundColor:{
messageBg: 'rgba(187, 118, 85, 0.25)',
senderBg: ' rgba(187, 118, 85, 1)',
morningBg:' rgba(52, 168, 83, 0.5)',
afternooBg:'rgba(255, 200, 57, 0.5)',
otherBg:'rgba(255, 2, 9, 0.5)'
    },

    },
   
  },
  plugins: [],
}