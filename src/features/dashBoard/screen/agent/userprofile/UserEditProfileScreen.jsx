import { CircularProgress } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import useGetImage from "../../../hooks/useGetImage";
import useGetAllStateData from "../../../hooks/useGetAllStateData";
import useUpdateAgentProfile from "../../../hooks/useUpdateAgentProfile";

import { any } from "prop-types";
import useGetUpdatedState from "../../../hooks/useGetUpdatedState";

const UserEditProfileScreen = ({ updateUI }) => {
  const profilePicRef = useRef();
  const coverImageRef = useRef();

  const {data} = useGetImage([profilePicRef.current, coverImageRef.current]);
  const {
    getAllStateNames,
    localGovt,
    getStateLocalGovtArea
  } = useGetAllStateData();
  const {updateProfileRequest,errorMessage,progressBar,setUpdatedProfileSuccessfully,updatedProfileSuccessfully}= useUpdateAgentProfile();
 
  const {agentState} = useGetUpdatedState()
  

  const [updateProfileFormData, setUpdateProfileFormData] = useState({
    coverImage: "",
    profileImage: "",
    firstName: "",
    lastName: "",
    email: "",
    language: "",
    gender: "",
    about: "",
    country: "Nigeria",
    state: "",
    localGovt: "",
    postalCode: "",
    publishingAs:'Agent',
    userName:""
  });

  useEffect(
    () => {
     
      if (data.profileImageString !== '') {
        setUpdateProfileFormData({
          ...updateProfileFormData,
         profileImage:data.profileImageString.split(',')[1]
        });

      }

        if (data.coverImageString !== '') {
          
          setUpdateProfileFormData({
            ...updateProfileFormData,
            coverImage: data.coverImageString.split(',')[1]
          });
        }
     
    },
    [
      
      data,
    ]
  );


  useEffect(()=>{
      if(updatedProfileSuccessfully) {
        updateUI()
        setUpdatedProfileSuccessfully(false)
      }
  },[updatedProfileSuccessfully])



  



  return (
    <div className=" font-nunito relative bg-white   shadow-black shadow-md  rounded-lg  w-full m-10 max-h-[600px] overflow-y-auto ">
      <p
        className="absolute right-0 m-4 font-bold text-2xl cursor-default"
        onClick={() => {
          updateUI();
        }}
      >
        X
      </p>

      <div className="md:m-5 p-2 md:p-0 w-full justify-center place-items-center ">
        <p className="font-bold pt-5 pb-5">Edit User Profile</p>

        <div className="flex flex-col place-items-center mb-5">
          <img
            className=" bg-green-300   w-[100px] h-[100px] rounded-full"
            src={data.profileImageString}
            alt=""
          />
          <p
            className="underline" accept="image/*"
            onClick={() => {
              profilePicRef.current.click();
            }}
          >
            Click to upload Profile Picture
          </p>

          <input
            ref={profilePicRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={() => {}}
          />
        </div>

        <div className="flex flex-col place-items-center">
          <img
            className=" bg-green-300   w-[100px] h-[100px] rounded-full"
            src={data.coverImageString}
            alt=""
          />
          <p
            className="underline "
            onClick={() => {
              coverImageRef.current.click();
            }}
          >
            Click to upload Cover Picture
          </p>
          <input ref={coverImageRef} type="file" accept="image/*" className="hidden" />
        </div>


        <div className="flex flex-col border p-1 w-full md:w-[50%] mt-5 rounded-md cursor-default">
          <label htmlFor="firstName">First Name</label>
          <input
            className="outline-none cursor-default"
            type="text"
            id="firstName"
            placeholder="Enter your first name."
            value={updateProfileFormData.firstName}
            onChange={e => {
              setUpdateProfileFormData({
                ...updateProfileFormData,
                firstName: e.target.value
              });
            }}
          />
        </div>

        <div className="flex flex-col border w-full p-1 md:w-[50%] mt-5 rounded-md cursor-default">
          <label htmlFor="lastName">Last Name</label>
          <input
            className="outline-none cursor-default"
            type="text"
            id="lastName"
            placeholder="Enter your last name"
            value={updateProfileFormData.lastName}
            onChange={e => {
              setUpdateProfileFormData({
                ...updateProfileFormData,
                lastName: e.target.value
              });
            }}
          />
        </div>

        <div className="flex flex-col border w-full p-1 md:w-[50%] mt-5 rounded-md cursor-default">
          <label htmlFor="lastName">User Name</label>
          <input
            className="outline-none cursor-default"
            type="text"
            id="userName"
            placeholder="Enter your user name"
            value={updateProfileFormData.userName}
            onChange={e => {
              setUpdateProfileFormData({
                ...updateProfileFormData,
                userName: e.target.value
              });
            }}
          />
        </div>

        <div className="flex flex-col w-full border p-1 md:w-[50%] mt-5 rounded-md cursor-default">
          <label htmlFor="email">Email</label>
          <input
            className="outline-none cursor-default"
            type="email"
            id="email"
            placeholder="Enter email"
            value={updateProfileFormData.email}
            onChange={e => {
              setUpdateProfileFormData({
                ...updateProfileFormData,
                email: e.target.value
              });
            }}
          />
        </div>

        <div className="flex flex-col w-full border p-1 md:w-[50%] mt-5 rounded-md cursor-default">
          <label htmlFor="Language">Language</label>
          <input
            className="outline-none cursor-default"
            type="text"
            id="Language"
            placeholder="Language you speak eg.English,Igbo"
            value={updateProfileFormData.language}
            onChange={e => {
              setUpdateProfileFormData({
                ...updateProfileFormData,
                language: e.target.value
              });
            }}
          />
        </div>

        <div className="flex flex-col border p-1 w-full md:w-[50%] mt-5 rounded-md cursor-default">
          <label htmlFor="gender">Gender</label>
          <select
            id="gender"
            onChange={e => {
              setUpdateProfileFormData({
                ...updateProfileFormData,
                gender: e.target.value
              });
            }}
          >
            <option>Please choose gender.</option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>

        <div className="flex flex-col border p-1 w-full md:w-[50%] mt-5 rounded-md cursor-default">
          <label htmlFor="agent">Publishing As</label>
          <select
            id="agent"
            onChange={e => {
              setUpdateProfileFormData({
                ...updateProfileFormData,
              publishingAs: e.target.value
              });
            }}
          >
           
            <option>Agent</option>
            <option>Landlord</option>
          </select>
        </div>

        <div className="flex flex-col border p-1 w-full md:w-[50%] mt-5 rounded-md cursor-default">
          <label htmlFor="about">About</label>
          <input
            className="outline-none cursor-default"
            type="text"
            id="about"
            placeholder="Little description about you"
            value={updateProfileFormData.about}
            onChange={e => {
              setUpdateProfileFormData({
                ...updateProfileFormData,
                about: e.target.value
              });
            }}
          />
        </div>

        <div className="flex flex-col border p-1 w-full md:w-[50%] mt-5 rounded-md cursor-default">
          <label htmlFor="Country">Country</label>
          <select
            id="Country"
            onChange={e => {
              setUpdateProfileFormData({
                ...updateProfileFormData,
                country: e.target.value
              });
            }}
          >
            <option>Nigeria</option>
          </select>
        </div>

        <div className="flex flex-col border p-1 w-full  md:w-[50%] mt-5 rounded-md cursor-default">
          <label htmlFor="State">State</label>
          <select
            id="State"
            onChange={e => {
              setUpdateProfileFormData({
                ...updateProfileFormData,
                state: e.target.value
              });
              getStateLocalGovtArea(e.target.value);
            }}
          >
            {getAllStateNames().map((name, index) =>
              <option key={index}>
                {name}
              </option>
            )}
          </select>
        </div>

        <div className="flex flex-col border p-1 w-full md:w-[50%] mt-5 rounded-md cursor-default">
          <label htmlFor="localGovt">Local Government</label>
          <select
            id="localGovt"
            onChange={e => {
              setUpdateProfileFormData({
                ...updateProfileFormData,
                localGovt: e.target.value
              });
            }}
          >
            {localGovt.map((name, index) =>
              <option key={index}>
                {name}
              </option>
            )}
          </select>
        </div>

        <div className="flex flex-col border p-1 w-full  md:w-[50%] mt-5 rounded-md cursor-default">
          <label htmlFor="postalCode">Postal Code</label>
          <input
            className="outline-none cursor-default"
            type="text"
            id="postalCode"
            placeholder="postal code"
            value={updateProfileFormData.postalCode}
            onChange={e => {
              setUpdateProfileFormData({
                ...updateProfileFormData,
                postalCode: e.target.value
              });
            }}
          />
        </div>

        <div className="m-5 flex gap-5 ">
          <div>
            <p
              className="text-center text-white bg-[#1C2E7A] p-2 rounded-lg  w-[60px]"
              onClick={() => {
               
                updateProfileRequest(agentState.data.token, 
                updateProfileFormData
                );
              }}
            >
              Save
            </p>
          </div>
          <div className={`${(progressBar) ? 'block':'hidden'}`}>
          <CircularProgress  size={40} />
          </div>
        
          <p className={`${(errorMessage !== 'no error' && !progressBar ) ? 'block':'hidden'} text-red-600`} >{
            errorMessage}
          </p>
        </div>
        
      </div>
    </div>
  );
};

UserEditProfileScreen.propTypes = {
  updateUI:any
};

export default UserEditProfileScreen;
