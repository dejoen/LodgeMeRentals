import { useEffect, useState } from "react";
import useManageAgentState from "./useManageAgentState";

const useGetUpdatedSocket = () =>{
  const [connectedSocket,setConnectedSocket] = useState()
    const {socketConnectedReducerState} = useManageAgentState()

    useEffect(()=>{
       setConnectedSocket(socketConnectedReducerState.socket)
    },[socketConnectedReducerState])
    return {connectedSocket};

}

export default useGetUpdatedSocket