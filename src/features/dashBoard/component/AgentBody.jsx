import AgentCard from "./AgentCard";
import  houseIcon from '../../../assets/houseIcon.svg'
import  InsightIcon from '../../../assets/insighticon.svg'
import  AccessIcon from '../../../assets/accessicon.svg'
import  ClientManagementIcon from '../../../assets/clientmicon.svg'
import  HelpAbdsupportIcon  from '../../../assets/helpicon.svg'
import  LogoutIcon from '../../../assets/logouticon.svg'


const AgentBody = () =>{
    return (
        <div className="mt-[100px] mx-auto w-[80%] h-[570px] shadow-xl bg-black bg-opacity-10 overflow-y-auto  rounded-xl  flex place-content-evenly flex-wrap ">
             <AgentCard header={"Publish Your House"} body={"Ready to showcase your property? Publish your house now and connect with potential buyers or renters instantly!"} image={houseIcon}/>
             <AgentCard  header={"Market Insights"} body={"Stay ahead with Market Insights! Get the latest trends, data, and analysis to make informed decisions about buying or renting properties"} image={InsightIcon} />
             <AgentCard  header={"Access Your Listed Houses"} body={"Manage Your Listings: Access Your Listed Houses Here!"} image={AccessIcon}/>
             <AgentCard  header={"Client's Management"} body={"Effortlessly Manage Your Clients: Access All Client Information and Interactions in One Place!"} image={ClientManagementIcon}/>
             <AgentCard  header={"Help & Support"} body={"Need Assistance? We're Here to Help! Access our support center for FAQs, guides, and personalized assistance."} image={HelpAbdsupportIcon}/>
             <AgentCard  header={"Log Out"} body={"Ready to Log Out? Click here to securely sign out and protect your account."} image={LogoutIcon}/>

        </div>
    );
}

export default AgentBody