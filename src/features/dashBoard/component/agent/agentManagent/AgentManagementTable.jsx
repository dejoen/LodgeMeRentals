import AgentManagementTableCard from "./AgentManagementTableCard";

const AgentManagementTable = () => {
  return (
    <div className="md:w-[96%] min-h-[58vh]   w-full md:m-5 text-black ">
      <div className="mt-5 w-full border max-h-[56vh] md:max-h-[53vh] border-black border-opacity-100 rounded-t-md overflow-x-auto  ">
        <div className=" w-[1200px]   p-1 flex gap-4  justify-evenly pe-[2%] sticky top-0 z-50 bg-[#E1E0E0] ">
          <p className=" text-center min-w-[120px] max-w-[120px]">Client ID</p>
          <p className="text-center min-w-[120px] max-w-[120px]">Icon</p>
          <p className=" text-center min-w-[120px] max-w-[120px]">Full Name</p>
          <p className=" text-center min-w-[120px] max-w-[120px]">Status</p>
          <p className="text-center min-w-[120px] max-w-[120px]">Amount Paid</p>
          <p className=" text-center min-w-[120px] max-w-[120px]">Rental Due</p>
          <p className="text-center min-w-[120px] max-w-[120px]">Application Status</p>
          <p className=" text-center min-w-[120px] max-w-[120px]">Contract Status</p>
        </div>
        <div className="w-[1200px]  h-[1px] bg-black " />
        <AgentManagementTableCard/>
        <AgentManagementTableCard/>
        <AgentManagementTableCard/>
        <AgentManagementTableCard/>
        <AgentManagementTableCard/>
        <AgentManagementTableCard/>
        <AgentManagementTableCard/>
        <AgentManagementTableCard/>
      </div>
    </div>
  );
};

export default AgentManagementTable;
