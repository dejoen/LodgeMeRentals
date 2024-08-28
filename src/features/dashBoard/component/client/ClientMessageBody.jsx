import  notificationIcon  from '../../../../assets/clientnotificationicon.svg'

const  ClientMessageBody = () =>{

    return(
    <div className="  w-full ms-3 flex gap-2 mt-5">
       <img src={notificationIcon} />
       <div className=''>
        <p>Username</p>
        <p>Message Content</p>
       </div>
       <div className='w-[50%] text-end pe-2'>
       <p className=' text-sm'>just now</p>
       </div>
    </div>

    );
}

export default ClientMessageBody