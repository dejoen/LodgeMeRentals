 import  LodgeMeIcon from '../../../assets/lodgeMeIcon.svg'

 import  dashBoardMenu from '../../../assets/dmenuicon.svg'
 import  dashBoardMessageIcon from '../../../assets/dmessageicon.svg'
 import  dashBoardAppointment from '../../../assets/dappointmenticon.svg'
 import  dashBoardNotification from '../../../assets/dnotificationicon.svg'
 import  dashBoardSettings from '../../../assets/dsettingsicon.svg'

const DashBoardNavBar = () =>{

    return (
     <div className="hidden md:block bg-agentNavbarBgImage w-[250px] h-dvh">
     <div className='flex flex-col gap-3 place-items-center'>
        <img className='w-[100px] mt-8' src={LodgeMeIcon}/>
        <p className='w-full h-[1px] bg-white'></p>

     </div>
     <div className='font-nunito text-white flex flex-col gap-2'>
        

        <div className='flex h-[50px] hover:bg-[#BB7655] rounded-md place-items-center  ps-4 gap-2'>
          <img src={dashBoardMenu}/>
          <p>Dashboard</p>
        </div>

        <div className='flex h-[50px] hover:bg-[#BB7655]  rounded-md place-items-center  ps-4 gap-2'>
          <img src={dashBoardMessageIcon}/>
          <p>Messages</p>
        </div>

        <div className='flex h-[50px] hover:bg-[#BB7655]  rounded-md place-items-center  ps-4 gap-2'>
          <img src={dashBoardAppointment}/>
          <p>Appointments</p>
        </div>

        <div className='flex h-[50px]  hover:bg-[#BB7655] rounded-md place-items-center  ps-4 gap-2'>
          <img src={dashBoardNotification}/>
          <p>Notifications</p>
        </div>

        <div className='flex h-[50px] hover:bg-[#BB7655] rounded-md place-items-center  ps-4 gap-2'>
          <img src={dashBoardSettings}/>
          <p>Settings</p>
        </div>
     </div>
     </div>

    )
}


export default DashBoardNavBar