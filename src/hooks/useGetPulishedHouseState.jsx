import {  useState } from "react";
import { getAllHousesPublishedAgent } from "../features/dashBoard/service";

   
    export default   function useGetPublishedHouseState (user){

          const [publisedHouses,setPublishedHouses]    = useState()
          const [isLoading,setIsLoading] = useState(false)


          if(!publisedHouses){
            getAllHousesPublishedAgent(user.token,user._id).then(res=> {
                return res.json()
               }).then(result=>{
               
                setPublishedHouses(result)
            
                
                 
               }).catch(()=>{
                  setPublishedHouses({})
               })

          }
   
          return {publisedHouses}

    }