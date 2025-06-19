import { useEffect, useState } from "react";
import { getMessagesBetweenUsers } from "../../service";

const useGetMessagesBetweenUsers = (token, receiverId) => {
  const [messagesFromServer, setMessages] = useState();
  const [id, setId] = useState({ senderId: "", receiverId: "" });

  useEffect(() => {
    getMessagesBetweenUsers(token, receiverId)
      .then(async (res) => {
        return res.json();
      })
      .then((result) => {
        if (result.status === 200) {
          setMessages(result.data);
          return;
        }
        alert(JSON.stringify(result));
      })
      .catch((err) => {
        //  alert(err)
      });
  }, [receiverId, token]);

  return { messagesFromServer, id };
};

export default useGetMessagesBetweenUsers;
