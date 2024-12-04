import { Navigate, Outlet } from "react-router-dom";
import UserProfileSideBar from "../../../component/agent/userProfile/UserProfileSideBar";
import UserProfileBodyDrawer from "../../../component/agent/userProfile/UserProfileDrawer";
import React, { useContext, useEffect } from "react";
import { CombineContext } from "../../../../../context/CombineContextProvider";

const UserProfileMainScreen = () => {
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
  }, []);

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
     
        socketConnectedReducerState.socket.emit('fetch-published-house',"fetching houses.......")
          
       
      });
    },
    [socketConnectedReducerState]
  );
   
    
   
  return (
    <React.Fragment>
      { 
      (agentReducerState.data.userName)
        ? <div className="flex h-[100vh] w-full overflow-x-hidden">
            <UserProfileSideBar />
            <Outlet />
            <UserProfileBodyDrawer />
          </div>
        : <Navigate to={"/login"} />}
    </React.Fragment>
  );
};

export default UserProfileMainScreen;
