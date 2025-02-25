
 
 const AgentClientChatCard = ({data,onClick}) => {
    return  <div className="w-fit h-fit" onClick={()=>{
            onClick(data)
    }}>
        <img  className='w-[60px] h-[60px] bg-orange-600 rounded-full' src={data && data.senderId ?data.senderId.userProfile.profileImage : '/'} />
    </div>
 }



 export default AgentClientChatCard