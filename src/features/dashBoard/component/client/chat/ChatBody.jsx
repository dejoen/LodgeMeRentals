import { useEffect, useRef } from "react";
import Message from "./Message";
import { useState } from "react";
import PropTypes from "prop-types";
import useGetMessagesBetweenUsers from "../../../hooks/client/useGetMessagesBetweenUsers";
import useGetClientUpdatedState from "../../../hooks/client/useGetClientUpdatedState";
import useGetClientSocket from "../../../hooks/client/useGetClientSocket";

const ChatBody = ({ receiverId }) => {


  let layoutHeight = useRef();


  const [messages, setMessages] = useState([]);

  const { clientUpdatedState } = useGetClientUpdatedState();


  const { messagesFromServer } = useGetMessagesBetweenUsers(
    clientUpdatedState.data.token,
    receiverId
  );

  const socket = useGetClientSocket();
  useEffect(
    () => {
      let timeout = null;
      if (messagesFromServer && messagesFromServer.length > 0) {
        setMessages(messagesFromServer);
      }

      timeout = setTimeout(() => {
        if(layoutHeight.current)
        layoutHeight.current.children[
          layoutHeight.current.children.length - 1
        ].scrollIntoView({ behavior: "smooth", blocK: "end" });
      }, 500);

      return () => {
        if (timeout) clearTimeout(timeout);
      };
    },
    [messagesFromServer]
  );

  useEffect(
    () => {
      let timeout = null;
      if (socket)
        socket.on("message-sent", data => {
          setMessages(JSON.parse(data));

          timeout = setTimeout(() => {
            if (layoutHeight.current)
              layoutHeight.current.children[
                layoutHeight.current.children.length - 1
              ].scrollIntoView({ behavior: "smooth", blocK: "end" });
          }, 100);
        });

      return () => {
        if (timeout) clearTimeout(timeout);
      };
    },
    [socket]
  );

  return (
    <div
      ref={layoutHeight}
      className={`font-nunito w-full flex flex-col ${messages.length < 6 &&
        " justify-end"} h-full overflow-y-auto  p-2  `}
    >
      {messages.reverse().map((item, index) =>
        <div key={index}>
          {index === 0 &&
            <div className="w-full flex justify-center">
              <p className="bg-black rounded-md text-white p-1">Friday</p>
            </div>}

          {index === 4 &&
            <div className="w-full flex justify-center">
              <p className="bg-black rounded-md text-white p-1">Today</p>
            </div>}
          <Message message={item} />
        </div>
      )}
    </div>
  );
};

ChatBody.propTypes = {
  receiverId: PropTypes.string
};

export default ChatBody;
