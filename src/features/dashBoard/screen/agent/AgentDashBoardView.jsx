import { useContext } from "react"
import AgentBody from "../../component/AgentBody"
import AgentContainer from "../../component/AgentContainer"
import AgentNavBarDrawer from "../../component/AgentNavBarDrawer"
import { CombineContext } from "../../../../context/CombineContextProvider"


const AgentDashboardView = () =>{
     const {agentReducerState} = useContext(CombineContext)
     
    return (

         
        
        <div className="w-full  h-screen  ">
            <AgentContainer header={"Welcome \n"+agentReducerState.data.userName+"!"} body={"What would you like to see today?"}/>
           <AgentBody/>
           <AgentNavBarDrawer/>
          </div>  
      
        
    )
}

export default AgentDashboardView