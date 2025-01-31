import AgentContainer from "../../component/AgentContainer";
import AgentNavBarDrawer from "../../component/AgentNavBarDrawer";
import AppointmentContainer from "../../component/AppointmentContainer";
export default function AgentAppointmentView(){
return(

    <div className="w-full  h-full overflow-y-auto">
        <AgentContainer header={"Appointments"}/>
       <AppointmentContainer/>
        <AgentNavBarDrawer/>
      </div>
)}