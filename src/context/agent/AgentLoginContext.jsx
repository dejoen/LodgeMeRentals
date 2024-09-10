/* eslint-disable react/prop-types */
import { createContext, useState } from "react";



export const AgentLoginContext = createContext()

const AgentLoginContextProvider = ({children}) =>{

    const [agentLoginData,setAgentLoginData] =useState({
        data:{},
        isLoggedIn:false,
        failedToLoginMessage:''
    })
     return (
      <AgentLoginContext.Provider value={{agentLoginData,setAgentLoginData}} >
        {children}
      </AgentLoginContext.Provider>
     )
}


export default AgentLoginContextProvider