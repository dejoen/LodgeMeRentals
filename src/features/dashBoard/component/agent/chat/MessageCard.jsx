import PropTypes from "prop-types";

const  MessageCard = ({senderId,message,userId}) => {

  return <div>
 {
      (message.senderId === userId) ?
      <div className='bg-senderBg text-white flex flex-col justify-end right-0 mt-4 px-4 py-1 min-w-[30%] max-w-fit rounded-lg ml-auto'>
      <p className='font-semibold'>{message.text}</p>
      <p className='text-sm text-right'>7:02 Pm</p>
    </div>
     

       :
       <div className='bg-white flex flex-col mt-4 px-4 py-1 min-w-[30%] max-w-fit  rounded-lg'>
       <p className='font-semibold text-right'>{message.text}</p>
       <p className='text-sm'>7:00 Pm</p>
       </div> 
     }

  </div>


  
  
}



MessageCard.propTypes = {
  senderId: PropTypes.string,
 message: PropTypes.object,
  userId:PropTypes.string
};

export default MessageCard