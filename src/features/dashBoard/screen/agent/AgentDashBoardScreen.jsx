
import { Navigate, Outlet } from "react-router-dom";
import DashBoardNavBar from "../../component/DashBoardNavBar";
import AgentVerificationPopUp from "../../component/AgentVerificationPopUp";
import useGetUpdatedState from "../../hooks/useGetUpdatedState";


const AgentDashBoardScreen = () => {

  const  {agentState}  = useGetUpdatedState()

 
  






  

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
