import Basics from "../../resources/basics";
import NavBarComponent from "../component/NavbarComponent";
import ResourceHeader from "../component/ResourceHeader";


const ResourcesScreen = () =>{

    return (
        <div>
    <NavBarComponent image={"bg-aboutBackgroundImage"} text={"More Than Just A House, We Provide Homes"} textSize={"text-4xl"} lineHeight={'leading-[60px]' } buttonOneText={"LogIn"} makeVisible={"block"} adjustHeight={"h-fit"}/>
      <ResourceHeader/>
      <Basics/>
        </div>
    );
}

export default ResourcesScreen

