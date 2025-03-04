import AgentCard from "./AgentCard";
import  houseIcon from '../../../assets/houseIcon.svg'
import  InsightIcon from '../../../assets/insighticon.svg'
import  AccessIcon from '../../../assets/accessicon.svg'
import  ClientManagementIcon from '../../../assets/refer.png'
import  HelpAbdsupportIcon  from '../../../assets/helpicon.svg'
import  LogoutIcon from '../../../assets/logouticon.svg'
import AgentRefer from "../screen/agent/AgentRefer/AgentRefer";
import AgentClentHero from "./client/ReferClient/ReferClient";

const AgentBody = () =>{
    return (
       <div>
         <div className="mt-[100px] md:ml-[22%] ms-8  w-[80%] md:w-[70%] h-fit py-4 shadow-2xl bg-black bg-opacity-10 overflow-y-auto  rounded-xl  flex place-content-evenly flex-wrap ">
         <AgentCard  header={"Refer & Earn "} body={"Invite your friends to join our rental community and enjoy exclusive benefits when they sign up and secure a property. Our referral program is simple"} image={ClientManagementIcon}/>
             <AgentCard header={"Publish Your House"} body={"Ready to showcase your property? Publish your house now and connect with potential buyers or renters instantly!"} image={houseIcon}/>
             <AgentCard  header={"Market Insights"} body={"Access what clients are looking for."} image={InsightIcon} />
            <AgentCard  header={"Access Your Listed Houses"} body={"Manage Your Listings: Access Your Listed Houses Here!"} image={AccessIcon}/>
               <AgentCard  header={"Help & Support"} body={"Need Assistance? We're Here to Help! Access our 24/7 support center for personalized assistance."} image={HelpAbdsupportIcon}/>
             <AgentCard  header={"Log Out"} body={"Ready to Log Out? Click here to securely sign out and protect your account."} image={LogoutIcon}/>

        </div>
<AgentRefer/>
<AgentClentHero/>
       </div>
    );
}

export default AgentBody