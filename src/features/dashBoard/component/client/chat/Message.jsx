import PropTypes from "prop-types";
import useGetClientUpdatedState from "../../../hooks/client/useGetClientUpdatedState";

const Message = ({ message }) => {
  const { clientUpdatedState } = useGetClientUpdatedState();

  return (
    <div
      className={`w-full flex ${
        clientUpdatedState.data._id !== message.sender._id ? "justify-start" : "justify-end "
      } p-1  mt-2 place-items-center gap-2`}
    >
      {clientUpdatedState.data._id === message.sender._id && clientUpdatedState.data._id !== message.receiver._id ? (
        <img src={message.sender.userProfile.profileImage} className="bg-orange-500 w-[20px] h-[20px] rounded-full" />
      ) : (
        <img src={message.sender.userProfile.profileImage} className="bg-orange-500 w-[20px] h-[20px] rounded-full" />
      )}

      <div
        className={`min-w-[10%]  rounded-md p-1 ${
          clientUpdatedState.data._id !== message.sender._id
            ? "bg-white border border-black border-opacity-20"
            : "bg-[#BB7655] text-white"
        } `}
      >
        <div className={`  ${clientUpdatedState.data._id !== message.sender._id ? "text-start" : "text-end "}`}>
          {message.text}
        </div>
        <div className="w-full text-[12px]  flex justify-end">
          {new Date(message.timeSent).toLocaleTimeString("en-US", {
            timeZone: "Africa/Lagos",
            hour: "2-digit",
            minute: "2-digit",
          })}
        </div>
      </div>
    </div>
  );
};

Message.propTypes = {
  isSender: PropTypes.bool,
  message: PropTypes.object,
  id: PropTypes.string,
  senderProfile: PropTypes.string,
  receiverProfile: PropTypes.string,
};

export default Message;
