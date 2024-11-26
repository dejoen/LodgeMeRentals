import lodgeMeIcon from "../../../../../assets/agentprofile/lodgemeIconDarkImage.svg";
import backIcon   from  "../../../../../assets/agentprofile/profileBackButtonIcon.svg"

import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const UserProfileSideBar = () => {
  const location = useLocation();
  const [activeContainer, setActiveContainter] = useState(() => {
    
    switch (location.pathname.split("/")[3]) {
    
        case "overview": {
        return {
          overviewNav: {
            isActive: true
          },
          rentalHistoryNav: {
            isActive: false
          },
          documentsNav: {
            isActive: false
          },
         applicationNav: {
            isActive: false
          },
          paymentNav: {
            isActive: false
          }
        };
      }
      case "rental-history": {
        return {
          overviewNav: {
            isActive: false
          },
          rentalHistoryNav: {
            isActive: true
          },
          documentsNav: {
            isActive: false
          },
         applicationNav: {
            isActive: false
          },
          paymentNav: {
            isActive: false
          }
        };
      }

      
      default:
        null;
    }
  });
  const navigate = useNavigate();

  return (
    <div className="relative   hidden md:block bg-agentNavbarBgImage w-[20%] h-dvh overflow-x-hidden font-thin text-sm  cursor-default">
      <div className="flex flex-col gap-3 place-items-start">
        <img className=" m-5 hover:shadow-black hover:shadow-md" alt=" " src={backIcon} onClick={()=>{
          navigate('/agent/dashboard')
        }} />
        
      </div>
      <div className="font-nunito text-white flex flex-col ">
        
        <div
          className={`flex h-[50px] hover:font-bold ${activeContainer
            .overviewNav.isActive
            ? "font-medium text-xl "
            : ""} rounded-md place-items-center  ps-4 `}

          onClick={() => {
            setActiveContainter(prevState => {
              return {
                ...prevState,
                overviewNav: {
                  isActive: true
                },
                rentalHistoryNav: {
                  isActive: false
                },
               documentsNav: {
                  isActive: false
                },
                applicationNav: {
                  isActive: false
                },
                paymentNav: {
                  isActive: false
                }
              };
            });

            navigate("/overview/about");
          }}
        >
         
          <p>Overview</p>
        </div>

        <div
          className={`flex h-[50px]  hover:font-bold ${activeContainer
            .rentalHistoryNav.isActive
            ? "font-bold text-xl "
            : ""}  rounded-md place-items-center  ps-4 gap-2`}
          onClick={() => {
            setActiveContainter(prevState => {
              return {
                ...prevState,
               overviewNav: {
                  isActive: false
                },
               rentalHistoryNav: {
                  isActive: true
                },
                documentsNav: {
                  isActive: false
                },
                applicationNav: {
                  isActive: false
                },
                paymentNav: {
                  isActive: false
                }
              };
            });
            navigate("rental-history");
          }}
        >
        
          <p>Rental History</p>
        </div>

        <div
          className={`flex h-[50px] hover:font-bold ${activeContainer
            .documentsNav.isActive
            ? "font-bold text-xl "
            : ""}  rounded-md place-items-center  ps-4 gap-2`}
          onClick={() => {
            setActiveContainter(prevState => {
              return {
                ...prevState,
                overviewNav: {
                  isActive: false
                },
               rentalHistoryNav: {
                  isActive: false
                },
               documentsNav: {
                  isActive: true
                },
                applicationNav: {
                  isActive: false
                },
                paymentNav: {
                  isActive: false
                }
              };
            });
          }}
        >
          
          <p>Documents</p>
        </div>

        <div
          className={`flex h-[50px]   hover:font-bold ${activeContainer
            .applicationNav.isActive
            ? "font-bold text-xl "
            : ""}rounded-md place-items-center  ps-4 gap-2`}
          onClick={() => {
            setActiveContainter(prevState => {
              return {
                ...prevState,
                overviewNav: {
                  isActive: false
                },
                rentalHistoryNav: {
                  isActive: false
                },
              documentsNav: {
                  isActive: false
                },
                applicationNav: {
                  isActive: true
                },
                paymentNav: {
                  isActive: false
                }
              };
            });
          }}
        >
         
          <p>Application Status</p>
        </div>

        <div
          className={`flex h-[50px]  hover:font-bold ${activeContainer
            .paymentNav.isActive
            ? "font-bold text-xl "
            : ""} rounded-md place-items-center  ps-4 gap-2`}
          onClick={() => {
            setActiveContainter(prevState => {
              return {
                ...prevState,
                overviewNav: {
                  isActive: false
                },
               rentalHistoryNav: {
                  isActive: false
                },
                documentsNav: {
                  isActive: false
                },
                applicationNav: {
                  isActive: false
                },
                paymentNav: {
                  isActive: true
                }
              };
            });
          }}
        >
          
          <p>Payment Information</p>
        </div>
      </div>
      <div className="absolute  bottom-0 w-full flex  ">
      <img className=" hover:shadow-black hover:shadow-md mb-5  mx-auto" alt=" " src={lodgeMeIcon} onClick={()=>{
        navigate('/')
      }} />
      
        </div>
    </div>
  );
}  

export default UserProfileSideBar;
