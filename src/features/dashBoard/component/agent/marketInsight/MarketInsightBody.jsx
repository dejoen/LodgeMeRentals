import MarketInsightsOverviewCard from "./MarketInsightsOverviewCard";

const MarketInsightBody = () => {
  return (
    <div className="mt-20 p-5  font-nunito">
      <div>
        <p className="font-bold text-2xl">Market Insights</p>
        <p>
          Market Insights page provides valuable data and trends to help
          landlords, agents, and real professionals make informed decisions. The
          page offer a detailed analysis of the rental market, demand patterns,
          and area-specific insights.
        </p>


      </div>
      <div>
        <p className="font-bold m-5">Overview of the rental market.</p>
        <MarketInsightsOverviewCard header="Families" bodyOne="100" bodyTwo="since last month" percentage="16.0"/>
      </div>
    </div>
  );
};

export default MarketInsightBody;
