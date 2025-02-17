import image from "../../../../../assets/bodyImage3.svg";
import UserProfileBodyContainer from "../../../component/agent/userProfile/UserProfileBodyContainer";
//import menuIcon from "../../../../../assets/menuIcon.svg";
//import { openAgentProfileDrawer } from "../../../component/agent/userProfile/UserProfileDrawer";
import { useNavigate } from "react-router-dom";

import {   useState } from "react";

import useGetUpdatedState from "../../../hooks/useGetUpdatedState";
import {  ArrowLeft } from 'lucide-react';


const UserProfileOverviewScreen = () => {
  
 const {agentState} = useGetUpdatedState()
  

  const [toggleEditProfileScreen,setToggleEditProfileScreen]  = useState(false)
  const navigate = useNavigate();
  return (

    
    <div className=" font-nunito  w-full overflow-x-hidden relative">
    { /*}  <div className="md:hidden md:aria-hidden:hidden w-full flex justify-end">
        <img
          className="w-[30px] h-[30px] mt-2 me-5 place-self-end"
          src={menuIcon}
          onClick={() => {
            openAgentProfileDrawer();
          }}
        />
        <p
          className="left-0 absolute font-bold text-2xl mt-2 ms-3 hover:text-orange-400"
          onClick={() => {
            navigate("/agent/dashboard");
          }}
        >
           <X />
        </p>
      </div> */}
      <p
          className="left-5 pt-5 absolute font-bold text-2xl mt-2 ms-3 hover:text-orange-400"
          onClick={() => {
            navigate("/agent/dashboard");
          }}
        >
          <ArrowLeft />
        </p>
      <div className="relative">
      
        <div className="m-8  ">
          <div className="bg-[#D9D9D9] mt-20 w-full h-[300px] rounded-t-2xl flex">
            <img
              className="w-full h-full  object-cover rounded-t-2xl "
              src={(agentState.data.userProfile.coverImage)?agentState.data.userProfile.coverImage:image}
            />

           
          </div>

          
        </div>
      </div>

      <div className=" w-full p-2 md:p-8">
      <UserProfileBodyContainer />
      </div>

    
    </div>
  );
};

export default UserProfileOverviewScreen;
