/* eslint-disable react-refresh/only-export-components */

import { useContext, useState } from "react";
import PropTypes from "prop-types";
import clientProfileIcon from "../../../../assets/clientProfileIcon.svg";
//import AppointmentCard from './menuCards/AppointmentCard';
import InboxCard from "./menuCards/InboxCard";
import NotificationCard from "./menuCards/NotificationCard";
import ProfileCard from "./menuCards/ProfileCard";
import { CombineContext } from "../../../../context/CombineContextProvider";
import { ChevronRight, ChevronDown, X } from "lucide-react";
import { CardType } from "../../../../utils/CardType";

const ClientNavDrawer = (props) => {
  const { clientReducerState } = useContext(CombineContext);

  const [activeCard, setActiveCard] = useState({
    accountCard: {
      isActive: false,
    },
    inboxCard: {
      isActive: false,
    },
    appointmentCard: {
      isActive: false,
    },
    notificationCard: {
      isActive: false,
    },
  });

  return (
    <div className="ClientNavBar  hidden md:hidden w-[300px] rounded-l-2xl absolute bg-white  shadow-md shadow-black top-0 bottom-0 right-0 z-[1000] overflow-y-auto overflow-x-hidden ">
      <p
        className="m-3 font-bold text-2xl"
        onClick={() => {
          closeClientDrawer();
        }}
      >
        {" "}
        <X />
      </p>

      <div className="w-full flex flex-col place-items-center justify-center">
        <div className="">
          <img
            className="w-[60px]  md:w-[40px]  h-[68px]
             "
            src={clientProfileIcon}
            onPointerOver={() => {
              props.setIconOver(CardType.PROFILE);
            }}
          />
        </div>
        <p className="text-xl">{clientReducerState.data.userName}</p>
        <p className="text-md">{clientReducerState.data.userEmail}</p>
      </div>

      <div className="m-5">
        <div className=" border-b border-black p-1">
          <p className="flex items-center gap-1 text-xl pb-4 pl">
            Account{" "}
            <span
              className="animate-pulse"
              onClick={() => {
                setActiveCard((prev) => {
                  return {
                    ...prev,
                    accountCard: {
                      isActive: !activeCard.accountCard.isActive,
                    },
                    inboxCard: {
                      isActive: false,
                    },
                    appointmentCard: {
                      isActive: false,
                    },
                    notificationCard: {
                      isActive: false,
                    },
                  };
                });
              }}
            >
              {activeCard.accountCard.isActive ? <ChevronDown className="pt-1" /> : <ChevronRight className="pt-1" />}
            </span>
          </p>

          <div className="w-full ">
            {activeCard.accountCard.isActive ? <ProfileCard display={"flex"} /> : <ProfileCard display={"hidden"} />}
          </div>
        </div>

        <div className=" border-b border-black p-1">
          <p className="flex items-center  text-xl pb-4">
            Inbox
            <span
              className="animate-pulse"
              onClick={() => {
                setActiveCard((prev) => {
                  return {
                    ...prev,
                    accountCard: {
                      isActive: false,
                    },
                    inboxCard: {
                      isActive: !activeCard.inboxCard.isActive,
                    },
                    appointmentCard: {
                      isActive: false,
                    },
                    notificationCard: {
                      isActive: false,
                    },
                  };
                });
              }}
            >
              {activeCard.inboxCard.isActive ? <ChevronDown className="pt-1" /> : <ChevronRight className="pt-1" />}
            </span>
          </p>
          <div>{activeCard.inboxCard.isActive ? <InboxCard display={"flex"} /> : <InboxCard display={"hidden"} />}</div>
        </div>

        {/*}  <div className=' border-b border-black p-1'>

            <p className='flex items-center  text-xl pb-4'>Appointment <span className='animate-pulse ' onClick={()=>{
       
       setActiveCard((prev)=>{
        return {
           ...prev,
           accountCard:{
               isActive:false
           },
           inboxCard:{
               isActive:false
           },
           appointmentCard:{
               isActive:! activeCard.appointmentCard.isActive
           },
           notificationCard:{
               isActive:false
           },
           
        }
    })
                
            }}>{(activeCard.appointmentCard.isActive)?   <ChevronDown className='pt-1'/>: <ChevronRight className='pt-1'/>}</span></p>
            <div>
            {(activeCard.appointmentCard.isActive)?   <AppointmentCard display={'flex'}/> : <AppointmentCard display={'hidden'}/>} 
           
            </div>
        </div> */}

        <div>
          <p className="flex items-center  text-xl pb-4">
            Notification<span className="">{"(0)"}</span>
            <span
              className="animate-pulse"
              onClick={() => {
                setActiveCard((prev) => {
                  return {
                    ...prev,
                    accountCard: {
                      isActive: false,
                    },
                    inboxCard: {
                      isActive: false,
                    },
                    appointmentCard: {
                      isActive: false,
                    },
                    notificationCard: {
                      isActive: !activeCard.notificationCard.isActive,
                    },
                  };
                });
              }}
            >
              {activeCard.notificationCard.isActive ? (
                <ChevronDown className="pt-1" />
              ) : (
                <ChevronRight className="pt-1" />
              )}
            </span>
          </p>
          <div className="">
            {activeCard.notificationCard.isActive ? (
              <NotificationCard display={"flex"} />
            ) : (
              <NotificationCard display={"hidden"} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export const openClientDrawer = () => {
  const drawer = document.querySelector(".ClientNavBar ");
  drawer.style.display = "block";
  drawer.animate(
    [
      {
        transform: "translateX(100%)",
      },
      {
        transform: "translateX(0%)",
      },
    ],
    {
      duration: 500,
    },
  );

  return drawer;
};

export const closeClientDrawer = () => {
  const drawer = document.querySelector(".ClientNavBar ");
  drawer.animate(
    [
      {
        transform: "translateX(0%)",
      },
      {
        transform: "translateX(100%)",
      },
    ],
    {
      duration: 500,
    },
  ).onfinish = () => {
    drawer.style.display = "none";
  };

  return drawer;
};
ClientNavDrawer.propTypes = {
  setIconOver: PropTypes.func.isRequired,
};

export default ClientNavDrawer;
