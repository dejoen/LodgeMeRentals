import { useContext } from "react";
import { CombineContext } from "../../../../../context/CombineContextProvider";
import AgentContainer from "../../../component/AgentContainer";
import AgentNavBarDrawer from "../../../component/AgentNavBarDrawer";
import AgentManagementContainer from "../../../component/agent/agentManagent/AgentManagementContainer";

const AgentManagementScreen = () => {
  const { agentReducerState } = useContext(CombineContext);

  return (
    <div className="w-full font-nunito overflow-hidden">
      <AgentContainer
        header={"Welcome \n" + agentReducerState.data.userName + "!"}
        body={"What would you like to see today?"}
      />

      <AgentManagementContainer />
      <AgentNavBarDrawer />
    </div>
  );
};

export default AgentManagementScreen;
