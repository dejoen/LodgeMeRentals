/* eslint-disable react/prop-types */

import React, { createContext, useReducer } from "react";
import ClientLoginReducer, { clientLoginInitialState } from "../reducer/ClientLogInReducer.jsx";
import AgentReducer, { agentInitialState } from "../reducer/AgentReducer.jsx";
import { io } from "socket.io-client";
import BaseURL from "../utils/BaseURL.jsx";
import SocketReducer, { SocketInitialState } from "../reducer/SocketReducer.jsx";

import AllDataToPublishReducer, { allDataToPublishReducerInitialState } from "../reducer/PublishHouseDataReducer.jsx";
import HousesPublishedByAgentReducer, {
  HousesPublishedByAgentInitialState,
} from "../reducer/HousesPublishedByAgentReducer.jsx";
import NotificationReducer, { NotificationInitialState } from "../reducer/NotificationReducer.jsx";

export const CombineContext = createContext();

const CombineContextProvider = React.memo(({ children }) => {
  const [socketConnectedReducerState, socketConnectedReducerDispatcher] = useReducer(SocketReducer, SocketInitialState);

  const [allDataToPublishReducerState, allDataToPublishReducerDispatcher] = useReducer(
    AllDataToPublishReducer,
    allDataToPublishReducerInitialState,
  );

  const [housesPublishedByAgentReducerState, housesPublishedByAgentReducerDispatcher] = useReducer(
    HousesPublishedByAgentReducer,
    HousesPublishedByAgentInitialState,
  );

  const [notificationState, notificationDispatcher] = useReducer(NotificationReducer, NotificationInitialState);

  const connectSocket = async (token) => {
    if (!token) {
      throw new Error("token needed to continue");
    }
    const socket = io(BaseURL.SOCKET_URL, {
      auth: {
        token,
      },
    });

    socketConnectedReducerDispatcher({
      TYPE: "Connect",
      payload: {
        ...socketConnectedReducerState,
        isSocketConnect: true,
        socket,
      },
    });
  };

  const [clientReducerState, clientReducerDispatcher] = useReducer(ClientLoginReducer, clientLoginInitialState);

  const [agentReducerState, agentReducerDispatcher] = useReducer(AgentReducer, agentInitialState);

  return (
    <CombineContext.Provider
      value={{
        clientReducerState,
        clientReducerDispatcher,
        agentReducerState,
        agentReducerDispatcher,
        connectSocket,
        socketConnectedReducerDispatcher,
        socketConnectedReducerState,
        allDataToPublishReducerState,
        allDataToPublishReducerDispatcher,
        housesPublishedByAgentReducerState,
        housesPublishedByAgentReducerDispatcher,
        notificationDispatcher,
        notificationState,
      }}
    >
      {children}
    </CombineContext.Provider>
  );
});

export default CombineContextProvider;
