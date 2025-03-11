
import { Navigate, Outlet } from "react-router-dom";
import DashBoardNavBar from "../../component/DashBoardNavBar";
import AgentVerificationPopUp from "../../component/AgentVerificationPopUp";
import useGetUpdatedState from "../../hooks/useGetUpdatedState";
import { useEffect, useRef, useState } from "react";
import useManageAgentState from "../../hooks/useManageAgentState"
import useGetAgentNotificationState from "../../hooks/useGetAgentNotificationState";
import { getNotitifications } from "../../service";
import useGetUpdatedSocket from "../../hooks/useGetUpdateSocket";


const AgentDashBoardScreen = () => {
  const audionRef = useRef()
  const  {agentState}  = useGetUpdatedState()
  const audio =  new Audio("/src/assets/notification.mp3")
 
  const {updateNotification,updatedNotification} = useGetAgentNotificationState()



  const {socketConnectedReducerState,connectSocket,agentReducerDispatcher,notificationState}  = useManageAgentState()

  useEffect(() => {
      if (
        !socketConnectedReducerState.isSocketConnect &&
        agentState.isLoggedIn
      ) {
        connectSocket(agentState.data.token);
      }

     
      
    }, []);

   
    socketConnectedReducerState.socket.on('notification',(data)=>{
            
      const count = JSON.parse(data).length - notificationState.notitifications.length
        updateNotification(JSON.parse(data),count)
        if(count>0){
        

        if(audio){
        
          audio.load()
          audio.volume = 0.1
          audio.play()
        }
        }
      })
  
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

     


   useState(()=>{
    getNotitifications(agentState.data.token).then(rs=>{
      return rs.json()
     }).then(result=>{
     
       if(result.status === 200){
       
         updateNotification(result.data,0)
       }
     }).catch(err=>{
     // alert(JSON.stringify(err.message))
     })

   },[])



  

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
