import { Outlet } from "react-router-dom"
import DashBoardNavBar from "../component/DashBoardNavBar"



const AgentDashBoardScreen = () =>{
    return (

        <div className="flex h-[100vh] overflow-y-hidden">
     <DashBoardNavBar/>
      <Outlet />
        </div>
    )
}

export default AgentDashBoardScreen