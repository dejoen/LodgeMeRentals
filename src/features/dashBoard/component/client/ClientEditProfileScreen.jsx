import { CircularProgress } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import useGetImage from "../../hooks/useGetImage";
import useGetAllStateData from "../../hooks/useGetAllStateData";
import { X } from "lucide-react";
import { any } from "prop-types";
import useGetUpdatedState from "../../hooks/useGetUpdatedState";
import useUpdateClientProfile from "../../hooks/client/useUpdateClientProfile";

const ClientEditProfileScreen = ({ updateUI }) => {
  const profilePicRef = useRef();
  const coverImageRef = useRef();

  const { data } = useGetImage([profilePicRef.current, coverImageRef.current]);
  const { getAllStateNames, localGovt, getStateLocalGovtArea } = useGetAllStateData();
  const { updateProfileRequest, errorMessage, progressBar, setUpdatedProfileSuccessfully, updatedProfileSuccessfully } =
    useUpdateClientProfile();

  const { agentState } = useGetUpdatedState();

  const [localImageData, setLocalImageData] = useState({
    localProfileImage: "",
    localCoverImage: "",
  });

  const [updateProfileFormData, setUpdateProfileFormData] = useState({
    coverImage: "",
    profileImage: "",
    email: "",
    state: "",
    localGovt: "",
    userName: "",
    dob: "",
  });

  const [localError, setLocalError] = useState();

  useEffect(() => {
    if (data.profileImageString !== "") {
      setUpdateProfileFormData({
        ...updateProfileFormData,
        profileImage: data.profileImageString.split(",")[1],
      });
      setLocalImageData({
        ...localImageData,
        localProfileImage: data.profileImageString,
      });
    }

    if (data.coverImageString !== "") {
      setUpdateProfileFormData({
        ...updateProfileFormData,
        coverImage: data.coverImageString.split(",")[1],
      });

      setLocalImageData({
        ...localImageData,
        localCoverImage: data.coverImageString,
      });
    }
  }, [data]);

  useEffect(() => {
    if (updatedProfileSuccessfully) {
      profilePicRef.current.value = "";
      coverImageRef.current.value = "";
      setLocalImageData({
        ...localImageData,
        localCoverImage: "",
        localProfileImage: "",
      });
      setUpdateProfileFormData({
        coverImage: "",
        profileImage: "",
        email: "",
        state: "",
        localGovt: "",
        userName: "",
        dob: "",
      });
      updateUI();
      setUpdatedProfileSuccessfully(false);
    }
  }, [updatedProfileSuccessfully]);

  return (
    <div className="fixed inset-0 bg-black  bg-opacity-50 flex justify-center items-center z-50">
      <div className="font-nunito h-[560px] relative bg-white shadow-black shadow-md rounded-lg w-[90%] md:w-[70%] md:m-10 mx-4 max-h-[600px] overflow-y-auto overflow-x-hidden">
        <p
          className="absolute right-0 m-4 font-bold text-2xl cursor-pointer"
          onClick={() => {
            profilePicRef.current.value = "";
            coverImageRef.current.value = "";
            setLocalImageData({
              ...localImageData,
              localCoverImage: "",
              localProfileImage: "",
            });
            setUpdateProfileFormData({
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

              userName: "",
            });
            updateUI();
          }}
        >
          <X />
        </p>

        <div className="md:m-5 p-2 md:p-0 mx-auto justify-center place-items-center">
          <p className="font-bold pt-5 pb-5 text-3xl">Edit User Profile</p>
          <p className="w-[90%] mx-auto text-center mb-3">
            <span className="font-bold">Note:</span> You can choose what you want to specifically update as all fields
            are optional and at least one field should be selected before clicking save button.
          </p>
          <div className="flex flex-col place-items-center mb-5">
            <img
              className="bg-green-300 w-[100px] h-[100px] rounded-full"
              src={localImageData.localProfileImage}
              alt=""
            />
            <p
              className="underline cursor-pointer"
              accept="image/*"
              onClick={() => {
                profilePicRef.current.click();
              }}
            >
              Click to upload Profile Picture
            </p>

            <input ref={profilePicRef} type="file" accept="image/*" className="hidden" onChange={() => {}} />
          </div>

          <div className="flex flex-col place-items-center">
            <img
              className="bg-green-300 w-[100px] h-[100px] rounded-full"
              src={localImageData.localCoverImage}
              alt=""
            />
            <p
              className="underline cursor-pointer"
              onClick={() => {
                coverImageRef.current.click();
              }}
            >
              Click to upload Cover Picture
            </p>
            <input ref={coverImageRef} type="file" accept="image/*" className="hidden" />
          </div>

          {/* <div className="flex flex-col border p-1 w-full md:w-[50%] mt-5 rounded-md cursor-default">
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
         */}

          <div className="flex flex-col border w-full p-1 md:w-[50%] mt-5 rounded-md cursor-default">
            <label htmlFor="lastName">User Name</label>
            <input
              className="outline-none cursor-default"
              type="text"
              id="userName"
              placeholder="Enter your user name"
              value={updateProfileFormData.userName}
              onChange={(e) => {
                setUpdateProfileFormData({
                  ...updateProfileFormData,
                  userName: e.target.value,
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
              onChange={(e) => {
                setUpdateProfileFormData({
                  ...updateProfileFormData,
                  email: e.target.value,
                });
              }}
            />
          </div>

          <div className="flex flex-col border w-full p-1 md:w-[50%] mt-5 rounded-md cursor-default">
            <label htmlFor="lastName">Date of Birth</label>
            <input
              className="outline-none cursor-default"
              type="text"
              id="dob"
              placeholder="Enter your date  of birth e.g 05/4/1990"
              value={updateProfileFormData.dob}
              onChange={(e) => {
                setUpdateProfileFormData({
                  ...updateProfileFormData,
                  dob: e.target.value,
                });
              }}
            />
          </div>

          <div className="flex flex-col border p-1 w-full md:w-[50%] mt-5 rounded-md cursor-default">
            <label htmlFor="State">State</label>
            <select
              id="State"
              onChange={(e) => {
                setUpdateProfileFormData({
                  ...updateProfileFormData,
                  state: e.target.value,
                });
                getStateLocalGovtArea(e.target.value);
              }}
            >
              {getAllStateNames().map((name, index) => (
                <option key={index}>{name}</option>
              ))}
            </select>
          </div>

          <div className="flex flex-col border p-1 w-full md:w-[50%] mt-5 rounded-md cursor-default">
            <label htmlFor="localGovt">Local Government</label>
            <select
              id="localGovt"
              onChange={(e) => {
                setUpdateProfileFormData({
                  ...updateProfileFormData,
                  localGovt: e.target.value,
                });
              }}
            >
              {localGovt.map((name, index) => (
                <option key={index}>{name}</option>
              ))}
            </select>
          </div>
          {/*
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

          <div className="flex flex-col border p-1 w-full md:w-[50%] mt-5 rounded-md cursor-default">
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

          <div className="flex flex-col border p-1 w-full md:w-[50%] mt-5 rounded-md cursor-default">
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

*/}

          <div className="m-5 flex gap-5">
            <div>
              <p
                className="text-center text-white bg-[#1C2E7A] p-2 rounded-lg w-[60px] cursor-pointer"
                onClick={() => {
                  setLocalError("");
                  if (
                    Object.entries(updateProfileFormData).every(([key, value]) => {
                      return value === "";
                    })
                  ) {
                    setLocalError("Atleast on field should be provided.");
                    return;
                  }

                  updateProfileRequest(agentState.data.token, updateProfileFormData);
                }}
              >
                Save
              </p>
            </div>
            <div className={`${progressBar ? "block" : "hidden"}`}>
              <CircularProgress size={40} />
            </div>

            <p className={`${errorMessage !== "no error" && !progressBar ? "block mt-2" : "hidden"} text-red-600`}>
              {errorMessage}
            </p>
            {
              <p
                className={`${
                  errorMessage !== "no error" && !progressBar && localError ? "block" : "hidden"
                } text-red-600`}
              >
                {localError}
              </p>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

ClientEditProfileScreen.propTypes = {
  updateUI: any,
};

export default ClientEditProfileScreen;
