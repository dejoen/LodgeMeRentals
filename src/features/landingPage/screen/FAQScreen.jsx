import BuyingAProperty from "../../Faq/BuyingAProperty";
import GeneralQuestions from "../../Faq/GeneralQuestions";
import RentingAProperty from "../../Faq/RentingAProperty";
import SellingAProperty from "../../Faq/SellingAProperty";
import SupportAndContact from "../../Faq/SupportAndContact";
import FaqHeader from "../component/FaqHeader";
import NavBarComponent from "../component/NavbarComponent";
import NavDrawerBar from "../component/NavDrawerBar";
import FooterScreen from "./FooterScreen";
import GetStartedScreen from "./GetStartedScreen";

 const FAQScreen = () => {
     return (
        <div>
        <NavBarComponent image={"bg-faqBackgroundImage"} text={"More Than Just A House, We Provide Homes"} textSize={"text-4xl"} lineHeight={'leading-[60px]' } buttonOneText={"LogIn"} makeVisible={"block"} adjustHeight={"h-fit"}/>
         <FaqHeader/>
         <GeneralQuestions/>
         <BuyingAProperty/>
         <RentingAProperty/>
         <SellingAProperty/>
         <SupportAndContact/>
         <div className="w-full font-nunito font-bold mt-8  flex place-items-center justify-center">
          <p className="w-[200px] md:w-[260px]">Thank you for choosing LodgeMe. We look forward to helping you with all your real rental needs!</p>
         </div>
         <FooterScreen/>
         <NavDrawerBar/>
         <GetStartedScreen/>
        </div>
     );
 }

 export default FAQScreen