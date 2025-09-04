import { useEffect, useState } from "react";
import RequestCardContainer from "./RequestCardContainer";
import { getMarketInsigts } from "../../../service";
import useManageAgentState from "../../../hooks/useManageAgentState";

const RequestContainer = () => {

  const [marketInsightData,setMarketInsightData] = useState([])
  const [errorMessage,setErrorMessage] = useState('')
 const  {agentReducerState} = useManageAgentState()

  useEffect(()=>{
   
  (async()=>{
     try {
   
      const response= await getMarketInsigts(agentReducerState.data.token)
      const  result= await response.json()
      
      if(result.status === 200){
        console.log(result.data)
    setMarketInsightData(result.data)
       return
       }
      setErrorMessage(result.error??result.message)
       console.log(response)
     } catch (error) {
      
     }
  })()
  },[])

  return (
    <div className="w-full mt-20 p-3 md:w-[80%] md:ml-[20%] mx-auto">
      <div className="md:pl-8">
        <p className="font-bold text-[32px]">View Request</p>
        <p className="w-full text-justify">
          Browse and manage all rental requests submitted by users, ensuring a seamless matching process.
        </p>
      </div>

      <div className="w-full flex flex-col gap-6 p-3 overflow-y-auto h-[75vh]">
       {
        marketInsightData.length === 0 ? <div className="h-screen justify-items-center place-content-center">
          <p>No data yet</p>
          </div>: <div>
             {marketInsightData.map((item, index) => (
          <RequestCardContainer key={index} data={item} />
        ))}
            </div>
       }
      </div>
    </div>
  );
};

export default RequestContainer;
