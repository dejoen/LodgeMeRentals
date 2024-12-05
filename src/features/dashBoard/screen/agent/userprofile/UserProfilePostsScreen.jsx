import { useContext, useEffect, useState } from "react";
import UserProfilePostsCard from "../../../component/agent/userProfile/UserProfilePostsCard"
import { CombineContext } from "../../../../../context/CombineContextProvider";
import { getAllHousesPublishedAgent } from "../../../service";
import { CircularProgress } from "@mui/material";

const UserProfilePostsScreen = () => {

    const {
        agentReducerState,
        
        housesPublishedByAgentReducerDispatcher,
       
      } = useContext(CombineContext);

       //alert(housesPublishedByAgentReducerState.housesPublished)

       const [publisedHouses,setPublishedHouses] = useState()
       
       
    
      useEffect(()=>{
    
        const user = agentReducerState.data
        if(housesPublishedByAgentReducerDispatcher)
         getAllHousesPublishedAgent(user.token,user._id).then(res=> {
          return res.json()
         }).then(result=>{
         setPublishedHouses(result.housesPublished)
      
           housesPublishedByAgentReducerDispatcher({TYPE:"Save_Data",payload:result.housesPublished})
           
         }).catch(err=>alert(err))
    
      },[agentReducerState,housesPublishedByAgentReducerDispatcher])
      
    return(
        <div className="w-full font-nunito">
           <p className="m-3">Posted Houses</p>
           <div className=" flex flex-wrap gap-5 place-items-center justify-center w-full max-h-[400px] md:ms-5 overflow-y-auto mb-2">
            {

                !publisedHouses  && <CircularProgress size={100} />
            }
       
           {
            (publisedHouses) && publisedHouses.map((house)=>(
                <UserProfilePostsCard key={house._id} name={house.houseOverview.houseName} address={house.houseOverview.houseAddress} houseImage={(house.mediaUpload )? house.mediaUpload.find(e=>{return e.type === 'image'}).url:''}/>
            ))
           }
           </div>
        </div>
    )
}


export default UserProfilePostsScreen