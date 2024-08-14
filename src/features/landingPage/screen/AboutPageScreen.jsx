  import AboutImageSliderContainer from "../component/AboutImageSliderContainer";
import AboutInstructionCardContainer from "../component/AboutInstructionCardContainer";
import AboutTextContainer from "../component/AboutTextContainer";
import  NavbarComponent from "../component/NavbarComponent"
import NavDrawerBar from "../component/NavDrawerBar";

const AboutPageScreen = () =>{

    return(
<div>
    <NavbarComponent image={"bg-aboutBackgroundImage"} text={"More Than Just A House, We Provide Homes"} textSize={"text-4xl"} lineHeight={'leading-[60px]' } buttonOneText={"LogIn"} makeVisible={"block"} adjustHeight={"h-fit"}/>
    <AboutTextContainer/>
    <AboutImageSliderContainer/>
     <AboutInstructionCardContainer/>
    <NavDrawerBar/>
</div>
    );
}

export default AboutPageScreen