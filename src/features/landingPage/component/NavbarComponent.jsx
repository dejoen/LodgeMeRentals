/* eslint-disable react/prop-types */
import LodgeMeIcon from "../../../assets/lodgeMeIcon.svg";
import sideImage from "../../../assets/bgImage.svg";
import searchIcon from "../../../assets/searchIcon.svg";
import menuIcon from "../../../assets/menuIcon.svg";
import { openDrawer } from "./NavDrawerBar";
import { useNavigate } from "react-router-dom";
import { openGetStartedPageScreen } from "../screen/GetStartedScreen";
import { Search } from 'lucide-react';

const NavBarComponent = props => {
  const navigate = useNavigate();
  return (
    <div className="nav-container">
      <div className="nav-container-small-screen md:hidden">
        <div className="w-full h-[80px] pt-[1%] px-[10px] gap-[10px] fixed z-50   bg-white">
          <div className=" flex  w-full ">
            <img className="w-[70px] h-[70px]" src={LodgeMeIcon} />
            <div className="flex w-full justify-end">
              <div className="  w-[100px]  flex justify-between">
                <img src={searchIcon} onClick={() => {}}  className="w-[32px]"/>

                <img className="w-[32px]"
                  src={menuIcon}
                  onClick={() => {
                    openDrawer();
                  }}
                />
              </div>
            </div>
          </div>
        </div>

       <div className="pt-20 z-50">
       <div
          className={`hero-text-bg ${props.image}   bg-no-repeat bg-cover bg-center   w-full h-[461px] flex place-items-center bg-slate-500 `}
        >
          <div
            className={`hero-text-container  w-full h-[355px]  top-[140px]    ${props.adjustHeight}`}
          >
            <div
              className={`hero-text h-[219px] ${props.adjustHeight}  flex flex-col p-2`}
            >
              <div
                className={`text-white h-[54px]  mt-[30px] size-[50px] w-[90%] ms-[5px] text-4xl font-nunito font-bold   leading-[45px] text-center place-self-center ${props.lineHeight} ${props.textSize}`}
              >
                {props.text}
              </div>

              <div
                className={`mt-[100px] text-white font-bold text-center z-10 text-balance text-xl `}
              >
                Carefully selected, best homes thats meet with your rental needs
              </div>

              <div
                className="bg-yellow-600 rounded-2xl w-[70%] text-center mt-8 place-self-center p-4 text-white z-10 hover:bg-white hover:text-yellow-600"
                onClick={() => {
                  if (props.buttonOneText === "Get Started") {
                    openGetStartedPageScreen();
                  } else {
                    navigate("/login");
                  }
                }}
              >
                <p>
                  {props.buttonOneText}
                </p>
              </div>

              <div
                className={`${props.makeVisible} bg-white rounded-2xl w-[70%] text-center mt-5 place-self-center p-4 text-black z-10 hover:bg-white hover:text-yellow-600`}
                onClick={() => {
                  openGetStartedPageScreen();
                }}
              >
                <p>Register</p>
              </div>
            </div>
          </div>
        </div>
       </div>
      </div>

      <div
        className={`nav-container-large-screen  hidden md:block ${props.image}  bg-no-repeat bg-cover bg-center h-[600px]`}
      >
        <div
          className={`bg-heroGradientImage fixed md:gap-1  w-full mx-auto h-24 pt-4 p-2 gap-2 text-white `}
        >
          <div className="nav-container-body gap-10 flex  z-50 ">
            <img src={LodgeMeIcon} className="" />

            <div className="w-full h-9 gap-5 md:gap-10  place-self-center  flex  place-items-center  md:block   md:h-fit xl:flex">
              <div className=" w-fit h-5 
           size-4  flex  gap-x-0 md:gap-x-5  md:w-full md:place-content-evenly ">
                <p
                  className="hover:underline"
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Home
                </p>
                <p
                  className="hover:underline"
                  onClick={() => {
                    navigate("/about");
                  }}
                >
                  About
                </p>
                <p
                  className="hover:underline "
                  onClick={() => {
                    navigate("/blog/one");
                  }}
                >
                  Blog
                </p>
                <p
                  className="hover:underline "
                  onClick={() => {
                    navigate("/copyrights");
                  }}
                >
                  Copyrights
                </p>
                <p
                  className="hover:underline "
                  onClick={() => {
                    navigate("/terms");
                  }}
                >
                  Terms & Conditions
                </p>
              </div>

              <div className=" w-fit  h-10 gap-16
           size-4 flex  ms-5   md:w-full md:justify-center md:ms-0 ">
                <div className="  flex w-fit rounded-md bg-white  md:w-1/2 ">
                  <input
                    type="text"
                    className=" outline-none bg-none text-black w-[90%] bg-transparent pl-2 "
                    placeholder="hjkj w-1/2"
                  />

                  <Search className="   text-black  w-[12%] h-full flex justify-end pe-1  place-items-center pr-3 " />
                    
                  
                </div>

                <div className="flex place-items-center bg-orange-500 rounded-md w-20 hover:bg-white hover:text-orange-500">
                  <p
                    className="w-full text-center"
                    onClick={() => {
                      navigate("/login");
                    }}
                  >
                    {" "}Log in
                  </p>
                </div>
                <div className="flex place-items-center mr-3 bg-white rounded-md  w-20 text-black hover:bg-orange-500  hover:text-white">
                  <p
                    className="w-full text-center"
                    onClick={() => {
                      openGetStartedPageScreen();
                    }}
                  >
                    {" "}Register
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto w-full h-[600px]  pt-44 pl-5 pr-10">
          <div className=" xl:flex  font-nunito ">
            <div
              className={`hero-text-container xl-w-[90%] h-[355px] ${props.adjustHeight}   top-[140px]  `}
            >
              <div
                className={`hero-text h-[219px] ${props.adjustHeight} flex flex-col `}
              >
                <div
                  className={` text-white h-[54px]  mt-[10px]  w-[90%]  text-6xl font-bold   leading-[80px] text-left place-self-center ${props.lineHeight} ${props.textSize}`}
                >
                  {props.text}
                </div>

                <div className="mt-[120px] text-white font-bold text-left pl-10 z-10 text-balance text-xl">
                  Carefully selected, best homes thats meet with your rental
                  needs
                </div>

              <div className="flex justify-center items-center gap-5 mt-12">
              <div
                  className="bg-yellow-600 rounded-2xl   place-self-center w-[20%] text-center p-4 text-white z-10 hover:bg-white hover:text-yellow-600"
                  onClick={() => {
                    if (props.buttonOneText === "Get Started") {
                      openGetStartedPageScreen();
                    } else {
                      navigate("/login");
                    }
                  }}
                >
                  <p>
                    {props.buttonOneText}
                  </p>
                </div>

                <div
                  className={`${props.makeVisible} bg-white rounded-2xl w-[20%] text-center place-self-center p-4  text-black z-10 hover:bg-white hover:text-yellow-600 `}
                  onClick={() => {
                    openGetStartedPageScreen();
                  }}
                >
                  <p>Register</p>
                </div>
              </div>
              </div>
            </div>

            <div className="sideImage-Container hidden xl:block m-3 h-[200px] ">
              <img className="w-[550px] mx-" src={sideImage} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBarComponent;
