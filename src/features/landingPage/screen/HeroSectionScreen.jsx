import HeroBodyContainerOne from "../component/HeroBodyContainerOne";
import NavBarComponent from "../component/NavbarComponent";
import FooterScreen from "./FooterScreen";

const HeroSectionScreen = () => {

    return (
    
<div className="w-full  h-dvh  ">
<NavBarComponent/>
<HeroBodyContainerOne/>
<FooterScreen/>
 </div>

    );
}

export default HeroSectionScreen