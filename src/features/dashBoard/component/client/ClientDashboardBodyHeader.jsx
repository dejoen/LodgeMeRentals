import { useContext } from "react";
import { PaginationContext } from "../../../../context/client/PaginationContext";
import { RefreshCw } from 'lucide-react';
 import { useNavigate } from 'react-router-dom'
const ClientDashBoardBodyHeader = () => {
  const { items } = useContext(PaginationContext);
  const navigate = useNavigate()
  return (
    <div className="mt-5 ms-2 font-nunito md:ml-20 md:mb-5">
       <div className="flex justify-end w-[95%] mb-6">
       <div className='flex items-center gap-2 w-fit bg-orange-400 px-3 py-2 rounded' onClick={()=>{
            navigate("/client/dashboard/refer")
          }}>
          <RefreshCw size={18}/>
            <p>Refer and Earn</p>
          </div>
       </div>
      <div className=" font-bold  flex ">
        <p>Available properties for you</p>
        
      {/*  <p className="ms-10 ">Filter Selection</p>*/}
      </div>
      <div className="flex mt-1 text-sm">
        <p className="me-1">Number of houses available </p>
        <p className="w-[100px]  border-b border-dashed border-black text-center">
          {items.length > 0 ? items.length : 0}
        </p>
      </div>
    </div>
  );
};

export default ClientDashBoardBodyHeader;
