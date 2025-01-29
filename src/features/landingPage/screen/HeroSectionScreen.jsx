import { useEffect } from "react";
import NavBarComponent from "../component/NavbarComponent";
import NavDrawerBar from "../component/NavDrawerBar";
import FooterScreen from "./FooterScreen";
import HeroBodyContainerOne from "../component/HeroBodyContainerOne";
import GetStartedScreen from "./GetStartedScreen";

const HeroSectionScreen = () => {
    useEffect(()=>{
       
    window.addEventListener('resize',()=>{
        document.querySelector('.drawer').style.display="none"
    })

    return ()=>{
        window.removeEventListener('resize',()=>{})
    } 
    },)

    return (
      
<div className="w-full  h-dvh  ">
    
 <NavBarComponent image={"bg-heroSectionBackgroundImage"} text={`Premium rental homes, available on demand`} centerText={false} buttonOneText={"Get Started"} makeVisible={"hidden"}  isLandingPage={true}/>  
<HeroBodyContainerOne/>
<FooterScreen/>
<GetStartedScreen/>
<NavDrawerBar/>

 </div>

    );
}

export default HeroSectionScreen