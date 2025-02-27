import {   useEffect, useRef, useState } from "react";
import ChatBody from "../../component/client/chat/ChatBody";
import pickFileIcon from "../../../../assets/selectFile.svg";
import InboxSection from "../../component/client/chat/InboxSection";
import { useLocation } from "react-router-dom";
import useGetClientSocket from "../../hooks/client/useGetClientSocket";
import  MessageType from "../../../../utils/MessageType.json"
import useGetClientUpdatedState from "../../hooks/client/useGetClientUpdatedState";
import useGetMessagesBetweenUsers from "../../hooks/client/useGetMessagesBetweenUsers";

const ChatScreen = () => {
  const chatLayoutRef = useRef();
  const { state } = useLocation();

  
 const [ typedMessage,setTypedMessage ] = useState()

 const [chatInfo,setChatinfo] = useState({})
 const userSocket = useGetClientSocket()

const {clientUpdatedState} = useGetClientUpdatedState()

const [typing,setTyping] = useState(false)

const [messages, setMessages] = useState([]);


const { messagesFromServer } = useGetMessagesBetweenUsers(
  clientUpdatedState.data.token,
  state.publisher._id
);

 const [activeChatId,setActiveChatId]  = useState(state.publisher._id)

useEffect(
    () => {
   
      if (userSocket){
        userSocket.on("message-sent", data => {
      
     


    
          setChatinfo(JSON.parse(data))
            // setMessages(JSON.parse(data.messages));
          })




          userSocket.on("typing", data => {
      
      
    const user = JSON.parse(data)

     if(user.typing){
      setTyping(true)
     }else{
      setTyping(false)
     }

    
           
      
              // setMessages(JSON.parse(data.messages));
            })
      }
     

      
    },
    [userSocket]
  );







  useEffect(
    () => {

      if (messagesFromServer && messagesFromServer.length > 0) {
        setMessages(messagesFromServer);
        const defaultChat =  messagesFromServer.find((data)=>{
          return data.receiverId._id ===   state.publisher._id
        })
      
        setChatinfo(defaultChat)
      }


    },
    [messagesFromServer]
  );




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

          <p > All Inbox</p>
        </div>

        <div className=" w-full flex flex-col gap-1 overflow-y-auto"  style={{ scrollbarWidth: "none" }}>
          {messages.map((item, index) =>
            <InboxSection
              key={index}
              onClick={(chatInfo)=>{
               setChatinfo(chatInfo
               )
               
               setActiveChatId(chatInfo.receiverId._id)
            
              }}
              messages={item}
              userName={item.receiverId.userName}
              message={(item.senderId._id !== clientUpdatedState.data._id) && item.messages[item.messages.length-1].text}
              numberOfMessages={(item.senderId._id !== clientUpdatedState.data._id) && 2}
              userProfile={item.receiverId.userProfile.profileImage}
            />
          )}
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
               chatInfo && chatInfo.receiverId ? chatInfo.receiverId.userProfile.profileImage ?? "/":
                 state.publisher.userProfile.profileImage ?? '/'
            }
            className="bg-orange-600 w-[80px] h-[80px] rounded-full"
          />
          <div className="mt-5">
            <p>
              {  chatInfo && chatInfo.receiverId ? chatInfo.receiverId.userName
                ?? chatInfo.receiverId.userProfile.firstName : state.publisher.userProfile.userName ?? state.publisher.userProfile.firstName }
            </p>
            <p
              className={`${  chatInfo && chatInfo.receiverId ?   chatInfo.receiverId.isOnline 
                ? "text-[#129034] text-sm"
                : "text-red-600 text-sm":state.publisher.isOnline ? "text-[#129034] text-sm"
                : "text-red-600 text-sm"}`}
            >
              {  chatInfo && chatInfo.receiverId ?  chatInfo.receiverId.isOnline  ? "Online" : "Offline": state.publisher.isOnline ? "Online" : "Offline"}
            </p>
             {
              typing && <p className="text-sm italic">Typing.......</p>
             }
          </div>
        </div>

        <div ref={chatLayoutRef} className="relative h-[65%] overflow-hidden " style={{ scrollbarWidth: "none" }}>
        {
          chatInfo && !(Object.entries(chatInfo).every((it)=>{ return it === null || it === undefined})) && <ChatBody chatInfo={chatInfo} />
        }
        
        </div>
          

        <div className=" w-full  border h-[15%] p-3  ">
          <div className="relative  w-full h-full  border border-black border-opacity-20">
            <textarea
            value={typedMessage}
            onChange={(e)=>{
              setTypedMessage(e.target.value)
            }}
              className="outline-none text-justify relative border-none w-full h-full"
              style={{ resize: "none", scrollbarWidth: "none" }}
            />

            <div className="absolute bottom-1 right-1 flex gap-1 flex-row-reverse ">
              
              <div className=" bg-[#BB7655] text-white p-1 rounded-md cursor-default" onClick={()=>{
             
              if(userSocket){

               userSocket.emit("send-message",JSON.stringify({
                    sender:clientUpdatedState.data._id,
                    receiver:activeChatId,
                    time:Date.now(),
                    type:MessageType.TEXT,
                    data:typedMessage
                 
                 }))
                 setTypedMessage("")
              }
              }}>
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
                  chatInfo && chatInfo.receiverId ? chatInfo.receiverId.userProfile.profileImage ?? "/":
                 state.publisher.userProfile.profileImage ?? '/'
                }
                className="bg-orange-500 w-[50px] h-[50px] rounded-full"
              />
              <p>
                { chatInfo && chatInfo.receiverId ? chatInfo.receiverId.userName
                ?? chatInfo.receiverId.userProfile.firstName : state.publisher.userProfile.userName ?? state.publisher.userProfile.firstName }
            
              </p>
            </div>

            <div className="mt-4 flex">
              <p>member since:</p>
              <p className="">
                {new Date(chatInfo && chatInfo.receiverId ?chatInfo.receiverId.timeCreated:state.publisher.timeCreated).toLocaleDateString()}
              </p>
            </div>

            <div className=" flex">
              <p>From:</p>
              <p className="">{`${chatInfo && chatInfo.receiverId ? chatInfo.receiverId.userProfile.localGovt:state.publisher.userProfile.localGovt},${chatInfo && chatInfo.receiverId ?  chatInfo.receiverId.userProfile.state:state.publisher.userProfile.state}`}</p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default ChatScreen;
