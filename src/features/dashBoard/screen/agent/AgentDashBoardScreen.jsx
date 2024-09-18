/* eslint-disable react-hooks/exhaustive-deps */
import { Navigate, Outlet } from "react-router-dom"
import DashBoardNavBar from "../../component/DashBoardNavBar"
import { useContext, useEffect} from "react"
import { CombineContext } from "../../../../context/CombineContextProvider"
import AgentVerificationPopUp from "../../component/AgentVerificationPopUp"




const AgentDashBoardScreen = () =>{


  
    
  const {agentReducerState,agentReducerDispatcher,connectSocket,socketConnectedReducerState} = useContext(CombineContext)

  
    useEffect(()=>{
      if(!socketConnectedReducerState.isSocketConnect && agentReducerState.isLoggedIn){
         const con = async () => {
          await connectSocket(agentReducerState.data.token)  
         }
         
         con()
      }
    },[])


           if  (agentReducerState.isLoggedIn) {
    return <div className="flex h-[100vh] w-full overflow-x-hidden">
        
    <DashBoardNavBar/>
     <Outlet />
      
       {
        (!agentReducerState.data.isAgentFileAlreadyUploaded) && <AgentVerificationPopUp showScreen={true} token={agentReducerState.data.token}/>
       }

       </div>

           } else{

           return   <div>
              
              <Navigate to={'/login'} />
              </div>
           
           } 
           
            

    
     
   
    
}

export default AgentDashBoardScreen