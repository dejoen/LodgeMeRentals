import BodyCardContainer from "./BodyCardContainer";
import NewsLetterContainer from "./NewsLetterContainer";
import WhyLodgeMeContainer from "./WhyLodgeMeContainer";


let HeroBodyContainerOne = () =>{
   return(
   <div className="flex flex-col p-5">
     <BodyCardContainer/>
     <WhyLodgeMeContainer/>
     <NewsLetterContainer/>
   </div>
   );

}

export default HeroBodyContainerOne