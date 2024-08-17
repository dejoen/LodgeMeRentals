/* eslint-disable no-unused-vars */

import ResourceCard from "../../landingPage/component/ResourceCard";

const SeeMore = (props) => {
      let data = ["kkd","jjxj","kkd","jjxj","kkd","jjxj"]
      
    return (
        <div>
    
    {
            
         data.map((d,index)=>(
            <ResourceCard key={index}/>
         ))
        
         }
      
      
            
        </div>

    );
}

export default SeeMore