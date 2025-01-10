import { useEffect, useState } from "react"
import useGetClientStateManagement from "./useGetClientStateManagement"

const useGetClientSocket = () =>{

    const {socketConnectedReducerState
    } = useGetClientStateManagement()

    const [socketUpdate,setSocketUpdate] = useState()

    useEffect(()=>{
        setSocketUpdate(socketConnectedReducerState.socket)
    },[socketConnectedReducerState])

    return socketUpdate
}

export default useGetClientSocket