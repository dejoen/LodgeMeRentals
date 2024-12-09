import { CircularProgress } from "@mui/material";
import { useRef, useState } from "react";
import useGetProfileImage from "../../../hooks/useGetProfileImage";

const UserEditProfileScreen = ({ updateUI }) => {
  const profilePicRef = useRef()
  const profileImage = useGetProfileImage(profilePicRef.current)
  

  const [updateProfileFormData,setUpdateProfileFormData] = useState({
        imageBase64:'',
        firstName:'',
        lastName:'',
        email:'',
        language:'',
        gender:'',
        about:'',
        country:'',
        localGovt:'',
        postalCode:''

  })

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

      <div className="m-5 w-full justify-center place-items-center ">
        <p className="font-bold pt-5 pb-5">Edit User Profile</p>
        <img
          className=" bg-green-300   w-[100px] h-[100px] rounded-full"
          src="/"
          alt=""

          onClick={()=>{
             profilePicRef.current.click()
             
          }}
        />
          <input ref={profilePicRef} type="file" className="hidden" />

        <div className="flex flex-col border p-1 md:w-[30%] mt-5 rounded-md cursor-default">
          <label htmlFor="firstName">First Name</label>
          <input
            className="outline-none cursor-default"
            type="text"
            id="firstName"
            placeholder="Enter your first name."
          />
        </div>

        <div className="flex flex-col border p-1 md:w-[30%] mt-5 rounded-md cursor-default">
          <label htmlFor="lastName">Last Name</label>
          <input
            className="outline-none cursor-default"
            type="text"
            id="lastName"
            placeholder="Enter your last name"
          />
        </div>

        <div className="flex flex-col border p-1 md:w-[30%] mt-5 rounded-md cursor-default">
          <label htmlFor="email">Email</label>
          <input
            className="outline-none cursor-default"
            type="email"
            id="about"
            placeholder="Enter email"
          />
        </div>

        <div className="flex flex-col border p-1 md:w-[30%] mt-5 rounded-md cursor-default">
          <label htmlFor="Language">Language</label>
          <input
            className="outline-none cursor-default"
            type="text"
            id="Language"
            placeholder="Language you speak eg.English,Igbo"
          />
        </div>

        <div className="flex flex-col border p-1 md:w-[30%] mt-5 rounded-md cursor-default">
          <label htmlFor="gender">Gender</label>
          <select id="gender">
            <option>Please choose gender.</option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>

        <div className="flex flex-col border p-1 md:w-[30%] mt-5 rounded-md cursor-default">
          <label htmlFor="about">About</label>
          <input
            className="outline-none cursor-default"
            type="text"
            id="about"
            placeholder="Little description about you"
          />
        </div>

        <div className="flex flex-col border p-1 w-[45%] md:w-[30%] mt-5 rounded-md cursor-default">
          <label htmlFor="Country">Country</label>
          <select id="Country">
            <option>Nigeria</option>
          </select>
        </div>

        <div className="flex flex-col border p-1  w-[45%]  md:w-[30%] mt-5 rounded-md cursor-default">
          <label htmlFor="State">State</label>
          <select id="State">
            <option>Nigeria</option>
          </select>
        </div>

        <div className="flex flex-col border p-1 w-[45%] md:w-[30%] mt-5 rounded-md cursor-default">
          <label htmlFor="about">Local Government</label>
          <select>
            <option>Nigeria</option>
          </select>
        </div>

        <div className="flex flex-col border p-1  w-[45%]  md:w-[30%] mt-5 rounded-md cursor-default">
          <label htmlFor="postalCode">Postal Code</label>
          <input
            className="outline-none cursor-default"
            type="text"
            id="postalCode"
            placeholder="postal code"
          />
        </div>

        <div className="m-5 flex gap-5 ">
          <div>
            <p className="text-center text-white bg-[#1C2E7A] rounded-lg  w-[60px]">
              Save
            </p>
          </div>
          <CircularProgress size={20} />
        </div>
      </div>
    </div>
  );
};

UserEditProfileScreen.propTypes = {
  updateUI: Function
};

export default UserEditProfileScreen;
