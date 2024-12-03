import { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const UserProfileBodyContainer = () => {
  const path = useLocation();

  const navigate = useNavigate();

  const [makeViewVisible, setMakeViewVisible] = useState(true);

  const [buttonState, setButtonState] = useState(() => {
    switch (path.pathname.split("/")[4]) {
      case "about":
        setMakeViewVisible(true);
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
        setMakeViewVisible(false);
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
              setMakeViewVisible(true);
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
              setMakeViewVisible(false);
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
      <div
        className={`${makeViewVisible
          ? "block"
          : "hidden"}  min-h-[150px] border shadow-black shadow-lg  rounded-lg `}
      >
        <div className="m-3 my-8 flex flex-col justify-center ">
          <div className="flex gap-1">
            <p className="font-bold ">Member Since:</p>
            <p>
              {"{Sign up date}"}
            </p>
          </div>
          <div className="flex gap-1">
            <p className="font-bold ">Language:</p>
            <p>
              {"{Sign up date}"}
            </p>
          </div>

          <div className="flex gap-1">
            <p className="font-bold ">Gender:</p>
            <p>
              {"Male or Female"}
            </p>
          </div>
        </div>
      </div>

      <div
        className={` ${makeViewVisible
          ? "block"
          : "hidden"} min-h-[200px] border shadow-black shadow-lg  rounded-lg  p-3`}
      >
        <div className="relative w-full flex">
          <p className="font-bold">Address</p>
          <p className="absolute right-5  bg-[#1C2E7A]  text-white p-1 rounded-md text-sm">
            Edit
          </p>
        </div>

        <div className="flex gap-20 mt-3">
          <div className=" space-y-4">
            <div>
              <p className="font-bold">Country</p>
              <p>
                {"Agent's Country"}
              </p>
            </div>

            <div>
              <p className="font-bold">Local Government</p>
              <p>
                {"Agent's Local Govt"}
              </p>
            </div>
          </div>

          <div className=" space-y-4">
            <div>
              <p className="font-bold">State</p>
              <p>
                {"Agent's State"}
              </p>
            </div>

            <div className="">
              <p className="font-bold">Postal Code</p>
              <p>
                {"Agent's Postal Code"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileBodyContainer;
