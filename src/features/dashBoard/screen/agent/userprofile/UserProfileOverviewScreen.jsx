import image from "../../../../../assets/bodyImage3.svg";
import UserProfileBodyContainer from "../../../component/agent/userProfile/UserProfileBodyContainer";
import menuIcon from "../../../../../assets/menuIcon.svg";
import { openAgentProfileDrawer } from "../../../component/agent/userProfile/UserProfileDrawer";
import { useNavigate } from "react-router-dom";
import agentNameIcon from "../../../../../assets/agentprofile/agentNameIcon.svg";
import previewIcon from "../../../../../assets/agentprofile/previewIcon.svg";
import shareIcon from "../../../../../assets/agentprofile/profileShareIcon.svg";
import editIcon from "../../../../../assets/agentprofile/profileEditIcon.svg";
import heartIcon from "../../../../../assets/agentprofile/profileHeart.svg";
import starIcon from "../../../../../assets/agentprofile/profileStar.svg";
import {   useState } from "react";
import UserEditProfileScreen from "./UserEditProfileScreen";
import useGetUpdatedState from "../../../hooks/useGetUpdatedState";
import { X } from 'lucide-react';


const UserProfileOverviewScreen = () => {
  
 const {agentState} = useGetUpdatedState()
  

  const [toggleEditProfileScreen,setToggleEditProfileScreen]  = useState(false)
  const navigate = useNavigate();
  return (

    
    <div className=" font-nunito md:ml-[20%] w-full overflow-x-hidden relative">
      <div className="md:hidden md:aria-hidden:hidden w-full flex justify-end">
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
      </div>

      <div className="relative">
        <div className="m-8  ">
          <div className="bg-[#D9D9D9] w-full h-[200px] rounded-t-2xl flex">
            <img
              className="w-full h-full  object-cover rounded-t-2xl "
              src={(agentState.data.userProfile.coverImage)?agentState.data.userProfile.coverImage:image}
            />

            <div className="absolute   md:ms-8 top-[30%]   md:top-[45%]   z-50 left-6  bg-white  w-[100px] h-[100px]  md:w-[120px] md:h-[120px] rounded-full flex place-items-center shadow-2xl">
              
            <img
              className="w-full h-full  object-cover rounded-full "
              src={(agentState.data.userProfile.profileImage)?agentState.data.userProfile.profileImage:image}
            />
            </div>
          </div>

          <div className="  mt-[70px] md:ms-[150px] md:mt-2  flex flex-wrap  justify-start  md:justify-between gap-5 md:gap-3">
            <div className="">

              <div className="flex gap-5 font-bold text-xl">
                <p>
                  {agentState.data
                    ? agentState.data.userName
                    : "No name yet" }
                </p>
                <img src={agentNameIcon} alt="" />
              </div>
              
              <div className="flex">
                <p className="font-bold">Publishing As : </p>
                <p>{(agentState.data.userProfile.publishingAs)? agentState.data.userProfile.publishingAs :"Agent"}</p>
              </div>
              <div>
                
                <div className="flex place-items-center justify-center">
                <p className="font-bold">
                  Location:
                </p>
                <span className="text-ellipsis overflow-hidden whitespace-nowrap w-40">{`${ (!agentState.data.userProfile.localGovt && !agentState.data.userProfile.localGovt) && 'Nil'     ||   (agentState.data.userProfile.localGovt) &&agentState.data.userProfile.localGovt},${(agentState.data.userProfile.state) &&agentState.data.userProfile.state} ` }</span>
                </div>

              </div>
              <div className="flex gap-5 mt-2 ">
                <div className="flex  place-items-center gap-2">
                  <img src={heartIcon} alt=" " />
                  <p>(0-1m+)</p>
                </div>

                <div className="flex place-items-center gap-2">
                  <img src={starIcon} alt="" />
                  <p>(0-1m+)</p>
                </div>
              </div>
            </div>

            <div className="flex gap-5  flex-wrap md:justify-center  place-items-center md:place-items-start   ">
              <div className="bg-[#1C2E7A] flex text-white place-items-center gap-2 p-2 h-[35px] rounded-md min-w-[150px]">
                <img src={previewIcon} alt="" />
                <p
                  onClick={() => {
                    // socketConnectedReducerState.socket.emit('hello','i am calling uo oh.....')
                  }}
                >
                  Preview Profile
                </p>
              </div>
              <div className="bg-[#1C2E7A] flex text-white place-items-center gap-2 p-2 rounded-md h-[35px] min-w-[150px] ">
                <img src={shareIcon} alt="" />
                <p>Share Profile</p>
              </div>
              <div className="bg-[#1C2E7A] flex text-white place-items-center gap-2 p-2 rounded-md h-[35px] min-w-[150px] cursor-default" onClick={()=>{
                    setToggleEditProfileScreen(!toggleEditProfileScreen)
              }}>
                <img src={editIcon} alt=" " />
                <p>Edit Profile</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" w-full p-2 md:p-8">
      <UserProfileBodyContainer />
      </div>

      <div className={`${(toggleEditProfileScreen)? 'flex':'hidden'} absolute bg-transparent justify-center place-items-center  w-full h-[100vh] top-5 z-50`}>
        <UserEditProfileScreen updateUI= {()=>{
            setToggleEditProfileScreen(!toggleEditProfileScreen)
        }} />
      </div>
    </div>
  );
};

export default UserProfileOverviewScreen;
