//import { useLocation } from "react-router-dom";
//import previewIcon from "../../../../assets/agentprofile/previewIcon.svg";
//import shareIcon from "../../../../assets/agentprofile/profileShareIcon.svg";
import editIcon from "../../../../assets/agentprofile/profileEditIcon.svg";
import { useState } from "react";
import { ArrowLeft } from 'lucide-react';
import ClientEditProfileScreen from "../../component/client/ClientEditProfileScreen";
import useGetClientUpdatedState from "../../hooks/client/useGetClientUpdatedState";
import { useNavigate } from "react-router-dom";
const ClientProfileScreen = () => {
  const navigate = useNavigate()
  const { clientUpdatedState:state } = useGetClientUpdatedState();
  const [toggleEditProfileScreen, setToggleEditProfileScreen] = useState(false);

  return (
   <div className="bg-slate-200">
   <div className="md:ml-12 md:pt-12 pt-6 ml-6 " onClick={()=>{
            navigate("/client/dashboard")
          }}>
   <ArrowLeft />
   </div>
     <div className="w-full h-dvh  md:flex flex-wrap justify-center  pb-12 font-nunito relative">
       
      <div className="md:w-[60%] flex flex-col place-items-center p-6 md:p-10 relative">
        <div className="bg-[#D9D9D9]  w-full h-[200px] rounded-t-2xl relative">
          <img
            className="w-full h-full object-cover rounded-t-2xl"
            src={state.data.userProfile.coverImage ? state.data.userProfile.coverImage : "/"}
          />
          <div className="absolute bottom-[-50px] left-1/2 transform -translate-x-1/2 bg-[#D9D9D9] h-[100px] w-[100px] rounded-full border-4 border-white">
            <img
              src={
                state.data.userProfile && state.data.userProfile.profileImage
                  ? state.data.userProfile.profileImage
                  : "/"
              }
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
        <p className="mt-16 w-[200px] text-center">{state.data.userName}</p>

        <div className="flex  gap-5 flex-wrap mt-3 mb-2 md:flex-row justify-center place-items-center md:place-items-start">
      
       {/*   <div className="bg-[#1C2E7A] flex text-white place-items-center gap-2 p-2 h-[35px] rounded-md min-w-[150px]">
            <img src={previewIcon} alt="" />
            <p
              onClick={() => {
                // socketConnectedReducerState.socket.emit('hello','i am calling uo oh.....')
              }}
            >
              Preview Profile
            </p>
          </div>
          <div className="bg-[#1C2E7A] flex text-white place-items-center gap-2 p-2 rounded-md h-[35px] min-w-[150px]">
            <img src={shareIcon} alt="" />
            <p>Share Profile</p>
          </div>
         */ }
         
        
        </div>
        <div className="flex md:place-items-center">
          <p className="mt-4 font-bold text-xl text-center">
            {"Client's Details"}
            <span>%</span>
          </p>
        </div>

        <div className="text-sm space-y-3 mt-3">
          <p className="flex gap-2">
            Email: <span>{state.data && state.data.userEmail ? state.data.userEmail : "Nil"}</span>
          </p>
          <p className="flex gap-2">
            Phone Number: <span>{state.data && state.data.userPhoneNumber ? state.data.userPhoneNumber : "Nil"}</span>
          </p>
          <p className="flex gap-2">
            Date Of Birth: <span>{state.data && state.data.userProfile.dob ? state.data.userProfile.dob : "Nil"}</span>
          </p>
          <p className="flex gap-2">
            Address: <span>{state.data && state.data.userProfile.localGovt ? state.data.userProfile.localGovt : ""},{state.data && state.data.userProfile.state ? state.data.userProfile.state : "Nil"}</span>
          </p>
        </div>
        <div
            className="bg-[#1C2E7A] flex text-white place-items-center gap-2 p-2 rounded-md h-[35px] min-w-[150px] cursor-default mt-8"
            onClick={() => {
              setToggleEditProfileScreen(!toggleEditProfileScreen);
            }}
          >
            <img src={editIcon} alt=" " />
            <p>Edit Profile</p>
          </div>
        <div className={`${(toggleEditProfileScreen)? 'flex':'hidden'} absolute bg-transparent justify-center place-items-center  w-full h-[100vh] top-5 z-50`}>
              <ClientEditProfileScreen updateUI= {()=>{
                  setToggleEditProfileScreen(!toggleEditProfileScreen)
              }} />
    </div>
        
      </div>

       
      </div>
   </div>
    
  );
};

export default ClientProfileScreen;