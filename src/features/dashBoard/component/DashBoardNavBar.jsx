 import  LodgeMeIcon from '../../../assets/lodgeMeIcon.svg'

 import  dashBoardMenu from '../../../assets/dmenuicon.svg'
 import  dashBoardMessageIcon from '../../../assets/dmessageicon.svg'
 import  dashBoardAppointment from '../../../assets/dappointmenticon.svg'
 import  dashBoardNotification from '../../../assets/dnotificationicon.svg'
 import  dashBoardSettings from '../../../assets/dsettingsicon.svg'
import {  useState } from 'react'
import { useNavigate ,useLocation} from 'react-router-dom'

const DashBoardNavBar = () =>{
  const location =useLocation()
   const [activeContainer,setActiveContainter] = useState(()=>{
    switch(location.pathname.split('/')[2]){
      case 'dashboard': {
        return {
          dashboardNav:{
            isActive:true,
          },
          messageNav :{
            isActive:false,
          },
          appointmentNav :{
            isActive:false,
          },
         notificationNav :{
            isActive:false,
          },
          SettingsNav :{
            isActive:false,
          },
        }  
      }
       case 'message' : {
        return {
          dashboardNav:{
            isActive:false,
          },
          messageNav :{
            isActive:true,
          },
          appointmentNav :{
            isActive:false,
          },
         notificationNav :{
            isActive:false,
          },
          SettingsNav :{
            isActive:false,
          },
        }  
          }
       default: null
    }

 
   })
   const navigate = useNavigate()
 
   
    return (
      
     <div className="hidden md:block bg-agentNavbarBgImage w-[250px] h-dvh">
      
    
     <div className='flex flex-col gap-3 place-items-center'>
        <img className='w-[100px] mt-8' src={LodgeMeIcon}/>
        <p className='w-full h-[1px] bg-white'></p>

     </div>
     <div className='font-nunito text-white flex flex-col gap-2'>
        

        <div className={`flex h-[50px] hover:bg-[#BB7655] ${ (activeContainer.dashboardNav.isActive) ?"bg-[#BB7655] ":""} rounded-md place-items-center  ps-4 gap-2`} onClick={()=>{
          setActiveContainter((prevState)=>{
             return {
              ...prevState,
              "dashboardNav":{
                isActive:true
              },
              'messageNav':{
                isActive:false
              },
              'appointmentNav':{
                isActive:false
              },
              'notificationNav':{
                isActive:false
              },
              'SettingsNav':{
                isActive:false
              },
             }
          })

          navigate("agent/dashboard")

        }}>
          <img src={dashBoardMenu}/>
          <p>Dashboard</p>
        </div>

        <div className={`flex h-[50px] hover:bg-[#BB7655] ${ (activeContainer.messageNav.isActive) ?"bg-[#BB7655] ":""}  rounded-md place-items-center  ps-4 gap-2`} onClick={()=>{
          setActiveContainter((prevState)=>{
             return {
              ...prevState,
              "dashboardNav":{
                isActive:false
              },
              'messageNav':{
                isActive:true
              },
              'appointmentNav':{
                isActive:false
              },
              'notificationNav':{
                isActive:false
              },
              'SettingsNav':{
                isActive:false
              },
             }
          })
          navigate('agent/message')
        }}>
          <img src={dashBoardMessageIcon}/>
          <p>Messages</p>
        </div>

        <div className={`flex h-[50px] hover:bg-[#BB7655] ${ (activeContainer.appointmentNav.isActive) ?"bg-[#BB7655] ":""}  rounded-md place-items-center  ps-4 gap-2`}  onClick={()=>{
          setActiveContainter((prevState)=>{
             return {
              ...prevState,
              "dashboardNav":{
                isActive:false
              },
              'messageNav':{
                isActive:false
              },
              'appointmentNav':{
                isActive:true
              },
              'notificationNav':{
                isActive:false
              },
              'SettingsNav':{
                isActive:false
              },
             }
          })
         
        }}>
          <img src={dashBoardAppointment}/>
          <p>Appointments</p>
        </div>

        <div className={`flex h-[50px]  hover:bg-[#BB7655] ${ (activeContainer.notificationNav.isActive) ?"bg-[#BB7655] ":""}rounded-md place-items-center  ps-4 gap-2`}  onClick={()=>{
          setActiveContainter((prevState)=>{
             return {
              ...prevState,
              "dashboardNav":{
                isActive:false
              },
              'messageNav':{
                isActive:false
              },
              'appointmentNav':{
                isActive:false
              },
              'notificationNav':{
                isActive:true
              },
              'SettingsNav':{
                isActive:false
              },
             }
          })
        }}>
          <img src={dashBoardNotification}/>
          <p>Notifications</p>
        </div>

        <div className={`flex h-[50px] hover:bg-[#BB7655] ${ (activeContainer.SettingsNav.isActive) ?"bg-[#BB7655] ":""} rounded-md place-items-center  ps-4 gap-2`} onClick={()=>{
          setActiveContainter((prevState)=>{
             return {
              ...prevState,
              "dashboardNav":{
                isActive:false
              },
              'messageNav':{
                isActive:false
              },
              'appointmentNav':{
                isActive:false
              },
              'notificationNav':{
                isActive:false
              },
              'SettingsNav':{
                isActive:true
              },
             }
          })
        }}>
          <img src={dashBoardSettings}/>
          <p>Settings</p>
        </div>
     </div>
     </div>

    )
}


export default DashBoardNavBar