import CopyRightTextBody from "../component/CopyRigtTextBody";
import NavBarComponent from "../component/NavbarComponent";
import NavDrawerBar from "../component/NavDrawerBar";
import FooterScreen from "./FooterScreen";
import GetStartedScreen from "./GetStartedScreen";

const CopyRightScreen = () => {
  return (
    <div>
      <NavBarComponent
        image={"bg-copyRightBackgroundImage"}
        text={"Premium Rental Homes, Available Anytime"}
        textSize={"text-4xl"}
        buttonOneText={"LogIn"}
        makeVisible={"block"}
        adjustHeight={"h-fit"}
      />
      <CopyRightTextBody />
      <FooterScreen />
      <NavDrawerBar />
      <GetStartedScreen />
    </div>
  );
};

export default CopyRightScreen;
