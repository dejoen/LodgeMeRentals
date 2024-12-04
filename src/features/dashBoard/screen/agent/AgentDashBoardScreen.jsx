/* eslint-disable react-hooks/exhaustive-deps */
import { Navigate, Outlet } from "react-router-dom";
import DashBoardNavBar from "../../component/DashBoardNavBar";
import { useContext, useEffect } from "react";
import { CombineContext } from "../../../../context/CombineContextProvider";
import AgentVerificationPopUp from "../../component/AgentVerificationPopUp";

const AgentDashBoardScreen = () => {
  const {
    agentReducerState,
    agentReducerDispatcher,
    connectSocket,
    socketConnectedReducerState
  } = useContext(CombineContext);

  useEffect(() => {
    if (
      !socketConnectedReducerState.isSocketConnect &&
      agentReducerState.isLoggedIn
    ) {
      const con = async () => {
        await connectSocket(agentReducerState.data.token);
        
      };
      try {
        con();
      } catch (error) {
        alert(error.message);
      }
    }
  }, [socketConnectedReducerState]);

  useEffect(
    () => {
      socketConnectedReducerState.socket.on("socketConnected", user => {
        agentReducerDispatcher({
          TYPE: "Authentication",
          payload: {
            ...agentReducerState,
            isLoggedIn: true,
            data: {
              ...user,
              token: agentReducerState.data.token
            }
          }
        });
      });
    },
    [socketConnectedReducerState]
  );

  useEffect(
    () => {
      socketConnectedReducerState.socket.on("connect_error", () => {
        //alert(JSON.stringify(error))
      });
    },
    [socketConnectedReducerState]
  );

  

  if (agentReducerState.isLoggedIn) {
    return (
      <div className="flex h-[100vh] w-full overflow-x-hidden">
        <DashBoardNavBar />
        <Outlet />

        {!agentReducerState.data.isAgentFileAlreadyUploaded &&
          <AgentVerificationPopUp
            showScreen={true}
            token={agentReducerState.data.token}
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
