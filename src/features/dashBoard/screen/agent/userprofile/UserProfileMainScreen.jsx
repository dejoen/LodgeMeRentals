import { Navigate, Outlet } from "react-router-dom";
import UserProfileSideBar from "../../../component/agent/userProfile/UserProfileSideBar";
import UserProfileBodyDrawer from "../../../component/agent/userProfile/UserProfileDrawer";
import React, { useContext } from "react";
import { CombineContext } from "../../../../../context/CombineContextProvider";

const UserProfileMainScreen = () => {
    const { agentReducerState } = useContext(CombineContext)

   const user = agentReducerState.data
  return (
    <React.Fragment>
      { 
      (agentReducerState.data && user)
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
