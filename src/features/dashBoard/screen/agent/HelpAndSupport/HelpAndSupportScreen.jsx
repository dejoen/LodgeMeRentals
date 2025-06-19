import { useContext } from "react";
import HelpAndSupportContainer from "../../../component/agent/helpandsupport/HelpAndSupportContainer";
import AgentContainer from "../../../component/AgentContainer";
import AgentNavBarDrawer from "../../../component/AgentNavBarDrawer";
import { CombineContext } from "../../../../../context/CombineContextProvider";

const HelpAndSupportScreen = () => {
  const { agentReducerState } = useContext(CombineContext);

  return (
    <div className="w-full font-nunito overflow-hidden">
      <AgentContainer
        header={"Welcome \n" + agentReducerState.data.userName + "!"}
        body={"What would you like to see today?"}
      />

      <HelpAndSupportContainer />
      <AgentNavBarDrawer />
    </div>
  );
};

export default HelpAndSupportScreen;
