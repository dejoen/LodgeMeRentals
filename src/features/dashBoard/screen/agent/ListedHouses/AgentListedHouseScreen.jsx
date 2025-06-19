import { useContext, useEffect } from "react";
import AgentContainer from "../../../component/AgentContainer";
import AgentNavBarDrawer from "../../../component/AgentNavBarDrawer";
import { CombineContext } from "../../../../../context/CombineContextProvider";
import AgentListedHouseContainer from "../../../component/agent/listedhouses/AgentListedHousesContainer";
import { getAllHousesPublishedAgent } from "../../../service";

const AgentListedHouseScreen = () => {
  const { agentReducerState, housesPublishedByAgentReducerDispatcher } = useContext(CombineContext);

  useEffect(() => {
    const user = agentReducerState.data;
    getAllHousesPublishedAgent(user.token, user._id)
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        housesPublishedByAgentReducerDispatcher({
          TYPE: "Save_Data",
          payload: result,
        });
      })
      .catch((err) => alert(err));
  }, [agentReducerState, housesPublishedByAgentReducerDispatcher]);

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
