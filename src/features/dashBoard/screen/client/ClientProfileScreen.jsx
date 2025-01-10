import { useLocation } from "react-router-dom";

const ClientProfileScreen = () => {
  const { state } = useLocation();

  return (
    <div className="w-full  md:flex flex-wrap h-screen font-nunito relative">
      <div className="md:w-[40%]  flex flex-col place-items-center p-10 relative ">
        <div className="bg-[#D9D9D9] h-[200px]  rounded-md w-[200px]">
          <img
            src={
            ( state.data.userProfile && state.data.userProfile.profilePicture )
                ? state.data.userProfile.profilePicture
                : "/"
            }
            className=""
          />
        </div>
        <p className="mt-4  w-[200px]">{ state.data.userName}</p>


<div className="md:w-[200px] flex md:place-items-center  ">
<p className="mt-4 font-bold  ">{"Client's Details"}<span>%</span></p>

</div>

<div className="md:w-[200px] mt-3">
<p>Email:<span>{(state.data && state.data.userEmail)? state.data.userEmail : "Nil"}</span></p>
<p>Phone Number:<span>{(state.data && state.data.userPhoneNumber)? state.data.userPhoneNumber : "Nil"}</span></p>
<p>Date Of Birth:<span>{(state.data && state.data.userProfile.dob)? state.data.userProfile.dob : "Nil"}</span></p>
<p>Address:<span>{(state.data && state.data.userProfile.phoneNumber)? state.data.userProfile.phoneNumber : "Nil"}</span></p>

</div>
<div className=" w-[200px] mt-10 h-[60px] flex justify-evenly  md:absolute bottom-5">

<p className="w-[50px] h-full bg-cyan-400">dhdh</p>
<p className="w-[50px] h-full bg-cyan-400">dhdh</p>
<p className="w-[50px] h-full bg-cyan-400">dhdh</p>
</div>



      </div>

      <div className="md:w-[60%]  p-10 ">


        <div className="w-full flex justify-evenly cursor-default">
            <div className="hover:bg-black rounded-md hover:text-white h-fit p-2 cursor-default">
                <p>History</p>
            </div>

            <div className="hover:bg-black rounded-md hover:text-white p-2  h-fit cursor-default">
                <p>Applications</p>
            </div>

            <div className="hover:bg-black rounded-md hover:text-white p-2 h-fit  cursor-default">
                <p className="text-center">Legal and Compliance</p>
            </div>
        </div>




      </div>
    </div>
  );
};

export default ClientProfileScreen;
