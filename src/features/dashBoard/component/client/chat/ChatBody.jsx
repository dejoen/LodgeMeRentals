import { useEffect, useRef } from "react";
import Message from "./Message";
import { useState } from "react";
import PropTypes from "prop-types";
import useGetClientUpdatedState from "../../../hooks/client/useGetClientUpdatedState";
import useGetClientSocket from "../../../hooks/client/useGetClientSocket";

const ChatBody = ({ chatInfo }) => {


  let layoutHeight = useRef();


  useEffect(()=>{
    
   

     let timeout = setTimeout(() => {
       if (layoutHeight.current)
         layoutHeight.current.children[
           layoutHeight.current.children.length - 1
         ].scrollIntoView({ behavior: "smooth", blocK: "end" });
     }, 100);


     return () => {
      if (timeout) clearTimeout(timeout);
    };
    
  },[chatInfo])
 

  




  return (
    <div
      ref={layoutHeight}
      className={`font-nunito w-full flex flex-col  ${chatInfo && chatInfo.messages && chatInfo.messages.length < 6 &&
        " justify-end"} h-full overflow-y-auto  p-2  `}
    >

      { chatInfo && chatInfo.messages && chatInfo.messages.reverse().map((item, index) =>
        <div key={index}>
          {index === 0 &&
            <div className="w-full flex justify-center">
              <p className="bg-black rounded-md text-white p-1">Friday</p>
            </div>}

          {index === 4 &&
            <div className="w-full flex justify-center">
              <p className="bg-black rounded-md text-white p-1">Today</p>
            </div>}
          <Message message={item} id={chatInfo.senderId._id}/>
        </div>
      )}
    </div>
  );
};

ChatBody.propTypes = {
 chatInfo: PropTypes.object
};

export default ChatBody;
