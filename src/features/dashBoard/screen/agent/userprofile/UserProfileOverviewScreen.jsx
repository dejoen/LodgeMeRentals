import image from "../../../../../assets/bodyImage3.svg";
import UserProfileBodyContainer from "../../../component/agent/userProfile/UserProfileBodyConatainer";

const UserProfileOverviewScreen = () => {
  return (
    <div className=" font-nunito relative w-full overflow-x-hidden">
      <div className="md:hidden md:aria-hidden:hidden">
        <p>menu</p>
      </div>

      <div className="absolute ms-8 top-[28%] z-50 left-2  bg-white w-[120px] h-[120px] rounded-full flex place-items-center shadow-2xl">
        {" "}gggxg
      </div>

      <div className="relative">
        <div className="m-8  ">
          <div className="bg-[#D9D9D9] w-full h-[200px] rounded-t-2xl flex">
            <img
              className="w-full h-full  object-cover rounded-t-2xl "
              src={image}
            />
          </div>
          <div className="  ms-[30px] md:ms-[150px] mt-2  flex flex-wrap  justify-center  md:justify-between gap-5 md:gap-0">
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

      <div className=" w-full p-8">
         <UserProfileBodyContainer/>
      </div>
    </div>
  );
};

export default UserProfileOverviewScreen;
