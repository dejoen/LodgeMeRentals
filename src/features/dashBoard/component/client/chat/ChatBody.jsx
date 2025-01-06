import React, { useEffect, useRef } from "react";
import Message from "./Message";
import { useState } from "react";
import PropTypes from "prop-types";

const ChatBody = ({ chatLayoutRef }) => {
  const user = "Devjoe";

  const layoutHeigt = useRef();
  const [messages, setMessages] = useState(() => {
    return [
      {
        sender: "Devjoe",
        receiver: "Chief",
        message: "How much is the house."
      },
      {
        sender: "Chief",
        receiver: "Devjoe",
        message: "200 thousand naira."
      },
      {
        sender: "Devjoe",
        receiver: "Chief",
        message: "How much is the house."
      },
      {
        sender: "Chief",
        receiver: "Devjoe",
        message: "200 thousand naira."
      },
      {
        sender: "Devjoe",
        receiver: "Chief",
        message: "How much is the house."
      },
      {
        sender: "Chief",
        receiver: "Devjoe",
        message: "200 thousand naira."
      },
      {
        sender: "Chief",
        receiver: "Devjoe",
        message: "200 thousand naira."
      },
      {
        sender: "Chief",
        receiver: "Devjoe",
        message: "200 thousand naira."
      },
      {
        sender: "Devjoe",
        receiver: "Chief",
        message: "How much is the house."
      },
      {
        sender: "Chief",
        receiver: "Devjoe",
        message: "200 thousand naira."
      },
      {
        sender: "Devjoe",
        receiver: "Chief",
        message: "How much is the house."
      },
      {
        sender: "Chief",
        receiver: "Devjoe",
        message: "200 thousand naira."
      },
      {
        sender: "Devjoe",
        receiver: "Chief",
        message: "How much is the house."
      },
      {
        sender: "Chief",
        receiver: "Devjoe",
        message: "200 thousand naira."
      },
      {
        sender: "Chief",
        receiver: "Devjoe",
        message: "200 thousand naira."
      }
    ];
  });

  useEffect(() => {
    setTimeout(() => {
      setMessages([
        ...messages,
        {
          sender: "Devjoe",
          receiver: "Devjoeff",
          message: "yes i do boss"
        }
      ]);
      chatLayoutRef.current.scrollTop =
        chatLayoutRef.current.offsetHeight * 400;
    }, 2000);
  }, []);

  return (
    <div className="font-nunito w-full flex flex-col   justify-end p-2  ">
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
          <Message messageData={item} />
        </div>
      )}
    </div>
  );
};

ChatBody.propTypes = {
  chatLayoutRef: PropTypes.any
};

export default ChatBody;
