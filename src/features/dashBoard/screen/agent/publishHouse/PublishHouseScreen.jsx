import { Outlet } from "react-router-dom";
import AgentContainer from "../../../component/AgentContainer";
import AgentNavBarDrawer from "../../../component/AgentNavBarDrawer";


const PublishHouseScreen = () => {

    return (
        <div className="w-full overflow-hidden">
        <AgentNavBarDrawer/>    
     <AgentContainer header={'Publish your house'} body={"Post your house for listing on the marketplace"}/>
        <Outlet/>
        </div>
    );
}

export default PublishHouseScreen