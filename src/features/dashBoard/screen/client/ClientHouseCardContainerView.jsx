
import ClientHouseCard from "../../component/client/ClientHouseCard";
import { PaginationContext } from "../../../../context/client/PaginationContext";

import { CircularProgress } from "@chakra-ui/progress";
import { useContext } from "react";

const ClientHouseCardContainerView = () =>{
  
   const  {homeItems,setItem,items,loading} = useContext(PaginationContext)  
 

   

 
    
    return (
      
      <div className="w-full  mt-3 flex flex-wrap  justify-center gap-5 h-[400px] overflow-y-auto p-2">
        <div className={`${(loading)? "flex" :"hidden"}  absolute  top-[450px] bottom-0 z-[15] justify-center place-items-center`}>
        <CircularProgress size={130} isIndeterminate={true}  color="#F9BA8F"/>
        </div>

       {
        
       items.map((item,index)=>(
        <ClientHouseCard key={index} item={item}/>
       ))
       }
      </div>

    );
}


const chunkArray = (arr,size) =>{
     return arr.reduce((acc,_,index)=>{
        if(index % size === 0){
           acc.push(arr.slice(index,index+size))
        }
        return acc
     },[])
}

export default ClientHouseCardContainerView