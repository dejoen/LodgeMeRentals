
 
 const AgentClientChatCard = ({data}) => {
    return  <div className="w-fit h-fit">
        <img  className='w-[60px] h-[60px] bg-orange-600 rounded-full' src={data.senderId.userProfile.profileImage ?? '/'} />
    </div>
 }



 export default AgentClientChatCard