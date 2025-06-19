/* eslint-disable react/prop-types */
import lodgeMeIcon from "../../../assets/lodgeMeIcon.svg";
import clientIcon from "../../../assets/clienticon.svg";
import agentIcon from "../../../assets/agenticon.svg";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";

const GetStartedPopUp = (props) => {
  const navigate = useNavigate();
  return (
    <div className="animate-popUpAnimation font-nunito  w-full  h-fit pb-5  bg-white rounded-3xl">
      <p
        className="mt-8 ms-5 font-bold text-2xl"
        onClick={() => {
          props.closeScreen();
        }}
      >
        {" "}
        <X />
      </p>
      <div className="flex flex-col place-items-center justify-center h-full">
        <img src={lodgeMeIcon} />
        <p className="font-bold mt-5">Get Started</p>
        <p className="font-bold mt-5">
          Already have an account?
          <span className="text-blue-600 ms-1">Signin</span>
        </p>
        <p className="font-bold mt-8">Sign up as</p>
        <div className="w-full p-5 flex flex-wrap place-items-center justify-evenly">
          <div
            className="mt-5 border-black border text-center px-4 py-10 w-fit p-2 border-opacity-30 rounded-md hover:shadow-lg"
            onClick={() => {
              navigate("/register-as-client");
            }}
          >
            <div className="flex place-items-center  gap-2 m-2 justify-center">
              <img className="w-[40px]" src={clientIcon} />
              <p className="font-bold">Client</p>
            </div>
            <p className="font-bold ">Individual seeking comfortable living space.</p>
          </div>

          <div
            className="   mt-10 border-black border px-4 py-10 w-fit p-2 border-opacity-30 rounded-md  hover:shadow-lg"
            onClick={() => {
              navigate("/register-as-agent");
            }}
          >
            <div className="flex place-items-center gap-2 m-2 justify-center">
              <img className="w-[40px]" src={agentIcon} />
              <p className="font-bold">Agent</p>
            </div>
            <p className="font-bold ">Individual dedicated to providing your dream home.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStartedPopUp;
