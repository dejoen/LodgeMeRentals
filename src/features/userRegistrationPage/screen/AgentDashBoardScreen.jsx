import { Outlet } from "react-router-dom"
import DashBoardNavBar from "../component/DashBoardNavBar"



const AgentDashBoardScreen = () =>{
    return (

        <div className="flex h-[100vh] ">
     <DashBoardNavBar/>
      <Outlet />
        </div>
    )
}

export default AgentDashBoardScreen