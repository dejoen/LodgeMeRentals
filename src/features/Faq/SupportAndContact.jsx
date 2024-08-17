import { useState } from "react";
import FaqCard from "../landingPage/component/FaqCard";


const SupportAndContact =  () => {
     
        const [seeMore,setSeeMore] = useState({
            cardOne:false,
            cardTwo:false
        })
        return (
       <div className="w-full flex flex-col place-items-center gap-3 mt-4 ">
          <div className="font-nunito place-self-start  ms-2 font-bold md:place-self-center">Support And Conctact</div>
    
        <FaqCard title={"How can I contact LodgeMe?"} 
        body={"You can reach us via phone, email, or through our website’s contact form. Visit our Contact Us page for more details."} 
        makeVisible={seeMore.cardOne} 
        onClick={()=>{
            setSeeMore(prev =>{
                 return  {
                    ...prev,
                    cardOne:!seeMore.cardOne
                 }
            })
        }}/>
    
    <FaqCard title={"What should I do if I encounter technical issues on the website?"} 
    body={"if you experience any technical issues, please contact our support team. We are here to assist you and ensure your experience on our website is seamless."}  
    makeVisible={seeMore.cardTwo}  
    onClick={()=>{
            setSeeMore(prev =>{
                return  {
                   ...prev,
                   cardTwo:!seeMore.cardTwo
                }
           })
        }}/>
    
    <FaqCard title={"Can I get personalized assistance?"} 
    body={`Absolutely! Our team is dedicated to providing personalized assistance to meet your unique real estate needs. Contact us to speak with one of our expert agents today.`}  
    makeVisible={seeMore.cardThree}  
    onClick={()=>{
            setSeeMore(prev =>{
                return  {
                   ...prev,
                   cardThree:!seeMore.cardThree
                }
           })
        }}/>
    
    
    
       </div>
    
    
            
        );

     
}


export default SupportAndContact