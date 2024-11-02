import AgentManagementTable from "./AgentManagementTable";


const AgentManagementContainer = () => {

    return (
        <div className="w-[98.6%] md:w-[99.5%] mt-[5.4rem] bg-white z-30 shadow-black shadow-md h-[87.6vh] cursor-default  rounded-lg ms-1 me-20">
            <div className="w-full h-fit pt-4  ps-5">
                <p className="font-bold">Client Management</p>
                <p>This page allows landlords, or agents to manage interactions with potential and current tenants. With tools for tracking client activity, communication, and managing rental agreements.</p>
               
            </div>
            <div className="w-full h-fit pt-4  ps-5 flex gap-10">
                <div className="">
                    <p>Revenue this month</p>
                    <p className="text-4xl text-center mt-2">#0</p>
                </div>
                <div className="">
                    <p>Profit this month</p>
                    <p className="text-4xl text-center mt-2">#0</p>
                </div>
            </div>
               <div className="w-full h-fit pt-4  ps-5 ">
                <div className="w-fit flex gap-3 place-self-end me-5 md:me-20">
                   <div className="flex gap-1">
                    <p>1 january - 30 January 202?</p>
                    <p>{'v'}</p>
                   </div>
                   <p className="bg-[#34A853] text-white rounded-md text-sm p-[3px]">Export</p>
                </div>

            </div>
    
           <AgentManagementTable/>
            
        </div>
        
            );
}


export default AgentManagementContainer