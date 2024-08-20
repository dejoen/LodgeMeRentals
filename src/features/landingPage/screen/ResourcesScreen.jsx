import Basics from "../../resources/Basics";
import ManageRental from "../../resources/ManageRental";
import ToolsAndForms from "../../resources/ToolsAndForms";
import NavBarComponent from "../component/NavbarComponent";
import NavDrawerBar from "../component/NavDrawerBar";
import ResourceHeader from "../component/ResourceHeader";
import FooterScreen from "./FooterScreen";
import GetStartedScreen from "./GetStartedScreen";

const ResourcesScreen = () =>{

    return (
        <div>
    <NavBarComponent image={"bg-resourceBackgroundImage"} text={"Exclusive Rental Homes, Available Anytime"} textSize={"text-4xl"} lineHeight={'leading-[60px]' } buttonOneText={"LogIn"} makeVisible={"block"} adjustHeight={"h-fit"}/>
      <ResourceHeader/>
      <Basics/>
      <ToolsAndForms/>
      <ManageRental/>
       <FooterScreen/>
     <NavDrawerBar/>
     <GetStartedScreen/>
        </div>
    );
}

export default ResourcesScreen

