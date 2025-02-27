import { useEffect, useRef, useState } from "react";
import Message from "./Message";
import PropTypes from "prop-types";
import isMessageToday from "../../../../../utils/isMessageToday";
import isMessageYesterday from "../../../../../utils/isMessageYesterday";


const ChatBody = ({ chatInfo }) => {


  let layoutHeight = useRef();

  const  [todayIndex,setTodayIndex] = useState()
  const  [yesterDayIndex,setYesterDayIndex] = useState()

  useEffect(()=>{
    
   

     let timeout = setTimeout(() => {
       if (layoutHeight.current)
         layoutHeight.current.children[
           layoutHeight.current.children.length - 1
         ].scrollIntoView({ behavior: "smooth", blocK: "end" });
     }, 100);


     setTodayIndex(chatInfo.messages.findIndex((d,_)=>{
      return isMessageToday(new Date(d.timeSent)) === true
   }))

   setYesterDayIndex(chatInfo.messages.findIndex((d,_)=>{
    return isMessageYesterday(new Date(d.timeSent)) === true
 }))

 
     return () => {
      if (timeout) clearTimeout(timeout);
    };

    
    
  },[chatInfo])
 

  const [display,setDisplay] = useState({
    today:false
  })

  
  




  return (
    <div
      ref={layoutHeight}
      className={`font-nunito w-full flex flex-col  ${chatInfo && chatInfo.messages && chatInfo.messages.length < 6 &&
        " justify-end"} h-full overflow-y-auto  p-2  `}
    >

      { chatInfo && chatInfo.messages && chatInfo.messages.reverse().map((item, index) =>
        <div key={index}>

{index=== 0 &&
            <div className="w-full flex justify-center">
              <p className="bg-black rounded-md text-white p-1">few days ago</p>
            </div>}
          {index=== yesterDayIndex &&
            <div className="w-full flex justify-center">
              <p className="bg-black rounded-md text-white p-1">Yesterday</p>
            </div>}

          { index === todayIndex && 
            <div className="w-full flex justify-center">
              <p className={`  bg-black rounded-md text-white p-1`}>Today</p>
          

            </div>}
           
          <Message message={item} id={chatInfo.senderId._id} senderProfile={chatInfo.senderId.userProfile.profileImage}  receiverProfile={chatInfo.receiverId.userProfile.profileImage}  />
        </div>
      )}
    </div>
  );
};

ChatBody.propTypes = {
 chatInfo: PropTypes.object
};

export default ChatBody;
