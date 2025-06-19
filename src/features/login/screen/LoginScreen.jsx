import { useContext, useEffect, useRef, useState } from "react";
import backArrowIcon from "../../../assets/backarrowIcon.svg";
import emailIcon from "../../../assets/emailIcon.svg";
import passwordIcon from "../../../assets/passwordIcon.svg";
import { useNavigate } from "react-router-dom";
import ErrorPopUpScreen, { openErrorScreen } from "../../../utils/ErrorPopUpScreen";
import LoadingPopUpScreen, { closeLoadingPopUp, showLoadingPopUp } from "../../../utils/LoadingPopUpScreen";
import loginUser from "../service/LoginService";
import { CombineContext } from "../../../context/CombineContextProvider";
import { io } from "socket.io-client";

const LoginScreen = () => {
  const {
    clientReducerState,
    clientReducerDispatcher,
    agentReducerState,
    agentReducerDispatcher,
    connectSocket,
    socketConnectedReducerState,
  } = useContext(CombineContext);

  const navigate = useNavigate();

  const [togglePassword, setTogglePassword] = useState({
    password: {
      isToggle: false,
      password: "",
    },
  });

  const [loginData, setLoginData] = useState({
    userEmail: "",
    userPassword: "",
  });

  const [user, setUser] = useState({});

  let socket = useRef(io());

  useEffect(() => {
    socket.current = socketConnectedReducerState.socket;

    socket.current.on("socketConnected", (connectedUser) => {
      if (connectedUser) {
        switch (connectedUser.accountType) {
          case "agent": {
            agentReducerDispatcher({
              TYPE: "Authentication",
              payload: {
                ...agentReducerState,
                isLoggedIn: true,
                data: {
                  ...connectedUser,
                  token: user.token,
                },
              },
            });

            navigate("/agent/dashboard");
            return;
          }
          case "client": {
            clientReducerDispatcher({
              TYPE: "Authentication",
              payload: {
                ...clientReducerState,
                isLoggedIn: true,
                data: {
                  ...connectedUser,
                  token: user.token,
                },
              },
            });

            navigate("/client/dashboard");
            return;
          }
          default: {
            setErrorMessage("An error occured try again");
            openErrorScreen();
          }
        }
      }
    });
  }, [
    socketConnectedReducerState,
    clientReducerState,
    clientReducerDispatcher,
    agentReducerState,
    agentReducerDispatcher,
    navigate,
    user,
  ]);

  const [errorMessage, setErrorMessage] = useState("");

  return (
    <div className="font-nunito w-full flex  md:justify-center ">
      <div className="w-full md:w-[50%]  md:px-12 flex flex-col   place-items-center justify-center overflow-auto">
        <div className="w-full">
          <img
            className="w-[20px]   font-bold ms-5 mt-10"
            src={backArrowIcon}
            onClick={() => {
              navigate("/");
            }}
          />
        </div>
        <p className="font-bold text-2xl mt-10 mb-2 ">Welcome Back</p>
        <p className="font-bold">
          {"Dont't have an account?"} <span className="text-blue-600">Sign Up</span>
        </p>

        <div className="w-full mt-16 flex flex-col place-items-center gap-10">
          <div>
            <p>Email</p>
            <div className="w-fit border border-black rounded-md  flex p-3">
              <input
                className="outline-none"
                type="email"
                placeholder="Enter your email"
                value={loginData.userEmail}
                onChange={(e) => {
                  setLoginData((prevState) => {
                    return {
                      ...prevState,
                      userEmail: e.target.value,
                    };
                  });
                }}
              />

              <img className="w-[15px] font-bold" src={emailIcon} />
            </div>
          </div>
          <div>
            <p>Password</p>
            <div className="w-fit border border-black rounded-md  flex p-3">
              <input
                className="outline-none"
                type={togglePassword.password.isToggle ? "text" : "password"}
                value={togglePassword.password.password}
                placeholder="password"
                onChange={(e) => {
                  setTogglePassword((prev) => {
                    return {
                      ...prev,
                      password: {
                        password: e.target.value,
                      },
                    };
                  });

                  setLoginData((prevState) => {
                    return {
                      ...prevState,
                      userPassword: e.target.value,
                    };
                  });
                }}
              />
              <img
                className="w-[15px] font-bold"
                src={passwordIcon}
                onClick={() => {
                  setTogglePassword((prev) => {
                    return {
                      ...prev,
                      password: {
                        isToggle: !togglePassword.password.isToggle,
                      },
                    };
                  });
                }}
              />
            </div>
          </div>

          <div>
            <div
              className="text-white w-[200px] border bg-[#BB7655] rounded-md  flex place-items-center justify-center  p-3  hover:bg-opacity-90 cursor-pointer"
              onClick={async () => {
                //openErrorScreen()
                //navigate('/agent/dashboard')

                localStorage.removeItem("user");

                if (!loginData.userEmail || !loginData.userPassword) {
                  setErrorMessage("Email and password is required to continue.");
                  openErrorScreen();
                  return;
                }
                if (!/\S+@\S+\.\S+/.test(loginData.userEmail)) {
                  setErrorMessage("Invalid email pattern. Please provide a valid email.");
                  openErrorScreen();
                  return;
                }

                showLoadingPopUp();

                loginUser(loginData)
                  .then((res) => {
                    return res.json();
                  })
                  .then(async (result) => {
                    closeLoadingPopUp();

                    if (result.status === 400) {
                      setErrorMessage(result.message);
                      openErrorScreen();
                      return;
                    }
                    if (result.status === 500) {
                      setErrorMessage(result.error);
                      openErrorScreen();
                      return;
                    }
                    setUser(result.user);

                    await connectSocket(result.user.token);
                  })
                  .catch((err) => {
                    closeLoadingPopUp();
                    setErrorMessage(err.message);
                    openErrorScreen();
                  });
              }}
            >
              <p>Sign In</p>
            </div>
          </div>

          <p>forgot password?</p>
        </div>
      </div>

      <div className="hidden md:flex w-[50%] h-[500px] sticky top-20  ms-[10%] me-[10%] bottom-0  bg-agentSignUpBackgroundImage  bg-cover bg-center  bg-no-repeat rounded-md place-items-end justify-center pb-5">
        <p className="bg-black text-white bg-opacity-25 font-bold text-2xl p-2">Become A House Owner Today.</p>
      </div>

      <ErrorPopUpScreen title={"Login Message"} body={errorMessage} />
      <LoadingPopUpScreen sequence={["loging....", "you .....", "in....", "please wait...."]} />
    </div>
  );
};

export default LoginScreen;
