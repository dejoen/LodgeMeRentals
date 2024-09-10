/* eslint-disable react/prop-types */

import { useContext } from "react";





 const Compose = (contexts,children) =>{
    return contexts.reduceRight((Acc,Context)=>{
         return (
            <Context><Acc/></Context>
         );
       },children)

     

}  






 export default Compose