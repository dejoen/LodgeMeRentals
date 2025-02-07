import messageIcon from "../../../../../assets/support/supportmessageIcon.svg";
import phoneIcon from "../../../../../assets/support/phonesupportIcon.svg";
import facebookIcon from "../../../../../assets/support/facebooksupportIcon.svg";
import instagramIcon from "../../../../../assets/support/instasupportIcon.svg";
import twitterIcon from "../../../../../assets/support/xsupportIcon.svg";
import whatsappIcon from "../../../../../assets/support/whatsappsupportIcon.svg";
import helpIcon from "../../../../../assets/support/supportmoreIcon.svg";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const HelpAndSupportContainer = () => {
  const [helpIconToggled, setHelpIconToggled] = useState(false);

  const navigate = useNavigate();
  return (
    <div className="  w-[98.6%] md:w-[80%] md:ml-[20%] mx-auto mt-[5.4rem] bg-white z-30 shadow-black shadow-md h-[87.6vh] cursor-default  rounded-lg ms-1 me-20 overflow-y-auto">
      <div className="font-bold text-3xl px-10 pt-10">
        <p>Welcome to LodgeMe Support</p>
      </div>

      <div className="w-full p-5 flex flex-wrap justify-center md:flex-nowrap">
        <div className="md:max-w-[350px] p-2">
          <p className="font-bold">Need any Help ? We are here for you</p>
          <p>
            This section is your go-to resource for resolving issues and
            ensuring smooth management of your rental business.
          </p>
        </div>

        <div className="p-2 w-full relative  ">
          <div className="place-self-center md:place-self-end md:mt-[55px] bg-[#BB7655] p-2 rounded-md text-white me-10">
            <div className="flex gap-2">
              <p> Select Help </p>
              <img
                src={helpIcon}
                onClick={() => {
                  setHelpIconToggled(!helpIconToggled);
                }}
              />
            </div>
          </div>
          <div
            className={`${helpIconToggled
              ? "flex"
              : "hidden"} absolute flex-col  right-0 rounded-md bg-white place-items-center  pt-6  z-50 w-[200px] h-[200px] me-12 shadow-black shadow-md`}
          >
            <p
              className="hover:underline"
              onClick={() => {
                navigate("/agent/dashboard/helpandsupport/accessibility");
                setHelpIconToggled(!helpIconToggled);
              }}
            >
              Accessibility
            </p>
            <p
              className="hover:underline"
              onClick={() => {
                setHelpIconToggled(!helpIconToggled);
                navigate("/agent/dashboard/helpandsupport/troubleShooting");

              }}
            >
              Troubleshooting
            </p>
            <p
              className="hover:underline"
              onClick={() => {
                setHelpIconToggled(!helpIconToggled);
                navigate("/faq");
              }}
            >
              FAQS
            </p>
            <p
              className="hover:underline"
              onClick={() => {
                setHelpIconToggled(!helpIconToggled);
                navigate("/agent/dashboard/helpandsupport/policies");
              }}
            >
              Policies
            </p>
          </div>
        </div>
      </div>

      <Outlet />

      <div className="w-full">
        <p className="place-self-center mt-5 text-2xl ">Contact Support</p>
        <div className="w-full flex justify-center place-items-center mt-2 mb-5 gap-4">
          <img className="h-[4vh] " src={messageIcon} />
          <img className="h-[4vh] " src={phoneIcon} />
          <img className="h-[4vh] " src={facebookIcon} />
          <img className="h-[4vh] " src={instagramIcon} />
          <img className="h-[4vh] " src={twitterIcon} />
          <img className="h-[4vh] " src={whatsappIcon} />
        </div>
      </div>
    </div>
  );
};

export default HelpAndSupportContainer;
