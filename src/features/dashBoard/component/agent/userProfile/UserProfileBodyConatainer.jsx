import { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const UserProfileBodyContainer = () => {
  const path = useLocation();

  const navigate = useNavigate();

  const [buttonState, setButtonState] = useState(() => {
    switch (path.pathname.split("/")[4]) {
      case "about":
        return {
          about: {
            isActive: true
          },
          stats: {
            isActive: false
          },
          posts: {
            isActive: false
          },
          ratings: {
            isActive: false
          },
          legitimacy: {
            isActive: false
          }
        };

      case "stats":
        return {
          about: {
            isActive: false
          },
          stats: {
            isActive: true
          },
          posts: {
            isActive: false
          },
          ratings: {
            isActive: false
          },
          legitimacy: {
            isActive: false
          }
        };

      default:
        "";
    }
  });

  return (
    <div className=" font-nunito w-full cursor-default flex flex-col gap-5 ">
      <div className="min-h-[400px] border shadow-black shadow-lg rounded-lg">
        <div className="flex  justify-evenly md:justify-evenly m-6 overflow-x-auto">
          <p
            className={` ${buttonState.about.isActive &&
              "bg-[#BB7655] text-white "}  p-2 rounded-md`}
            onClick={() => {
              setButtonState(prevState => {
                return {
                  ...prevState,
                  about: {
                    isActive: true
                  },
                  stats: {
                    isActive: false
                  },
                  posts: {
                    isActive: false
                  },
                  ratings: {
                    isActive: false
                  },
                  legitimacy: {
                    isActive: false
                  }
                };
              });

              navigate("/agent/userprofile/overview/about");
            }}
          >
            About
          </p>

          <p
            className={` ${buttonState.stats.isActive &&
              "bg-[#BB7655] text-white "}  p-2 rounded-md`}
            onClick={() => {
              setButtonState(prevState => {
                return {
                  ...prevState,
                  about: {
                    isActive: false
                  },
                  stats: {
                    isActive: true
                  },
                  posts: {
                    isActive: false
                  },
                  ratings: {
                    isActive: false
                  },
                  legitimacy: {
                    isActive: false
                  }
                };
              });

              navigate("/agent/userprofile/overview/stats");
            }}
          >
            Stats
          </p>
          <p
            className={` ${buttonState.posts.isActive &&
              "bg-[#BB7655] text-white "}  p-2 rounded-md`}
            onClick={() => {
              setButtonState(prevState => {
                return {
                  ...prevState,
                  about: {
                    isActive: false
                  },
                  stats: {
                    isActive: false
                  },
                  posts: {
                    isActive: true
                  },
                  ratings: {
                    isActive: false
                  },
                  legitimacy: {
                    isActive: false
                  }
                };
              });
            }}
          >
            Posts
          </p>

          <p
            className={` ${buttonState.ratings.isActive &&
              "bg-[#BB7655] text-white "}  p-2 rounded-md`}
            onClick={() => {
              setButtonState(prevState => {
                return {
                  ...prevState,
                  about: {
                    isActive: false
                  },
                  stats: {
                    isActive: false
                  },
                  posts: {
                    isActive: false
                  },
                  ratings: {
                    isActive: true
                  },
                  legitimacy: {
                    isActive: false
                  }
                };
              });
            }}
          >
            Ratings
          </p>
          <p
            className={` ${buttonState.legitimacy.isActive &&
              "bg-[#BB7655] text-white "}  p-2 rounded-md`}
            onClick={() => {
              setButtonState(prevState => {
                return {
                  ...prevState,
                  about: {
                    isActive: false
                  },
                  stats: {
                    isActive: false
                  },
                  posts: {
                    isActive: false
                  },
                  ratings: {
                    isActive: false
                  },
                  legitimacy: {
                    isActive: true
                  }
                };
              });
            }}
          >
            Legitimacy
          </p>
        </div>
        <Outlet />
      </div>
      <div className="min-h-[150px] border shadow-black shadow-lg  rounded-lg ">
       hhh</div>


       <div className="min-h-[200px] border shadow-black shadow-lg  rounded-lg ">
       hhh</div>
    </div>
  );
};

export default UserProfileBodyContainer;
