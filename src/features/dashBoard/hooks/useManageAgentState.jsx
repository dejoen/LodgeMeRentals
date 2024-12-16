import { useContext } from "react";

import {CombineContext}  from '../../../context/CombineContextProvider'

export default function useManageAgentState (){

 const { agentReducerState,
        agentReducerDispatcher,
        connectSocket,
        socketConnectedReducerDispatcher,
        socketConnectedReducerState,
        allDataToPublishReducerState,
        allDataToPublishReducerDispatcher,
        housesPublishedByAgentReducerState , housesPublishedByAgentReducerDispatcher}  = useContext(CombineContext)


        
        return { agentReducerState,
            agentReducerDispatcher,
            connectSocket,
            socketConnectedReducerDispatcher,
            socketConnectedReducerState,
            allDataToPublishReducerState,
            allDataToPublishReducerDispatcher,
            housesPublishedByAgentReducerState,housesPublishedByAgentReducerDispatcher}

            


        
}