import CopyRightTextBody from "../component/CopyRigtTextBody"
import NavBarComponent from "../component/NavbarComponent"
import NavDrawerBar from "../component/NavDrawerBar"
import FooterScreen from "./FooterScreen"

const CopyRightScreen = ()=>{

    return (
        <div>
        <NavBarComponent image={"bg-copyRightBackgroundImage"} text={"Premium Rental Homes, Available Anytime"} textSize={"text-4xl"} lineHeight={'leading-[60px]' } buttonOneText={"LogIn"} makeVisible={"block"} adjustHeight={"h-fit"}/>
        <CopyRightTextBody/>
        <FooterScreen/>
<NavDrawerBar/>
        </div>
    )
}

export default CopyRightScreen