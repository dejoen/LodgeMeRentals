import AgentContainer from "../../component/AgentContainer";
import AgentNavBarDrawer from "../../component/AgentNavBarDrawer";
import NotificationContainer from "../../component/NotificationContainer";
export default function AgentNotificationView(){
return(

    <div className="w-full  h-full overflow-y-auto">
        <AgentContainer header={"Notification"}/>
       <NotificationContainer/>
        <AgentNavBarDrawer/>
      </div>
)


}