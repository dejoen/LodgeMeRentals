import HeroBodyContainerOne from "../component/HeroBodyContainerOne";
import NavBarComponent from "../component/NavbarComponent";
import NavDrawerBar from "../component/NavDrawerBar";
import FooterScreen from "./FooterScreen";

const HeroSectionScreen = () => {

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