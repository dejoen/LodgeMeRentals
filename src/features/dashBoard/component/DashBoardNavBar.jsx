import LodgeMeIcon from "../../../assets/lodgeMeIcon.svg";

import dashBoardMenu from "../../../assets/dmenuicon.svg";
import dashBoardMessageIcon from "../../../assets/dmessageicon.svg";
//import dashBoardAppointment from "../../../assets/dappointmenticon.svg";
import dashBoardNotification from "../../../assets/dnotificationicon.svg";
//import dashBoardSettings from "../../../assets/dsettingsicon.svg";
//import requestIcon from "../../../assets/requesticon.svg";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import useGetAgentNotificationState from "../hooks/useGetAgentNotificationState";
import useManageAgentState from "../hooks/useManageAgentState";

const DashBoardNavBar = () => {
  const location = useLocation();

  const {updatedNotification} = useGetAgentNotificationState()
  const {notificationState} = useManageAgentState()
 
  const [activeContainer, setActiveContainter] = useState(() => {

    switch (location.pathname.split("/")[2]) {
     
      case "dashboard": {
      
        return {
          dashboardNav: {
            isActive: true
          },
          requestNav: {
            isActive: false
          },
          messageNav: {
            isActive: false
          },
          appointmentNav: {
            isActive: false
          },
          notificationNav: {
            isActive: false
          },
          SettingsNav: {
            isActive: false
          }
        };
      }

      case "requests": {
        return {
          dashboardNav: {
            isActive: false
          },
          requestNav: {
            isActive: true
          },
          messageNav: {
            isActive: false
          },
          appointmentNav: {
            isActive: false
          },
          notificationNav: {
            isActive: false
          },
          SettingsNav: {
            isActive: false
          }
        };
      }


      case "message": {
        return {
          dashboardNav: {
            isActive: false
          },
          requestNav: {
            isActive: false
          },
          messageNav: {
            isActive: true
          },
          appointmentNav: {
            isActive: false
          },
          notificationNav: {
            isActive: false
          },
          SettingsNav: {
            isActive: false
          }
        };
      }

      case "notification": {
        return {
          dashboardNav: {
            isActive: false
          },
          requestNav: {
            isActive: false
          },
          messageNav: {
            isActive: false
          },
          appointmentNav: {
            isActive: false
          },
          notificationNav: {
            isActive: true
          },
          SettingsNav: {
            isActive: false
          }
        };
      }

      case "appointment": {
        return {
          dashboardNav: {
            isActive: false
          },
          requestNav: {
            isActive: false
          },
          messageNav: {
            isActive: false
          },
          appointmentNav: {
            isActive: true
          },
          notificationNav: {
            isActive: false
          },
          SettingsNav: {
            isActive: false
          }
        };
      }


      case "setting": {
        return {
          dashboardNav: {
            isActive: false
          },
          requestNav: {
            isActive: false
          },
          messageNav: {
            isActive: false
          },
          appointmentNav: {
            isActive: false
          },
          notificationNav: {
            isActive: false
          },
          SettingsNav: {
            isActive: true
          }
        };
      }


      default:
        null;
    }

  });


  useEffect(()=>{
    switch (location.pathname.split("/")[2]) {
     
      case "dashboard": {

        setActiveContainter(prevState=>{
          return {
            ...prevState,
            dashboardNav: {
              isActive: true
            },
            requestNav: {
              isActive: false
            },
            messageNav: {
              isActive: false
            },
            appointmentNav: {
              isActive: false
            },
            notificationNav: {
              isActive: false
            },
            SettingsNav: {
              isActive: false
            }
          }
        })
      
       return

        
      }

      case "requests": {

        setActiveContainter(prevstate=>{
          return {
            ...prevstate,
            dashboardNav: {
              isActive: false
            },
            requestNav: {
              isActive: true
            },
            messageNav: {
              isActive: false
            },
            appointmentNav: {
              isActive: false
            },
            notificationNav: {
              isActive: false
            },
            SettingsNav: {
              isActive: false
            }
          }
        })

        return
        
      }


      case "message": {

        setActiveContainter(prevState=>{
          return {
            ...prevState,
            dashboardNav: {
              isActive: false
            },
            requestNav: {
              isActive: false
            },
            messageNav: {
              isActive: true
            },
            appointmentNav: {
              isActive: false
            },
            notificationNav: {
              isActive: false
            },
            SettingsNav: {
              isActive: false
            }
          }
        })
       return
      }


      case "notification": {

        setActiveContainter(prevState=>{
          return {
            ...prevState,
            dashboardNav: {
              isActive: false
            },
            requestNav: {
              isActive: false
            },
            messageNav: {
              isActive: false
            },
            appointmentNav: {
              isActive: false
            },
            notificationNav: {
              isActive: true
            },
            SettingsNav: {
              isActive: false
            }
          }
        })
       return
      }

      case "appointment": {

        setActiveContainter(prevState=>{
          return {
            ...prevState,
            dashboardNav: {
              isActive: false
            },
            requestNav: {
              isActive: false
            },
            messageNav: {
              isActive: false
            },
            appointmentNav: {
              isActive: true
            },
            notificationNav: {
              isActive: false
            },
            SettingsNav: {
              isActive: false
            }
          }
        })
       return
      }

      case "setting": {

        setActiveContainter(prevState=>{
          return {
            ...prevState,
            dashboardNav: {
              isActive: false
            },
            requestNav: {
              isActive: false
            },
            messageNav: {
              isActive: false
            },
            appointmentNav: {
              isActive: false
            },
            notificationNav: {
              isActive: false
            },
            SettingsNav: {
              isActive:true
            }
          }
        })
       return
      }



      default:
        null;
    }

     },[location.pathname])
  const navigate = useNavigate();

  return (
    <div className="hidden fixed  md:block bg-agentNavbarBgImage w-[20%] h-dvh overflow-x-hidden cursor-default ">
      <div className="flex flex-col gap-3 place-items-center">
        <img className="w-[100px] mt-8" src={LodgeMeIcon} />
        <p className="w-full h-[1px] bg-white" />
      </div>
      <div className="font-nunito text-white flex flex-col gap-2">
        <div
          className={`flex h-[50px] hover:bg-[#BB7655] ${activeContainer
            .dashboardNav.isActive
            ? "bg-[#BB7655] "
            : ""} rounded-md place-items-center  ps-4 gap-2`}
          onClick={() => {
            setActiveContainter(prevState => {
              return {
                ...prevState,
                dashboardNav: {
                  isActive: true
                },
                requestNav: {
                  isActive: false
                },
                messageNav: {
                  isActive: false
                },
                appointmentNav: {
                  isActive: false
                },
                notificationNav: {
                  isActive: false
                },
                SettingsNav: {
                  isActive: false
                }
              };
            });

            navigate("dashboard");
          }}
        >
          <img src={dashBoardMenu} />
          <p>Dashboard</p>
        </div>
{
  /**
   * not using this flow for now 
   *  <div
          className={`flex h-[50px] hover:bg-[#BB7655] ${activeContainer
            .requestNav.isActive
            ? "bg-[#BB7655] "
            : ""} rounded-md place-items-center  ps-4 gap-2`}
          onClick={() => {
            setActiveContainter(prevState => {
              return {
                ...prevState,
                dashboardNav: {
                  isActive: false
                },
                requestNav: {
                  isActive: true
                },
                messageNav: {
                  isActive: false
                },
                appointmentNav: {
                  isActive: false
                },
                notificationNav: {
                  isActive: false
                },
                SettingsNav: {
                  isActive: false
                }
              };
            });

            navigate("requests");
          }}
        >
          <img src={requestIcon} />
          <p>Requests</p>
        </div>
   */
}
       

        <div
          className={`flex h-[50px] hover:bg-[#BB7655] ${activeContainer
            .messageNav.isActive
            ? "bg-[#BB7655] "
            : ""}  rounded-md place-items-center  ps-4 gap-2`}
          onClick={() => {
            setActiveContainter(prevState => {
              return {
                ...prevState,
                dashboardNav: {
                  isActive: false
                },
                requestNav: {
                  isActive: false
                },
                messageNav: {
                  isActive: true
                },
                appointmentNav: {
                  isActive: false
                },
                notificationNav: {
                  isActive: false
                },
                SettingsNav: {
                  isActive: false
                }
              };
            });
            navigate("message");
          }}
        >
          <img src={dashBoardMessageIcon} />
          <p>Messages</p>
        </div>

    {/*    <div
          className={`flex h-[50px] hover:bg-[#BB7655] ${activeContainer
            .appointmentNav.isActive
            ? "bg-[#BB7655] "
            : ""}  rounded-md place-items-center  ps-4 gap-2`}
          onClick={() => { 
            setActiveContainter(prevState => {
              return {
                ...prevState,
                dashboardNav: {
                  isActive: false
                },
                requestNav: {
                  isActive: false
                },
                messageNav: {
                  isActive: false
                },
                appointmentNav: {
                  isActive: true
                },
                notificationNav: {
                  isActive: false
                },
                SettingsNav: {
                  isActive: false
                }
              };
            });
            navigate("appointment");
          }}
        >
          <img src={dashBoardAppointment} />
          <p>Appointments</p>
        </div>
*/}
        <div
          className={`flex h-[50px]   hover:bg-[#BB7655] ${activeContainer
            .notificationNav.isActive
            ? "bg-[#BB7655] "
            : ""}rounded-md place-items-center  ps-4 gap-2 relative`}
          onClick={() => {
            setActiveContainter(prevState => {
              return {
                ...prevState,
                dashboardNav: {
                  isActive: false
                },
                requestNav: {
                  isActive: false
                },
                messageNav: {
                  isActive: false
                },
                appointmentNav: {
                  isActive: false
                },
                notificationNav: {
                  isActive: true
                },
                SettingsNav: {
                  isActive: false
                }
              };
            });
            navigate("notification");
          }}
        >
        <div className="relative me-2">
        <p className="absolute bottom-3 text-red-600  left-7 font-bold text-[18px] ">{notificationState && `${notificationState.newNotificationCount}`}</p>
        <img src={dashBoardNotification} />
      
        </div>
          <p className="ms-3">Notifications</p>
        </div>

    { /*   <div
          className={`flex h-[50px] hover:bg-[#BB7655] ${activeContainer
            .SettingsNav.isActive
            ? "bg-[#BB7655] "
            : ""} rounded-md place-items-center  ps-4 gap-2`}
          onClick={() => {
            setActiveContainter(prevState => {
              return {
                ...prevState,
                dashboardNav: {
                  isActive: false
                },
                requestNav: {
                  isActive: false
                },
                messageNav: {
                  isActive: false
                },
                appointmentNav: {
                  isActive: false
                },
                notificationNav: {
                  isActive: false
                },
                SettingsNav: {
                  isActive: true
                }
              };
            });
            navigate("setting");
          }}
        >
          <img src={dashBoardSettings} />
          <p>Settings</p>
        </div> */}
      </div>
    </div>
  );
};

export default DashBoardNavBar;
