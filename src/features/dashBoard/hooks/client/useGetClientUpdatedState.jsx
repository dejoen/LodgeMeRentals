import { useEffect, useState } from "react"
import useGetClientStateManagement from "./useGetClientStateManagement"

const useGetClientUpdatedState = () =>{

    const {clientReducerState} = useGetClientStateManagement()

    const [clientUpdatedState,setClientUpdatedState] = useState(()=>{
        return clientReducerState
    })

    useEffect(()=>{
       setClientUpdatedState(clientReducerState)
    },[clientReducerState])

    return {clientUpdatedState}
}

export default useGetClientUpdatedState