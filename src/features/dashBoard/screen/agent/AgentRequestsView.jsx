import RequestContainer from "../../component/agent/request/RequestContainer"
import AgentContainer from "../../component/AgentContainer"

import AgentNavBarDrawer from "../../component/AgentNavBarDrawer"

const AgentRequestsView = () => {

    return (

        <div className="font-nunito w-full">

          <AgentContainer header="See what people need" />
          <AgentNavBarDrawer/>
          <RequestContainer/>
           
        </div>


    )
}


export default AgentRequestsView