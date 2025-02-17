import ListedHousesBody from "./ListedHousesBody";
import ListedHousesHeader from "./ListedHoussesHeader";
//import publishhouseIcon from "../../../../../assets/publishHouseIcon.svg";
//import { useNavigate } from "react-router-dom";

const AgentListedHouseContainer = () => {
 // const navigate = useNavigate();
  return (
    <div className="w-[98.6%]  md:w-[80%] md:ml-[20%] mx-auto mt-[8.4rem] bg-white z-30 shadow-black shadow-md h-[87.6vh] cursor-default  rounded-lg ms-1 me-20">
     {/* <div
        className="w-full h-fit pt-8 md:pt-20 flex justify-end pe-5 md:pe-20 gap-3"
        onClick={() => {
          navigate("/agent/dashboard/publish-home/houseOverview");
        }}
      >
        <p>Publish New House</p>
        <img
          src={publishhouseIcon}
          alt=""
          onClick={() => {
            navigate("/agent/dashboard/publish-home/houseOverview");
          }}
        />
      </div>*/}
      
      <ListedHousesBody />
    </div>
  );
};

export default AgentListedHouseContainer;
