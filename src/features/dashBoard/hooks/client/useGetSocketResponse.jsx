import { useEffect, useState } from "react";
import useGetClientSocket from "./useGetClientSocket";

const useGetSocketResponse = () => {
  const [messagesFromMessageSent, setMessagesFromMessageSent] = useState();

  const userSocket = useGetClientSocket();

  useEffect(() => {
    if (userSocket) {
      userSocket.on("message-sent", (data) => {
        setMessagesFromMessageSent(JSON.parse(data));
        return;
      });
    }
  }, []);

  return { messagesFromMessageSent };
};

export default useGetSocketResponse;
