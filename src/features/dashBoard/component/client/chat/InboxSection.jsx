import PropTypes from "prop-types";
import { useRef } from "react";

const InboxSection = ({ userName, message, messages, numberOfMessages, userProfile, index, onClick }) => {
  const inboxRef = useRef();

  return (
    <div
      ref={inboxRef}
      className=" hover:bg-orange-500 bg-[#EADCB7] h-[60px] flex place-items-center gap-3"
      onClick={() => {
        onClick(messages, index);
      }}
    >
      <img className="ms-2 bg-orange-400 w-[26px] h-[28px] rounded-full" src={userProfile ?? "/"} />

      <div className="w-[70%] ">
        <p>{userName}</p>
        <p className="max-w-[200px] overflow-hidden text-nowrap text-ellipsis">{message}</p>
      </div>
      <p
        className={`${numberOfMessages ? "block" : "hidden"} bg-[#BB7655] rounded-full w-[25px] h-[25px] text-center text-white`}
      >
        {numberOfMessages}
      </p>
    </div>
  );
};

InboxSection.propTypes = {
  userName: PropTypes.string,
  userProfile: PropTypes.string,
  numberOfMessages: PropTypes.number,
  message: PropTypes.string,
  messages: PropTypes.string,
  onClick: (messages) => any,
};
export default InboxSection;
