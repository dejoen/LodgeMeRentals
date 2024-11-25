/* eslint-disable react-refresh/only-export-components */
import  LodgeMeIcon from '../../../assets/lodgeMeIcon.svg'

import  dashBoardMenu from '../../../assets/dmenuicon.svg'
import  dashBoardMessageIcon from '../../../assets/dmessageicon.svg'
import  dashBoardAppointment from '../../../assets/dappointmenticon.svg'
import  dashBoardNotification from '../../../assets/dnotificationicon.svg'
import  dashBoardSettings from '../../../assets/dsettingsicon.svg'
import  profileIcon from '../../../assets/agentprofile/profileIconWhite.svg'
import {  useState } from 'react'
import { useNavigate ,useLocation} from 'react-router-dom'

const AgentNavBarDrawer = () =>{
  
        const location =useLocation()
   const [activeContainer,setActiveContainter] = useState(()=>{
    switch(location.pathname.split('/')[2]){
      case 'dashboard': {
        return {
          dashboardNav:{
            isActive:true,
          },
          profileNav :{
            isActive:false,
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
      case  'profile':{
        return {
          dashboardNav:{
            isActive:false,
          },
          profileNav :{
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
          profileNav :{
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
      
     <div className="AgentDrawer absolute hidden top-0 right-0 z-[80] md:hidden bg-agentNavbarBgImage w-[250px] h-dvh ">
      
      <p className='text-white font-bold text-3xl m-3 hover:text-orange-600' onClick={()=>{
        closeAgentDrawer()
      }}>{"x"}</p>
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
              profileNav :{
                isActive:false,
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

          navigate("/agent/dashboard")

        }}>
          <img src={dashBoardMenu}/>
          <p>Dashboard</p>
        </div>

        <div className={`flex h-[50px] hover:bg-[#BB7655] ${ (activeContainer.profileNav.isActive) ?"bg-[#BB7655] ":""} rounded-md place-items-center  ps-4 gap-2`} onClick={()=>{
          setActiveContainter((prevState)=>{
             return {
              ...prevState,
              "dashboardNav":{
                isActive:false
              },
              profileNav :{
                isActive:true,
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

          navigate("/agent/userprofile/overview")

        }}>
          <img src={profileIcon}/>
          <p>Profile</p>
        </div>


        <div className={`flex h-[50px] hover:bg-[#BB7655] ${ (activeContainer.messageNav.isActive) ?"bg-[#BB7655] ":""}  rounded-md place-items-center  ps-4 gap-2`} onClick={()=>{
          setActiveContainter((prevState)=>{
             return {
              ...prevState,
              "dashboardNav":{
                isActive:false
              },
              profileNav :{
                isActive:false,
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
          navigate('/agent/message')
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
              profileNav :{
                isActive:false,
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
              profileNav :{
                isActive:false,
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
              profileNav :{
                isActive:false,
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
    );

}




export const openAgentDrawer = () =>{

   
    
    const drawer =   document.querySelector('.AgentDrawer')
    drawer.style.display= "block"
    drawer.animate([
        {
            transform:"translateX(100%)"
        },
        {
            transform:"translateX(0%)"
        }
    ],{
        duration:500
    })
 
     return drawer
    
}

export const closeAgentDrawer = () =>{
  
  const drawer =document.querySelector('.AgentDrawer')
  drawer.animate([
    {
        transform:"translateX(0%)"
    },
    {
        transform:"translateX(100%)"
    }
],{
    duration:500
}).onfinish=()=>{
    drawer.style.display= "none" 
}


  
 

    
   return drawer 
}

export default AgentNavBarDrawer