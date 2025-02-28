/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";

const AgentCard = props => {
  const navigate = useNavigate();

  return (
    <div
      className=" font-nunito  w-full  p-3 md:w-[370px] md:h-[200px] bg-white shadow-sm shadow-black hover:shadow-xl    rounded-3xl m-2 flex flex-col place-items-center  md:flex-row gap-3 "
      onClick={() => {
        switch (props.header) {
          case "Publish Your House": {
            navigate("/agent/dashboard/publish-home/houseOverview");
            return;
          }
          case "Refer & Earn": {
            navigate("/agent/dashboard/agentrefer");
            return;
          }
          case "Market Insights": {
            navigate("/agent/dashboard/market-insights");
            return;
          }
          case "Access Your Listed Houses": {
            navigate("/agent/dashboard/listed-houses");
            return;
          }
         

          case "Help & Support": {
            navigate("/agent/dashboard/helpandsupport/accessibility");
            return;
          }
          case "Log Out": {
            navigate("/login");
            return;
          }
          default:
            null;
        }
      }}
    >
      <img className="ms-2 w-[80px] " src={props.image} />
      <div className="flex flex-col place-items-center justify-center">
        <p className="font-bold text-xl">
          {props.header}
        </p>
        <p className="text-center">
          {props.body}
        </p>
      </div>
    </div>
  );
};

export default AgentCard;
