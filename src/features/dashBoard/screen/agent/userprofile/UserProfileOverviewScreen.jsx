import image from "../../../../../assets/bodyImage3.svg";
import UserProfileBodyContainer from "../../../component/agent/userProfile/UserProfileBodyConatainer";
import menuIcon from "../../../../../assets/menuIcon.svg";
import { openAgentProfileDrawer } from "../../../component/agent/userProfile/UserProfileDrawer";
import { useNavigate } from "react-router-dom";

const UserProfileOverviewScreen = () => {
  const navigate = useNavigate()
  return (
    <div className=" font-nunito relative w-full overflow-x-hidden">
      <div className="md:hidden md:aria-hidden:hidden w-full flex justify-end">
        <img
          className="w-[30px] h-[30px] mt-2 me-5 place-self-end"
          src={menuIcon}
          onClick={() => {
            openAgentProfileDrawer();
          }}
        />
        <p className="left-0 absolute font-bold text-2xl mt-2 ms-3 hover:text-orange-400" onClick={()=>{
          navigate(-1)
        }}>{"<"}</p>
      </div>

     

      <div className="relative">
        <div className="m-8  ">
       
          <div className="bg-[#D9D9D9] w-full h-[200px] rounded-t-2xl flex">
            <img
              className="w-full h-full  object-cover rounded-t-2xl "
              src={image}
            />

<div className="absolute ms-4 md:ms-8 top-[33%]   md:top-[45%]   z-50 left-6  bg-white  w-[100px] h-[100px]  md:w-[120px] md:h-[120px] rounded-full flex place-items-center shadow-2xl">
        {" "}gggxg
      </div>
          </div>
          <div className="  ms-[80px] md:ms-[150px] mt-2  flex flex-wrap  justify-center  md:justify-between gap-5 md:gap-0">
            <div className="">
              <div>
                <p>
                  {"Agent's Name"}
                </p>
              </div>
              <p>
                Title:<span>House owner/Agent</span>
              </p>
              <p>
                Location:<span>{"Agent's Location"}</span>
              </p>
            </div>

            <div className="flex gap-5  flex-wrap justify-center  place-items-center md:place-items-start   ">
              <div className="bg-[#1C2E7A] flex text-white place-items-center gap-2 p-2 h-[35px] rounded-md">
                <img src="/" />
                <p>Preview Profile</p>
              </div>
              <div className="bg-[#1C2E7A] flex text-white place-items-center gap-2 p-2 rounded-md h-[35px] ">
                <img src="/" />
                <p>Preview Profile</p>
              </div>
              <div className="bg-[#1C2E7A] flex text-white place-items-center gap-2 p-2 rounded-md h-[35px] ">
                <img src="/" />
                <p>Preview Profile</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" w-full p-2 md:p-8">
        <UserProfileBodyContainer />
      </div>
    </div>
  );
};

export default UserProfileOverviewScreen;
