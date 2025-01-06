import PropTypes from "prop-types";

const Message = ({  messageData }) => {
  return (
    <div
      className={`w-full flex ${messageData.sender !== "Devjoe"
        ? "justify-start"
        : "justify-end "} p-1  mt-2 place-items-center gap-2`}
    >
       <img src="/" className="bg-orange-500 w-[40px] h-[40px] rounded-full"/>
   
      <div className={`min-w-[30%]  rounded-md p-1 ${messageData.sender !== "Devjoe"
        ? "bg-white border border-black border-opacity-20"
        : "bg-[#BB7655] text-white"} `}>
          
          <div>
          {messageData.message}
          </div>
          <div className="w-full text-sm  flex justify-end">6:13am
          </div>
       
      </div>
    </div>
  );
};

Message.propTypes = {
  isSender: PropTypes.bool,
  messageData: PropTypes.object
};

export default Message;
