
import { useContext, useEffect, useState } from "react";

import {CombineContext}  from '../../../context/CombineContextProvider'

export default function useGetUpdatedState (){

  

    const { agentReducerState}  = useContext(CombineContext)

        const [agentState,setAgentState] = useState(()=>{
            return agentReducerState
        })

        useEffect(()=>{
            
         setAgentState(agentReducerState)
         
        },[agentReducerState])
        
   return {agentState}
}