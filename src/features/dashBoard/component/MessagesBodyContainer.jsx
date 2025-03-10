import { CircleUserRound, Paperclip } from "lucide-react";
import useGetUpdatedState from "../hooks/useGetUpdatedState";
import useGetMessagesBetweenUsers from "../hooks/client/useGetMessagesBetweenUsers";
import { useEffect, useRef, useState } from "react";
import AgentClientChatCard from "./AgentClientChatCard";
import MessageCard from "./agent/chat/MessageCard";
import useGetUpdatedSocket from "../hooks/useGetUpdateSocket";
import MessageType from "../../../utils/MessageType.json";
import useGetAgentNotificationState from "../hooks/useGetAgentNotificationState";

const MessagesBodyContainer = () => {
  const { agentState } = useGetUpdatedState();

  const { connectedSocket } = useGetUpdatedSocket();

  const data = agentState.data;

  const [textMessage, setTextMessage] = useState("");

  const [defaultMessages, setDefaultMessages] = useState({});

  const [messagesDetails, setMessagesDetials] = useState([]);

  const { messagesFromServer } = useGetMessagesBetweenUsers(data.token, "");

  const [activeChatId, setActiveChatId] = useState();
  const {updateNotification,updatedNotification} = useGetAgentNotificationState()

  useEffect(
    () => {
      if (messagesFromServer && messagesFromServer.length > 0) {
        setMessagesDetials(messagesFromServer);
        const reverseMessages = messagesFromServer[0];

        setDefaultMessages(reverseMessages);
        setActiveChatId(messagesFromServer[0].senderId._id);
      }
    },
    [messagesFromServer]
  );

  useEffect(
    () => {
      if (connectedSocket) {
        connectedSocket.on("message-sent", data => {
          setDefaultMessages(JSON.parse(data));
        });



       connectedSocket.on('notification',(data)=>{
        
        const count = JSON.parse(data).length - updatedNotification.length
          updateNotification(JSON.parse(data),count)
        })


      
      }
    },
    [connectedSocket]
  );

  let layoutHeight = useRef();

  useEffect(
    () => {
      let timeout = setTimeout(() => {
        if (
          layoutHeight.current &&
          layoutHeight.current.children[
            layoutHeight.current.children.length - 1
          ]
        )
          layoutHeight.current.children[
            layoutHeight.current.children.length - 1
          ].scrollIntoView({ behavior: "smooth", blocK: "end" });
      }, 100);

      return () => {
        if (timeout) clearTimeout(timeout);
      };
    },
    [defaultMessages]
  );

  return (
    <div className="overflow-hidden mx-auto md:ml-[22%] p-3 md:p-8  mt-[90px] md:w-[75%] h-fit  rounded-2xl m-5 md:shadow-2xl shadow-black">
      <div
        className="w-full p-2 md:p-3 rounded-lg mt-4 inline-flex overflow-x-auto    gap-4"
        style={{ scrollbarWidth: "none" }}
      >
        {messagesDetails &&
          messagesDetails.length > 0 &&
          messagesDetails.map((item, index) =>
            <AgentClientChatCard
              key={index}
              data={item}
              onClick={data => {
                setDefaultMessages(data);
                setActiveChatId(data.senderId._id);
              }}
            />
          )}
      </div>

      <div className="bg-messageBg p-2 md:p-3 rounded-lg mt-4">
        <div className="flex items-center justify-between gap-2 bg-white p-2 rounded md:flex-row flex-col md:px-5">
          <div
            className="w-fit h-fit"
            onClick={() => {
              //onClick(data)
            }}
          >
            <img
              className="w-[60px] h-[60px] bg-orange-600 rounded-full"
              src={
                defaultMessages && defaultMessages.senderId
                  ? defaultMessages.senderId.userProfile.profileImage
                  : "/"
              }
            />
          </div>

          <div className="flex items-center md:gap-4 gap-4">
            <div className="flex items-center flex-col">
              <h3 className="md:text-xl font-bold ">
                {defaultMessages &&
                  defaultMessages.senderId &&
                  defaultMessages.senderId.userName}
              </h3>

              {defaultMessages &&
              defaultMessages.senderId &&
              defaultMessages.senderId.isOnline
                ? <p onClick={() => {}} className="text-green-600 ">
                    {" "}Online{" "}
                  </p>
                : <p onClick={() => {}} className="text-red-600 ">
                    {" "}Offline{" "}
                  </p>}
            </div>
            {/*  <button className='flex items-center gap-1 md:gap-3 border rounded-lg px-3 py-2 border-black text-sm '> Set Appointment  <CirclePlus className='size-4'/></button>  
  <Search />
  <SquareMenu /> */}
          </div>
        </div>

        <div ref={layoutHeight} className="max-h-[400px] overflow-y-auto p-3">
          {defaultMessages &&
            defaultMessages.messages &&
            defaultMessages.messages.map((m, i) =>
              <MessageCard
                key={i}
                senderId={defaultMessages.senderId._id}
                message={m}
                userId={data._id}
              />
            )}
        </div>

        <div className="bg-white px-3 py-2 rounded-lg mt-[0%] border border-gray-800">
          <input
            value={textMessage}
            type="text"
            placeholder="Send a message"
            className=" outline-none  bg-transparent"
            onChange={e => {
              setTextMessage(e.target.value);
              if (connectedSocket) {
                connectedSocket.emit(
                  "typing",
                  JSON.stringify({
                    receiverId: activeChatId,
                    typing: true
                  })
                );
              }
            }}
          />
          <div className="flex items-center gap-3 justify-end">
            <Paperclip className="size-5" />
            <button
              className="bg-senderBg px-5 py-1 text-white rounded-lg  "
              onClick={() => {
                if (connectedSocket) {
                  if (textMessage && activeChatId) {
                    connectedSocket.emit(
                      "send-message",
                      JSON.stringify({
                        sender: data._id,
                        receiver: activeChatId,
                        time: Date.now(),
                        type: MessageType.TEXT,
                        data: textMessage
                      })
                    );

                    connectedSocket.emit(
                      "typing",
                      JSON.stringify({
                        receiverId: activeChatId,
                        typing: false
                      })
                    );

                    setTextMessage("");
                  }
                } else {
                  console.log("no socket instance connected");
                }
              }}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagesBodyContainer;
