import NavBarComponent from "../component/NavbarComponent";
import NavDrawerBar from "../component/NavDrawerBar";
import TermsAndConditionTextBody from "../component/TermsAndConditionTextBody";
import FooterScreen from "./FooterScreen";
import GetStartedScreen from "./GetStartedScreen";

const TermsAndConditionScreen = () =>{

    return (
   <div>
    <NavBarComponent image={"bg-termsBackgroundImage"} text={"Exclusive Rental Homes, Available Anytime"} textSize={"text-4xl"} lineHeight={'leading-[60px]' } buttonOneText={"LogIn"} makeVisible={"block"} adjustHeight={"h-fit"}/>
     <TermsAndConditionTextBody/>
     <FooterScreen/>
      <NavDrawerBar/>
      <GetStartedScreen/>
      
   </div>
    );
}

export default TermsAndConditionScreen