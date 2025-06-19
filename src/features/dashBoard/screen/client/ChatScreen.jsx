import { useEffect, useRef, useState } from "react";
import ChatBody from "../../component/client/chat/ChatBody";
import pickFileIcon from "../../../../assets/selectFile.svg";
import InboxSection from "../../component/client/chat/InboxSection";
import { json, useLocation } from "react-router-dom";
import useGetClientSocket from "../../hooks/client/useGetClientSocket";
import MessageType from "../../../../utils/MessageType.json";
import useGetClientUpdatedState from "../../hooks/client/useGetClientUpdatedState";
import useGetMessagesBetweenUsers from "../../hooks/client/useGetMessagesBetweenUsers";
import { getMessages, getMessagesBetweenUsers } from "../../service";

const ChatScreen = () => {
  const chatLayoutRef = useRef();
  const { state } = useLocation();

  const [typedMessage, setTypedMessage] = useState();

  const [chatInfo, setChatinfo] = useState([]);
  const userSocket = useGetClientSocket();

  const { clientUpdatedState } = useGetClientUpdatedState();

  const [typing, setTyping] = useState({
    senderId: "",
    isTyping: false,
  });

  const [messages, setMessages] = useState([]);

  const [activeChatId, setActiveChatId] = useState(state.publisher._id);

  const [currentChatIndex, setCurrentChatIndex] = useState(0);

  useEffect(() => {
    if (userSocket) {
      userSocket.on("message-sent", (data) => {
        setMessages(data);
        setChatinfo(data);
      });

      userSocket.on("message-received", (data) => {
        alert("received");
        //setDefaultMessages(data);
      });

      /*userSocket.on("typing", data => {
      
      
    const user = JSON.parse(data)

     if(user.typing){
      setTyping({
        senderId:user.senderId,
  isTyping:true
      })
   
     }else{
      setTyping({
        senderId:user.senderId,
  isTyping:false
      })
     }

       
           
      
              // setMessages(JSON.parse(data.messages));
            })*/
    }
  }, [userSocket]);

  useEffect(() => {
    getMessages(clientUpdatedState.data.token)
      .then(async (response) => {
        try {
          if (response.status === 200 && response.ok) {
            const result = await response.json();

            if (result.userMessages && messages.length === 0) {
              setMessages(result.userMessages);
              setChatinfo(result.userMessages);

              // setDefaultMessages(result.userMessages[0]);
            }
          }
        } catch (error) {
          alert(error);
        }
      })
      .catch((err) => alert(err));
  }, []);

  return (
    <div className=" relative w-full flex max-h-[650px] font-nunito ">
      {/**
       * Inbox chat
       *
       */}

      <div className=" w-[450px] hidden md:flex flex-col h-screen border  shadow-md shadow-black rounded-lg m-3">
        <div className="w-full p-3">
          <div className="w-full mt-10  border border-black rounded-md">
            <input type="text" className=" outline-none w-full h-[30px]" />
          </div>

          <p> All Inbox</p>
        </div>

        <div className=" w-full flex flex-col gap-1 overflow-y-auto" style={{ scrollbarWidth: "none" }}>
          {messages.map((item, index) => (
            <InboxSection
              key={index}
              onClick={(chatInfo, index) => {
                if (index !== currentChatIndex) {
                  setCurrentChatIndex(index);
                }

                setActiveChatId(
                  item.sender._id !== clientUpdatedState.data._id ? chatInfo.sender._id : chatInfo.receiver._id,
                );
              }}
              index={index}
              messages={item.messages}
              userName={
                item.sender._id !== clientUpdatedState.data._id
                  ? (item.sender.userName ?? item.sender.firstName)
                  : (item.receiver.userName ?? item.receiver.firstName)
              }
              message={item.sender._id !== clientUpdatedState.data._id && item.messages[item.messages.length - 1].text}
              numberOfMessages={item.sender._id !== clientUpdatedState.data._id && 2}
              userProfile={
                item.sender._id !== clientUpdatedState.data._id
                  ? item.sender.userProfile.profileImage
                  : item.receiver.userProfile.profileImage
              }
            />
          ))}
        </div>
      </div>

      {/**
       * Message body view
       *
       */}

      <div className="w-full relative   md:w-[100%]  h-screen border  shadow-md shadow-black rounded-lg m-3 ">
        <div className="m-8 flex  place-items-center gap-3 ">
          <img
            src={
              chatInfo[currentChatIndex]
                ? chatInfo[currentChatIndex].sender._id !== clientUpdatedState.data._id
                  ? (chatInfo[currentChatIndex].sender.userProfile.profileImage ?? "/")
                  : chatInfo[currentChatIndex].receiver.userProfile.profileImage
                : (state.publisher.userProfile.profileImage ?? "/")
            }
            className="bg-orange-600 w-[80px] h-[80px] rounded-full"
          />
          <div className="mt-5">
            <p>
              {chatInfo[currentChatIndex]
                ? chatInfo[currentChatIndex].sender._id !== clientUpdatedState.data._id
                  ? (chatInfo[currentChatIndex].sender.userName ??
                    chatInfo[currentChatIndex].sender.userProfile.firstName)
                  : (chatInfo[currentChatIndex].receiver.userName ??
                    chatInfo[currentChatIndex].receiver.userProfile.firstName)
                : (state.publisher.userProfile.userName ?? state.publisher.userProfile.firstName)}
            </p>

            <p
              className={`${
                chatInfo[currentChatIndex]
                  ? chatInfo[currentChatIndex].sender._id !== clientUpdatedState.data._id
                    ? chatInfo[currentChatIndex].sender.isOnline
                      ? "text-[#129034] text-sm"
                      : "text-red-600 text-sm"
                    : chatInfo[currentChatIndex].receiver.isOnline
                      ? "text-[#129034] text-sm"
                      : "text-red-600 text-sm"
                  : state.publisher.isOnline
                    ? "text-[#129034] text-sm"
                    : "text-red-600 text-sm"
              }`}
            >
              {chatInfo[currentChatIndex]
                ? chatInfo[currentChatIndex].sender._id !== clientUpdatedState.data._id
                  ? chatInfo[currentChatIndex].sender.isOnline
                    ? "online"
                    : "offline"
                  : chatInfo[currentChatIndex].receiver.isOnline
                    ? "online"
                    : "offline"
                : state.publisher.isOnline
                  ? "Online"
                  : "Offline"}
            </p>
            {chatInfo[currentChatIndex] &&
              typing.isTyping &&
              typing.senderId !== chatInfo[currentChatIndex].sender._id && (
                <p className="text-sm italic">Typing.......</p>
              )}
          </div>
        </div>

        <div ref={chatLayoutRef} className="relative h-[65%] overflow-hidden " style={{ scrollbarWidth: "none" }}>
          {chatInfo &&
            !Object.entries(chatInfo).every((it) => {
              return it === null || it === undefined;
            }) && <ChatBody chatInfo={chatInfo[currentChatIndex]} />}
        </div>

        <div className=" w-full  border h-[15%] p-3  ">
          <div className="relative  w-full h-full  border border-black border-opacity-20">
            <textarea
              value={typedMessage}
              onChange={(e) => {
                setTypedMessage(e.target.value);
              }}
              className="outline-none text-justify relative border-none w-full h-full"
              style={{ resize: "none", scrollbarWidth: "none" }}
            />

            <div className="absolute bottom-1 right-1 flex gap-1 flex-row-reverse ">
              <div
                className=" bg-[#BB7655] text-white p-1 rounded-md cursor-default"
                onClick={() => {
                  if (userSocket) {
                    userSocket.emit(
                      "send-message",
                      JSON.stringify({
                        sender: clientUpdatedState.data._id,
                        receiver: activeChatId,
                        time: Date.now(),
                        type: MessageType.TEXT,
                        data: typedMessage,
                      }),
                    );
                    setTypedMessage("");
                  }
                }}
              >
                Send
              </div>
              <img src={pickFileIcon} alt="Select file icon" />
            </div>
          </div>
        </div>
      </div>

      {/**
       * General information view
       *
       */}

      <div className="w-[450px] hidden md:flex  flex-col h-screen border  shadow-md shadow-black rounded-lg m-3">
        <p className="w-full text-center mt-5">General Information</p>
        <div className="w-full  ">
          <div className="rounded-md shadow shadow-black h-[250px] m-3 p-4">
            <div className="w-full flex place-items-center gap-2">
              <img
                src={
                  chatInfo && chatInfo.receiverId
                    ? (chatInfo.receiver.userProfile.profileImage ?? "/")
                    : (state.publisher.userProfile.profileImage ?? "/")
                }
                className="bg-orange-500 w-[50px] h-[50px] rounded-full"
              />
              <p>
                {chatInfo && chatInfo.receiver
                  ? (chatInfo.receiver.userName ?? chatInfo.receiver.userProfile.firstName)
                  : (state.publisher.userProfile.userName ?? state.publisher.userProfile.firstName)}
              </p>
            </div>

            <div className="mt-4 flex">
              <p className="text-[16px]">member since:</p>
              <p className="text-[14px]">
                {new Date(
                  chatInfo && chatInfo.receiver ? chatInfo.receiver.timeCreated : state.publisher.timeCreated,
                ).toLocaleDateString()}
              </p>
            </div>

            <div className=" flex">
              <p>From:</p>
              <p className="">{`${chatInfo && chatInfo.receiver ? chatInfo.receiver.userProfile.localGovt : state.publisher.userProfile.localGovt},${chatInfo && chatInfo.receiver ? chatInfo.receiver.userProfile.state : state.publisher.userProfile.state}`}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatScreen;
