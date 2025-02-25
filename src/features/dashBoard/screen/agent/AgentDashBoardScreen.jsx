
import { Navigate, Outlet } from "react-router-dom";
import DashBoardNavBar from "../../component/DashBoardNavBar";
import AgentVerificationPopUp from "../../component/AgentVerificationPopUp";
import useGetUpdatedState from "../../hooks/useGetUpdatedState";
import { useEffect } from "react";
import useManageAgentState from "../../hooks/useManageAgentState"


const AgentDashBoardScreen = () => {

  const  {agentState}  = useGetUpdatedState()

 
  

  const {socketConnectedReducerState,connectSocket,agentReducerDispatcher}  = useManageAgentState()

  useEffect(() => {
      if (
        !socketConnectedReducerState.isSocketConnect &&
        agentState.isLoggedIn
      ) {
        connectSocket(agentState.data.token);
      }
    }, []);
  
    socketConnectedReducerState.socket.on("socketConnected", user => {
      agentReducerDispatcher({
        TYPE: "Authentication",
        payload: {
          ...agentState,
          isLoggedIn: true,
          data: {
            ...user,
            token: agentState.data.token
          }
        }
      });
    });




  

  if (agentState.isLoggedIn) {
    return (
      <div className="flex h-[100vh] w-full overflow-x-hidden">
        <DashBoardNavBar />
        <Outlet />

        {!agentState.data.isAgentFileAlreadyUploaded &&
          <AgentVerificationPopUp
            showScreen={true}
            token={agentState.data.token}
          />}
      </div>
    );
  } else {
    return (
      <div>
        <Navigate to={"/login"} />
      </div>
    );
  }
};

export default AgentDashBoardScreen;
