import useGetUpdatedState from "../../../hooks/useGetUpdatedState";
import agentNameIcon from "../../../../../assets/agentprofile/agentNameIcon.svg";
import previewIcon from "../../../../../assets/agentprofile/previewIcon.svg";
import shareIcon from "../../../../../assets/agentprofile/profileShareIcon.svg";
import editIcon from "../../../../../assets/agentprofile/profileEditIcon.svg";
import heartIcon from "../../../../../assets/agentprofile/profileHeart.svg";
import starIcon from "../../../../../assets/agentprofile/profileStar.svg";
import { useState } from "react";
import UserEditProfileScreen from "./UserEditProfileScreen";

const UserProfileAboutScreen = () => {
  const { agentState } = useGetUpdatedState();
  const [toggleEditProfileScreen, setToggleEditProfileScreen] = useState(false);

  return (
    <div className="w-full pe-10 ">
      <div className="w-full flex gap-10 m-16">
        <div className="">
          <img
            className="w-[120px] h-[120px]  object-cover rounded-full "
            src={agentState.data.userProfile.profileImage ? agentState.data.userProfile.profileImage : image}
          />
        </div>

        <div className="  ">
          <div className="">
            <div className="flex gap-5 font-bold text-xl">
              <p>{agentState.data ? agentState.data.userName : "No name yet"}</p>
              <img src={agentNameIcon} alt="" />
            </div>

            <div className="flex">
              <p className="font-bold">Publishing As : </p>
              <p>{agentState.data.userProfile.publishingAs ? agentState.data.userProfile.publishingAs : "Agent"}</p>
            </div>
            <div>
              <div className="flex place-items-center justify-center">
                <p className="font-bold">Location:</p>
                <span className="text-ellipsis overflow-hidden whitespace-nowrap w-40">{`${(!agentState.data.userProfile.localGovt && !agentState.data.userProfile.localGovt && "Nil") || (agentState.data.userProfile.localGovt && agentState.data.userProfile.localGovt)},${agentState.data.userProfile.state && agentState.data.userProfile.state} `}</span>
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

          <div
            className="  mt-5 ms-8 bg-[#1C2E7A] flex text-white place-items-center gap-2 p-2 rounded-md h-[35px] w-fit cursor-default"
            onClick={() => {
              setToggleEditProfileScreen(!toggleEditProfileScreen);
            }}
          >
            <img src={editIcon} alt=" " />
            <p>Edit Profile</p>
          </div>
          {/*<div className="flex gap-5  flex-wrap md:justify-center  place-items-center md:place-items-start   ">
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
            </div>*/}
        </div>

        <div />
      </div>
      <div className="w-full h-[1px] border"></div>
      <div className="m-5 w-full justify-center leading-[30px]">
        {agentState.data.userProfile.about
          ? agentState.data.userProfile.about
          : ` A Profile description of agent goes here, and should not be morethan 70 Characters A Profile description of agent goes here, and
              should not be more than 70 Characters A Profile description of agent
          goes here, and should not be more than 70 Characters A Profile
          description of agent goes here, and should not be more than 70
          Characters A Profile description of agent goes here, and should not
          be more than 70 Characters A Profile description of agent goes here,
          and should not be more than 70 Characters A Profile description of
          agent goes here, and should not be more than 70 Characters A Profile
          description of agent goes here, and should not be more than 70
          Characters A Profile description of agent goes here, and should not
          be more than 70 Characters A Profile description of agent goes here,
          and should not be more than 70 Characters A Profile description of
          agent goes here, and should not be more than 70 Characters A Profile
          description of agent goes here, and should not be more than 70
          Characters A Profile description of agent goes here, and should not
          be more than 70 Characters A Profile description of agent goes here,
          and should not be more than 70 Characters A Profile description of
          agent goes here, and should not be more than 70 Characters`}
      </div>

      <div
        className={`${toggleEditProfileScreen ? "flex" : "hidden"} absolute bg-transparent justify-center place-items-center  w-full h-[100vh] top-5 z-50`}
      >
        <UserEditProfileScreen
          updateUI={() => {
            setToggleEditProfileScreen(!toggleEditProfileScreen);
          }}
        />
      </div>
    </div>
  );
};

export default UserProfileAboutScreen;
