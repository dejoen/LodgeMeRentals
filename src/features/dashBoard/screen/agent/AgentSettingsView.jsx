import AgentContainer from "../../component/AgentContainer";
import AgentNavBarDrawer from "../../component/AgentNavBarDrawer";
import AgentSettingDashboard from "../../component/AgentSettingDashboard";
export default function AgentSettingView(){
return(

    <div className="w-full  h-full overflow-y-auto">
        <AgentContainer header={"Settings"}/>
       <AgentSettingDashboard/>
        <AgentNavBarDrawer/>
      </div>
      )}