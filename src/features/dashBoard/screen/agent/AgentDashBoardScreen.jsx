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
        connectSocket(agentReducerState.data.token)  
      }
    },[])


           if  (agentReducerState.isLoggedIn) {
    return <div className="flex h-[100vh] w-full overflow-x-hidden">
        
    <DashBoardNavBar/>
     <Outlet />
      
       {
        (!agentReducerState.data.isAgentVerified) && <AgentVerificationPopUp showScreen={true}/>
       }

       </div>

           } else{

           return   <div>
                {
                  agentReducerDispatcher({TYPE:"Authentication",payload:{
                    ...agentReducerState,
                    showPopUp:!agentReducerState.showPopUp
                 }})

                }
              <Navigate to={'/register-as-agent'} />
              </div>
           
           } 
           
            

    
     
   
    
}

export default AgentDashBoardScreen