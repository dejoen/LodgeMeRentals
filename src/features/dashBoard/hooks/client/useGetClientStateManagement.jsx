import { useContext } from "react"
import { CombineContext } from "../../../../context/CombineContextProvider"

 const useGetClientStateManagement = () =>{

    const {clientReducerState,clientReducerDispatcher,socketConnectedReducerState,connectSocket} = useContext(CombineContext)
  
  
    return {clientReducerState,clientReducerDispatcher,socketConnectedReducerState,connectSocket}
 }


 export default useGetClientStateManagement