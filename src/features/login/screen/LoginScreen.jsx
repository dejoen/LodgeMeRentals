import { useContext, useEffect, useRef, useState } from "react";
import backArrowIcon from "../../../assets/backarrowIcon.svg";
import emailIcon from "../../../assets/emailIcon.svg";
import passwordIcon from "../../../assets/passwordIcon.svg";
import { useNavigate } from "react-router-dom";
import LoadingPopUpScreen, { closeLoadingPopUp, showLoadingPopUp } from "../../../utils/LoadingPopUpScreen";
import loginUser, { requestForForgetPassword, updatePassword } from "../service/LoginService";
import { CombineContext } from "../../../context/CombineContextProvider";
import { io } from "socket.io-client";

import errorIcon from "../../../assets/errorPopupIcon.svg";

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

  const buttonRef = useRef();
  const [openErrorScreen, setOpenErrorScreen] = useState(false);
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

  const [otpSent, setOptSent] = useState(false);
  const [forgotPasswordDetails, setForgotPAsswordDetails] = useState({
    email: "",
    newPassword: "",
    confirmPassword: "",
    otp: "",
  });
const [forgotPasswordErrorMessage,setForgotPasswordErrorMessage] = useState('')
  const [toggleForgotPasswordInput, setToggleForgotPasswordInput] = useState({
    newPassword: false,
    confirmPAssword: false,
  });

  const [forgotPasswordClicked, setForgotPasswordClicked] = useState(false);
  const [timeCount,setTimeCount] = useState()
  const[timerId,setTimerId] = useState()

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

    return () =>{
      if(timerId)
      clearInterval(timerId)
    }
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
  const loginSequence = ["loging....", "you .....", "in....", "please wait...."]
const forgetPasswordSequence = ["Reseting....", "your .....", "password....", "please wait...."]

const startCounter = () =>{
     let counter = 300
     const counterId = setInterval(()=>{
       
    
       const mins = Math.floor(counter/60)
       const sec = Math.floor(counter%60)
       setTimeCount(mins.toString().concat(':').concat(sec.toString().padStart(2,'0')))
       //console.log(mins.toString().concat(':').concat(sec.toString()))
       --counter
        if(counter<0){
          clearInterval(counterId)
          return
        } 
     },1000)
    
     setTimerId(counterId)
   }

   const  stopCounter = () =>{
    clearInterval(timerId)
   }

  return (
    <div className="font-nunito w-full grid grid-cols-2 h-dvh ">
      <div className="w-full col-span-2 md:col-span-1 flex flex-col   place-items-center justify-center overflow-auto">
        <div className="w-full">
          <img
            className="w-[20px]   font-bold ms-10"
            src={backArrowIcon}
            onClick={() => {
              navigate("/");
            }}
          />
        </div>
        <p className="font-bold text-2xl  mb-2 ">Welcome Back</p>
        <p className="font-bold">
          {"Dont't have an account?"} <span className="text-blue-600">Sign Up</span>
        </p>

        <div className="w-full mt-16 flex flex-col place-items-center gap-10">
          {forgotPasswordClicked ? (
            <div className="space-y-4 w-full  flex flex-col justify-center place-items-center ">
              <div className=" w-full  md:w-[20rem]">
                <p>Email</p>
                <div className="  border border-black rounded-md  flex p-3">
                  <input
                    className="outline-none w-[100%]"
                    type="email"
                    placeholder="Enter your email"
                    value={forgotPasswordDetails.email}
                    onChange={(e) => {
                      setForgotPAsswordDetails({
                        ...forgotPasswordDetails,
                        email: e.target.value,
                      });
                    }}
                  />

                  <img className="w-[15px] font-bold" src={emailIcon} />
                </div>
              </div>

              {otpSent ? (
                <div className="space-y-5">
                  <div className=" w-full md:w-[20rem]">
                    <p>New Password</p>
                    <div className="  border border-black rounded-md  flex p-3">
                      <input
                        className="outline-none w-[100%]"
                        placeholder="Enter your new password"
                        type={toggleForgotPasswordInput.newPassword ? "text" : "password"}
                        value={forgotPasswordDetails.newPassword}
                        onChange={(e) => {
                          setForgotPAsswordDetails({
                            ...forgotPasswordDetails,
                            newPassword: e.target.value,
                          });
                        }}
                      />
                      <img
                        className="w-[15px] font-bold"
                        src={passwordIcon}
                        onClick={(e) => {
                          setToggleForgotPasswordInput({
                            ...toggleForgotPasswordInput,
                            newPassword: !toggleForgotPasswordInput.newPassword,
                          });
                        }}
                      />
                    </div>
                  </div>

                  <div className=" w-full md:w-[20rem]">
                    <p>Confirm Password</p>
                    <div className="  border border-black rounded-md  flex p-3">
                      <input
                        className="outline-none w-[100%]"
                        type={toggleForgotPasswordInput.confirmPAssword ? "text" : "password"}
                        placeholder="Enter confirm password"
                        value={forgotPasswordDetails.confirmPassword}
                        onChange={(e) => {
                          setForgotPAsswordDetails({
                            ...forgotPasswordDetails,
                            confirmPassword: e.target.value,
                          });
                        }}
                      />

                      <img
                        className="w-[15px] font-bold"
                        src={passwordIcon}
                        onClick={() => {
                          setToggleForgotPasswordInput({
                            ...toggleForgotPasswordInput,
                            confirmPAssword: !toggleForgotPasswordInput.confirmPAssword,
                          });
                        }}
                      />
                    </div>
                  </div>

                  <div className=" w-full md:w-[20rem]">
                    <p>OTP</p>
                    <div className="  border border-black rounded-md  flex p-3">
                      <input
                        className="outline-none w-[100%]"
                        type="email"
                        placeholder="Enter otp"
                        value={forgotPasswordDetails.otp}
                        onChange={(e) => {
                          setForgotPAsswordDetails({
                            ...forgotPasswordDetails,
                            otp: e.target.value,
                          });
                        }}
                      />

                      <img className="w-[15px] font-bold" src={emailIcon} />
                    </div>
                  </div>

                  <p className="mt-3 w-full text-center">{timeCount}</p>
                  {(timeCount === '0:00')?<p  className="mt-3 w-full text-center" onClick={async()=>{
                      try {

                  setForgotPasswordErrorMessage('')
                    showLoadingPopUp()
 
                  const result = await requestForForgetPassword({userEmail:forgotPasswordDetails.email})
                     closeLoadingPopUp()
                  
                        const response = await result.json()
                       
                         if (result.status === 200){
                          startCounter()
                           setOptSent(true)
                           result
                         }
                     
                     setForgotPasswordErrorMessage(response.message)
                    
                      
                    
                  } catch (error) {
                     closeLoadingPopUp()
                  }
                  }}>Resend Otp</p>:null}
                </div>
              ) : null}
            </div>
          ) : (
            <div className="space-y-7">
              <div className=" w-full md:w-[20rem]">
                <p>Email</p>
                <div className="  border border-black rounded-md  flex p-3">
                  <input
                    className="outline-none w-[100%]"
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

                <div className=" w-full md:w-[20rem] border border-black rounded-md  flex p-3">
                  <input
                    className="outline-none w-[100%]"
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
            </div>
          )}
           {
            forgotPasswordErrorMessage ? <div>
             {forgotPasswordErrorMessage}
          </div>:null
           }
          <div>
            <button
              type="button"
              ref={buttonRef}
              className="text-white w-[200px] border bg-[#BB7655] rounded-md  flex place-items-center justify-center  p-3  hover:bg-opacity-90 cursor-pointer"
              onClick={async (e) => {
                //openErrorScreen()
                //navigate('/agent/dashboard')

                const buttonTitle = buttonRef.current.children[0].innerHTML;

                if (!forgotPasswordClicked && buttonTitle.includes("Sign In")) {
                  localStorage.removeItem("user");

                  if (!loginData.userEmail || !loginData.userPassword) {
                    setErrorMessage("Email and password is required to continue.");
                    setOpenErrorScreen(true);
                    return;
                  }
                  if (!/\S+@\S+\.\S+/.test(loginData.userEmail)) {
                    setErrorMessage("Invalid email pattern. Please provide a valid email.");
                    setOpenErrorScreen(true);
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
                        setOpenErrorScreen(true);
                        return;
                      }
                      if (result.status === 500) {
                        setErrorMessage(result.error);
                        setOpenErrorScreen(true);
                        return;
                      }
                     setUser(result.user);

                      await connectSocket(result.user.token);
                    })
                    .catch((err) => {
                      closeLoadingPopUp();
                      setErrorMessage(err.message);
                      setOpenErrorScreen(true);
                    });
                } else if (buttonTitle.includes("Reset Password")) {
                   
                    //startCounter()
                  if(!forgotPasswordDetails.email){
                    setErrorMessage('Email is needed to continue.')
                       setOpenErrorScreen(true)
                       return
                  }
                  if(otpSent && (!forgotPasswordDetails.email || !forgotPasswordDetails.newPassword ||!forgotPasswordDetails.confirmPassword || !forgotPasswordDetails.otp)){
                     setErrorMessage('please enter the complete details.')
                     setOpenErrorScreen(true)
                     return
                  }
                  if(otpSent &&(forgotPasswordDetails.newPassword !== forgotPasswordDetails.confirmPassword)){
                      setErrorMessage('password does not match.')
                     setOpenErrorScreen(true)
                     return
                  }
                  if(otpSent &&!Number.isInteger(Number(forgotPasswordDetails.otp))){
                     setErrorMessage('Invalid otp.')
                     setOpenErrorScreen(true)
                     return
                  }

                  if(otpSent &&forgotPasswordDetails.otp.length<6 || forgotPasswordDetails.otp.length>6 ){
                        setErrorMessage('Invalid otp.')
                     setOpenErrorScreen(true)
                     return
                  }

                  try {
                  setForgotPasswordErrorMessage('')
                    showLoadingPopUp()
                    const result = await updatePassword({newPassword:forgotPasswordDetails.newPassword,otp:forgotPasswordDetails.otp,email:forgotPasswordDetails.email})
 closeLoadingPopUp()
                     const response = await result.json()
                      if(result.status === 200){
                        
                          setForgotPasswordClicked(false)
                         setLoginData({
                          ...loginData,
                          userEmail:forgotPasswordDetails.email
                         })
                    
                        setForgotPAsswordDetails({
                          newPassword:'',
                        confirmPassword:'',
                        otp:'',
                        email:''
                        })
                        
                         // setUser(result.user);

                      //await connectSocket(result.user.token);
                         return
                      }
                       setOpenErrorScreen(true)
                       setForgotPasswordErrorMessage(response.message)
                    
                    
                  } catch (error) {
                    closeLoadingPopUp()
                  }

                  if(!otpSent){
                   try {

                  setForgotPasswordErrorMessage('')
                    showLoadingPopUp()
 
                  const result = await requestForForgetPassword({userEmail:forgotPasswordDetails.email})
                     closeLoadingPopUp()
                  
                        const response = await result.json()
                       
                         if (result.status === 200){
                          startCounter()
                           setOptSent(true)
                           result
                         }
                     
                     setForgotPasswordErrorMessage(response.message)
                    
                      
                    
                  } catch (error) {
                     closeLoadingPopUp()
                  }
                  }
                  
                }
              }}
            >
              {forgotPasswordClicked ? <p>Reset Password</p> : <p>Sign In</p>}
            </button>
          </div>
          

          {forgotPasswordClicked ? (
            <button
              onClick={() => {
                setForgotPasswordClicked(false);
              }}
              className="decoration-blue-600 underline"
            >
              {" "}
              Sign in
            </button>
          ) : (
            <button
              onClick={() => {
                setForgotPasswordClicked(true);
              }}
              className="decoration-blue-600 underline"
            >
              forgot password?
            </button>
          )}
        </div>
      </div>

      <div className="col-span-1">
        <div className="hidden md:flex  h-[500px] sticky top-20  ms-[10%] me-[10%] bottom-0  bg-agentSignUpBackgroundImage  bg-cover bg-center  bg-no-repeat rounded-md place-items-end justify-center pb-5">
          <p className="bg-black text-white bg-opacity-25 font-bold text-2xl p-2">Become A House Owner Today.</p>
        </div>

        {/*<ErrorPopUpScreen title={"Login Message"} body={errorMessage} />*/}
      </div>
      <LoadingPopUpScreen sequence={buttonRef?.current?.children[0]?.innerHTML.includes('Sign In')?loginSequence:forgetPasswordSequence} />
      {openErrorScreen && errorMessage && (
        <ErrorPopUpScreen
          errorMessage={errorMessage}
          closeErrorScreen={() => {
            //stopCounter()
            setOpenErrorScreen(false);
          }}
        />
      )}
    </div>
  );
};

const ErrorPopUpScreen = ({ errorMessage, closeErrorScreen }) => {
  return (
    <div className="absolute bg-black/40 h-full w-full flex justify-center  place-items-center ">
      <div className="bg-white h-[60%] w-full md:w-[40%] rounded-lg shadow-lg shadow-black/50 m-5 animate-popUpAnimation">
        <img
          onClick={() => {
            closeErrorScreen();
          }}
          src={backArrowIcon}
          width={30}
          height={30}
          className="m-6"
        />

        <div className="w-full flex flex-col gap-5 justify-center place-items-center mt-10">
          <img src={errorIcon} height={200} width={200} />
          <p className="text-center">{errorMessage}</p>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
