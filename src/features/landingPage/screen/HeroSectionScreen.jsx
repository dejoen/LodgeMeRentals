import { useEffect } from "react";
import NavBarComponent from "../component/NavbarComponent";
import NavDrawerBar from "../component/NavDrawerBar";
import FooterScreen from "./FooterScreen";
import HeroBodyContainerOne from "../component/HeroBodyContainerOne";

const HeroSectionScreen = () => {
    useEffect(()=>{
       
    window.addEventListener('resize',()=>{
        document.querySelector('.drawer').style.display="none"
    })

    return ()=>{
        window.removeEventListener('resize',()=>{})
    } 
    },[])

    return (
      
<div className="w-full  h-dvh  ">
    
 <NavBarComponent image={"bg-heroSectionBackgroundImage"} text={`Premium rental homes, available on demand"`} buttonOneText={"Get Started"} makeVisible={"hidden"} />  
<HeroBodyContainerOne/>
<FooterScreen/>
<NavDrawerBar/>

 </div>

    );
}

export default HeroSectionScreen