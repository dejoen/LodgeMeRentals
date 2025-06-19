import { useEffect, useRef, useState } from "react";
import Message from "./Message";
import PropTypes from "prop-types";
import isMessageToday from "../../../../../utils/isMessageToday";
import isMessageYesterday from "../../../../../utils/isMessageYesterday";

const ChatBody = ({ chatInfo }) => {
  let layoutHeight = useRef();

  const [todayIndex, setTodayIndex] = useState();
  const [yesterDayIndex, setYesterDayIndex] = useState();

  useEffect(() => {
    let timeout = setTimeout(() => {
      if (layoutHeight.current)
        layoutHeight.current.children[layoutHeight.current.children.length - 1].scrollIntoView({
          behavior: "smooth",
          blocK: "end",
        });
    }, 100);

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [chatInfo]);

  const [display, setDisplay] = useState({
    today: false,
  });

  return (
    <div
      ref={layoutHeight}
      className={`font-nunito w-full flex flex-col  ${
        chatInfo && chatInfo.messages && chatInfo.messages.length < 6 && " justify-end"
      } h-full overflow-y-auto  p-2  `}
    >
      {chatInfo &&
        chatInfo.messages.length > 0 &&
        chatInfo.messages.reverse().map((item, index) => (
          <div key={index}>
            <Message message={item} />
          </div>
        ))}
    </div>
  );
};

ChatBody.propTypes = {
  chatInfo: PropTypes.object,
};

export default ChatBody;
