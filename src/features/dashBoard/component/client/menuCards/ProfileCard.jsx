import PropTypes from "prop-types";
import useGetClientUpdatedState from "../../../hooks/client/useGetClientUpdatedState";
//import favoriteIcon  from "../../../../../assets/client/menuIcons/favouriteicon.svg"
import helpAndSupportIcon  from "../../../../../assets/client/menuIcons/helpandsupport.svg"
import logoutIcon  from "../../../../../assets/client/menuIcons/logouticon.svg"
import profileIcon  from "../../../../../assets/client/menuIcons/clientprofileicon.svg"
import { useNavigate} from "react-router-dom";
import { GitPullRequestArrow } from 'lucide-react';


const ProfileCard = ({ display }) => {
  const { clientUpdatedState } = useGetClientUpdatedState();
  const navigate = useNavigate()

  return (
    <div
      className={`font-nunito ${display} flex-col  w-[300px] md:w-[360px] h-full bg-white shadow-lg rounded-sm cursor-default  `}
    >
      <div className="hidden w-full mt-3 md:flex justify-center">
        <img src="/" />
        <div className="ms-4">
          <p>
            {clientUpdatedState.data.userName}
          </p>
          <p className="text-sm">
            {clientUpdatedState.data.userEmail}
          </p>
        </div>
      </div>

      <div className="flex ms-6 mt-5 font-bold">
        <div className="flex gap-2">
        <img src={profileIcon} alt="profile"  className="w-[20px] h-[20px]" />
          <p className=" " onClick={()=>{
            navigate("/client/dashboard/profile",{state:clientUpdatedState})
          }}>Profile</p>
        </div>
      </div>
   {/*   <div className="flex ms-6 mt-5 font-bold">
        <div className="flex gap-2">
          <img src={favoriteIcon} alt="favorites"  className="w-[20px] h-[20px]" />
          <p>Favourites</p>
        </div>
      </div> */ }

      <div className="flex ms-6 mt-5 font-bold">
        <div className="flex gap-2"  >
        <GitPullRequestArrow size={19}/>
          <p >Make A Request</p>
        </div>
      </div>
    

      <div className="flex ms-6 mt-5 font-bold">
        <div className="flex gap-2">
        <img src={helpAndSupportIcon} alt="support"  className="w-[20px] h-[20px]" />
      
          <p onClick={()=>{
            navigate("/client/dashboard/help")
          }}>Help And Support</p>
        </div>
      </div>

      <div className="flex ms-6 mt-5 font-bold">
        <div className="flex gap-2">
        <img src={logoutIcon} alt="logout"  className="w-[20px] h-[20px]" />
      
          <p  onClick={()=>{
            navigate("/login",{state:clientUpdatedState})
          }}>Logout</p>
        </div>
      </div>
    </div>
  );
};

ProfileCard.propTypes = {
  display: PropTypes.string
};
export default ProfileCard;
