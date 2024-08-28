import AgentBody from "../../component/AgentBody"
import AgentContainer from "../../component/AgentContainer"
import AgentNavBarDrawer from "../../component/AgentNavBarDrawer"

const AgentDashboardView = () =>{
    return (
        <div className="w-full  h-screen overflow-hidden ">
          <AgentContainer header={"Welcome User!"} body={"What would you like to see today?"}/>
         <AgentBody/>
         <AgentNavBarDrawer/>
        </div>
    )
}

export default AgentDashboardView