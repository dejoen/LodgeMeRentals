import { useState } from "react";
import ResourceCard from "../landingPage/component/ResourceCard";


const Basics = () => {
    let data = ["kkd","jjxj","kkd","jjxj","kkd","jjxj"]
     
    const [seeMore,setSeeMore]  = useState(false)
    return (
<div className="w-full mt-5">
    <div className="w-full flex  place-items-center justify-center mb-1  ">
        <p className="w-fit  ">Landlording Basics</p>

        <p className="md:w-[80%] ms-20 md:ms-0  text-blue-700 text-end " onClick={()=>{
            setSeeMore(!seeMore)
              if(seeMore){
                window.scrollTo({top:500,behavior:"smooth"})
    
              }else{
                window.scrollTo({top:2000,behavior:"smooth"})
    
              }
            }}>see more { (seeMore)? "^" :">"}</p>
    </div>

    <div className="flex flex-wrap place-items-center justify-center">
      <ResourceCard/>
      <ResourceCard/>
      <ResourceCard/>
      <ResourceCard/>
     {    
      (seeMore) ? 
        data.map((d,index)=>(
            <ResourceCard key={index}/>
         ))
      :""
         
    }    
      </div>
</div>
    );
}

export default Basics