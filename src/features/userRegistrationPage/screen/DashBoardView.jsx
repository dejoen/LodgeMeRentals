import AgentBody from "../component/AgentBody"
import AgentContainer from "../component/AgentContainer"

const DashboardView = () =>{
    return (
        <div className="w-full  h-full overflow-y-auto">
          <AgentContainer header={"Welcome User!"} body={"What would you like to see today?"}/>
          <AgentBody/>
        </div>
    )
}

export default DashboardView