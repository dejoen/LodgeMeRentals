import { useEffect } from "react";
import HeroBodyContainerOne from "../component/HeroBodyContainerOne";
import NavBarComponent from "../component/NavbarComponent";
import NavDrawerBar from "../component/NavDrawerBar";
import FooterScreen from "./FooterScreen";

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

<NavBarComponent/>
<HeroBodyContainerOne/>
<FooterScreen/>
<NavDrawerBar/>
 </div>

    );
}

export default HeroSectionScreen