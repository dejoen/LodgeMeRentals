import PropTypes from "prop-types";
import useGetClientUpdatedState from "../../../hooks/client/useGetClientUpdatedState";



const Message = ({  message }) => {
  const {clientUpdatedState} = useGetClientUpdatedState();

  //alert(JSON.stringify(clientUpdatedState.data._id))
 
  return (
    <div
      className={`w-full flex ${(clientUpdatedState.data._id !==  message.sender)
        ? "justify-start"
        : "justify-end "} p-1  mt-2 place-items-center gap-2`}
    >

       <img src="/" className="bg-orange-500 w-[40px] h-[40px] rounded-full"/>
   
      <div className={`min-w-[30%]  rounded-md p-1 ${(clientUpdatedState.data._id !==  message.sender)
        ? "bg-white border border-black border-opacity-20"
        : "bg-[#BB7655] text-white"} `}>
          
          <div>
          {message.text}
          </div>
          <div className="w-full text-[12px]  flex justify-end">{
            
            new Date(message.timeSent).toLocaleTimeString("en-US",{timeStyle:'short',timeZone:"UTC"})
            }
          </div>
       
      </div>
    </div>
  );
};

Message.propTypes = {
  isSender: PropTypes.bool,
  message: PropTypes.object
};

export default Message;
