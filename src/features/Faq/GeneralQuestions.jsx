import { useState } from "react";
import FaqCard from "../landingPage/component/FaqCard";


const  GeneralQuestions =() =>{
    const [seeMore,setSeeMore] = useState({
        cardOne:false,
        cardTwo:false,
        cardThree:false
    })

    return (
   <div className="w-full flex flex-col place-items-center gap-3 mt-4 ">
      <div className="font-nunito place-self-start  ms-2 font-bold md:place-self-center">General Questions</div>


    <FaqCard title={"What services does LodgeMe offer?"} body={"We offer a comprehensive range of real estate services including buying, selling, renting, property management, and market analysis. Our team of experienced agents is dedicated to helping you find your ideal home or investment property."} 
    makeVisible={seeMore.cardOne} 
    onClick={()=>{
        setSeeMore(prev =>{
             return  {
                ...prev,
                cardOne:!seeMore.cardOne
             }
        })
    }}/>


<FaqCard title={"How do I get started with LodgeMe ?"} 
body={"Simply sign up on our website, fill out your profile, and start browsing our listings. If you're looking to sell or rent out your property, you can easily list it on our platform by following the step-by-step instructions provided."}  
makeVisible={seeMore.cardTwo}  
onClick={()=>{
        setSeeMore(prev =>{
            return  {
               ...prev,
               cardTwo:!seeMore.cardTwo
            }
       })
    }}/>



   </div>



    );
}

export default GeneralQuestions