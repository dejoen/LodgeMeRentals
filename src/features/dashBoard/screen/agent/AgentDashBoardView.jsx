import React, { useContext, useEffect, useRef } from "react";
import AgentBody from "../../component/AgentBody";
import AgentContainer from "../../component/AgentContainer";
import AgentNavBarDrawer from "../../component/AgentNavBarDrawer";
import useGetUpdatedState from "../../hooks/useGetUpdatedState";

const AgentDashboardView = React.memo(() => {
  const { agentState } = useGetUpdatedState();

  return (
    <div className="w-full  h-fit md:mb-4   overflow-y-auto">
      <AgentContainer
        header={"Welcome \n" + agentState.data.userName + "!"}
        body={"What would you like to see today?"}
      />

      <AgentBody />
      <AgentNavBarDrawer />
    </div>
  );
});

export default AgentDashboardView;
