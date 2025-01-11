import { useContext } from "react";
import AgentContainer from "../../../component/AgentContainer";
import { CombineContext } from "../../../../../context/CombineContextProvider";
import AgentNavBarDrawer from "../../../component/AgentNavBarDrawer";
import RequestContainer from "../../../component/agent/request/RequestContainer";

const MarketInsight = () => {
  const { agentReducerState } = useContext(CombineContext);
  return (
    <div className="w-full  h-screen overflow-y-auto">
      <AgentContainer
        header={"Welcome \n" + agentReducerState.data.userName + "!"}
        body={"What would you like to see today?"}
      />
      {
        /**
         * market insight restructured this flow  would not be used now switching to  request view.
         * used  <RequestContainer/> in place of <MarketInsightBody />
        */
      }
      <RequestContainer/>

      <AgentNavBarDrawer />
    </div>
  );
};

export default MarketInsight;
