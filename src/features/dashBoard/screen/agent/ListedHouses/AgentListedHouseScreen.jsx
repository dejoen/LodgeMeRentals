import { useContext } from "react";
import AgentContainer from "../../../component/AgentContainer";
import AgentNavBarDrawer from "../../../component/AgentNavBarDrawer";
import { CombineContext } from "../../../../../context/CombineContextProvider";
import AgentListedHouseContainer from "../../../component/agent/listedhouses/AgentListedHousesContainer";

const AgentListedHouseScreen = () => {
  const { agentReducerState } = useContext(CombineContext);

  return (
    <div className="w-full font-nunito overflow-hidden">
      <AgentContainer
        header={"Welcome \n" + agentReducerState.data.userName + "!"}
        body={"What would you like to see today?"}
      />

      <AgentListedHouseContainer />
      <AgentNavBarDrawer />
    </div>
  );
};

export default AgentListedHouseScreen;
