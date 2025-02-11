import { useLocation } from "react-router-dom";
import previewIcon from "../../../../assets/agentprofile/previewIcon.svg";
import shareIcon from "../../../../assets/agentprofile/profileShareIcon.svg";
import editIcon from "../../../../assets/agentprofile/profileEditIcon.svg";
import { useState } from "react";

const ClientProfileScreen = () => {
  const { state } = useLocation();
  const [toggleEditProfileScreen, setToggleEditProfileScreen] = useState(false);

  return (
    <div className="w-full bg-slate-200 md:flex flex-wrap justify-center h-fit pb-12 font-nunito relative">
      <div className="md:w-[60%] flex flex-col place-items-center p-6 md:p-10 relative">
        <div className="bg-[#D9D9D9] md:mt-10 w-full h-[200px] rounded-t-2xl relative">
          <img
            className="w-full h-full object-cover rounded-t-2xl"
            src={state.data.userProfile.coverImage ? state.data.userProfile.coverImage : "/"}
          />
          <div className="absolute bottom-[-50px] left-1/2 transform -translate-x-1/2 bg-[#D9D9D9] h-[100px] w-[100px] rounded-full border-4 border-white">
            <img
              src={
                state.data.userProfile && state.data.userProfile.profilePicture
                  ? state.data.userProfile.profilePicture
                  : "/"
              }
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
        <p className="mt-16 w-[200px] text-center">{state.data.userName}</p>

        <div className="flex  gap-5 flex-wrap mt-3 mb-2 md:flex-row justify-center place-items-center md:place-items-start">
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
          <div className="bg-[#1C2E7A] flex text-white place-items-center gap-2 p-2 rounded-md h-[35px] min-w-[150px]">
            <img src={shareIcon} alt="" />
            <p>Share Profile</p>
          </div>
          <div
            className="bg-[#1C2E7A] flex text-white place-items-center gap-2 p-2 rounded-md h-[35px] min-w-[150px] cursor-default"
            onClick={() => {
              setToggleEditProfileScreen(!toggleEditProfileScreen);
            }}
          >
            <img src={editIcon} alt=" " />
            <p>Edit Profile</p>
          </div>
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
            Address: <span>{state.data && state.data.userProfile.phoneNumber ? state.data.userProfile.phoneNumber : "Nil"}</span>
          </p>
        </div>

        
      </div>
    </div>
  );
};

export default ClientProfileScreen;