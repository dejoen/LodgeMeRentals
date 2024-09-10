/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { io } from "socket.io-client";
import BaseURL from "../utils/BaseURL";

 

export const SocketContext = createContext()


const SocketContextProvider = ({children}) =>{
  const [socketConnected,setSocketConnected] = useState(false)
  let socket = null

   const connectSocket = async (token) =>{
   
      
    if(!token) return 'token needed'

        socket =  io(`${BaseURL.LOCAL_URL_SOCKET}`,{
        auth:{
            token
        }
       })
      
    
   }

   const getSocket = () =>{
     return socket
   }

   

 




    return (
     <SocketContext.Provider value={{connectSocket,socketConnected,getSocket}}>

        {children}
     </SocketContext.Provider>

    );
}

export default SocketContextProvider

