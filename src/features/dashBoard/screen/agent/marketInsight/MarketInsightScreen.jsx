import { useContext } from "react";
import AgentContainer from "../../../component/AgentContainer";
import { CombineContext } from "../../../../../context/CombineContextProvider";
import AgentNavBarDrawer from "../../../component/AgentNavBarDrawer";
import MarketInsightBody from "../../../component/agent/marketInsight/MarketInsightBody";

const MarketInsight = () => {
  const { agentReducerState } = useContext(CombineContext);
  return (
    <div className="w-full  h-screen overflow-y-auto">
      <AgentContainer
        header={"Welcome \n" + agentReducerState.data.userName + "!"}
        body={"What would you like to see today?"}
      />
      <MarketInsightBody />

      <AgentNavBarDrawer />
    </div>
  );
};

export default MarketInsight;
