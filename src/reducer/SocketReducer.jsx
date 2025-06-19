/* eslint-disable react-refresh/only-export-components */

import { io } from "socket.io-client";

export const SocketInitialState = {
  isSocketConnect: false,
  socket: io(),
};

const SocketReducer = (state, action) => {
  switch (action.TYPE) {
    case "Connect": {
      return (state = action.payload);
    }

    default:
      return state;
  }
};

export default SocketReducer;
