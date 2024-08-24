import AgentCard from "./AgentCard";
import  houseIcon from '../../../assets/houseIcon.svg'

const AgentBody = () =>{
    return (
        <div className=" mx-auto w-[80%] shadow-xl  overflow-y-auto  rounded-xl h-full flex place-content-evenly flex-wrap ">
             <AgentCard header={"Publish Your House"} body={"Ready to showcase your property? Publish your house now and connect with potential buyers or renters instantly!"} image={houseIcon}/>
             <AgentCard  header={"Market Insights"} body={"Stay ahead with Market Insights! Get the latest trends, data, and analysis to make informed decisions about buying or renting properties"} />
             <AgentCard  header={"Access Your Listed Houses"} body={"Manage Your Listings: Access Your Listed Houses Here!"}/>
             <AgentCard  header={"Client's Management"} body={"Effortlessly Manage Your Clients: Access All Client Information and Interactions in One Place!"}/>
             <AgentCard  header={"Help & Support"} body={"Need Assistance? We're Here to Help! Access our support center for FAQs, guides, and personalized assistance."}/>
             <AgentCard  header={"Log Out"} body={"Ready to Log Out? Click here to securely sign out and protect your account."}/>

        </div>
    );
}

export default AgentBody