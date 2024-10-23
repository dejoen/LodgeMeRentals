import NeighborHoodInsights from "../NeigborhoodInsightsBody";
import MarketInsightsOverviewCard from "./MarketInsightsOverviewCard";

const MarketInsightBody = () => {
  return (
    <div className="mt-20 p-5  font-nunito ">
      <div>
        <p className="font-bold text-2xl">Market Insights</p>
        <p>
          Market Insights page provides valuable data and trends to help
          landlords, agents, and real professionals make informed decisions. The
          page offer a detailed analysis of the rental market, demand patterns,
          and area-specific insights.
        </p>
      
   
      </div>
      <div className="">
        <p className="font-bold m-5">Overview of the rental market.</p>
           
           <div className="flex flex-wrap justify-evenly gap-5"> 
            {
                  [1,2,6].map((items,index)=>(
                  
                  <MarketInsightsOverviewCard header="kkk" bodyOne="gsgg" bodyTwo="hhhs" percentage="19.10%" key={index}/>                 ))
            }
           </div>
           </div> 
           <NeighborHoodInsights/>


           </div> 
            );
};

export default MarketInsightBody;
