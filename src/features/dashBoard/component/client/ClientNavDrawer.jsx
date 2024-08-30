/* eslint-disable react-refresh/only-export-components */

import { useState } from 'react';
import  notificationIcon  from '../../../../assets/clientnotificationicon.svg'
import AppointmentCard from './menuCards/AppointmentCard';
import InboxCard from './menuCards/InboxCard';
import NotificationCard from './menuCards/NotificationCard';
import ProfileCard from './menuCards/ProfileCard';

const ClientNavDrawer = () => {

    const [activeCard,setActiveCard] = useState({
         accountCard:{
            isActive:false
         },
         inboxCard:{
            isActive:false
         },
         appointmentCard:{
            isActive:false
         },
         notificationCard:{
            isActive:false
         },
    })
 
    return (
    <div className="ClientNavBar md:hidden w-[300px] rounded-l-2xl absolute bg-white  shadow-md shadow-black top-0 bottom-0 right-0 z-[1000] overflow-y-auto overflow-x-hidden ">
      <p className="m-3 font-bold text-2xl" onClick={()=>{
         closeClientDrawer()
      }} >{"x"}</p>

      <div className='w-full flex flex-col place-items-center justify-center'>

        <div className='border p-2 rounded-xl'>

        <img  src={notificationIcon}/>
        </div>
        <p>Devjoe</p>
        <p className='text-sm'>benagu@gmail.com</p>
      </div>


       <div className="m-5">

       <div className=' border-b border-black p-1' >  

            <p>Account <span className='animate-pulse' onClick={()=>{
                setActiveCard((prev)=>{
                     return {
                        ...prev,
                        accountCard:{
                            isActive:!activeCard.accountCard.isActive
                        },
                        inboxCard:{
                            isActive:false
                        },
                        appointmentCard:{
                            isActive:false
                        },
                        notificationCard:{
                            isActive:false
                        },
                        
                     }
                })
            }} >{(activeCard.accountCard.isActive)?  'v':'>'}</span></p>


            <div className='w-full '>
           {(activeCard.accountCard.isActive)?   <ProfileCard display={'flex'}/> : <ProfileCard display={'hidden'}/>} 
               
            </div>
        </div>

        <div className=' border-b border-black p-1'>

            <p >Inbox<span className='animate-pulse' onClick={()=>{

           setActiveCard((prev)=>{
    return {
       ...prev,
       accountCard:{
           isActive:false
       },
       inboxCard:{
           isActive:! activeCard.inboxCard.isActive
       },
       appointmentCard:{
           isActive:false
       },
       notificationCard:{
           isActive:false
       },
       
    }
})
            }}>{(activeCard.inboxCard.isActive)?  ' v':' >'}</span></p>
            <div>
            {(activeCard.inboxCard.isActive)?   <InboxCard display={'flex'}/> : <InboxCard display={'hidden'}/>} 
           
            
            </div>
        </div>

        <div className=' border-b border-black p-1'>

            <p>Appointment <span className='animate-pulse ' onClick={()=>{
       
       setActiveCard((prev)=>{
        return {
           ...prev,
           accountCard:{
               isActive:false
           },
           inboxCard:{
               isActive:false
           },
           appointmentCard:{
               isActive:! activeCard.appointmentCard.isActive
           },
           notificationCard:{
               isActive:false
           },
           
        }
    })
                
            }}>{(activeCard.appointmentCard.isActive)?  ' v':' >'}</span></p>
            <div>
            {(activeCard.appointmentCard.isActive)?   <AppointmentCard display={'flex'}/> : <AppointmentCard display={'hidden'}/>} 
           
            </div>
        </div>

        <div>

            <p>Notification<span >{'(0)'}</span> <span className='animate-pulse' onClick={()=>{
               
               setActiveCard((prev)=>{
                return {
                   ...prev,
                   accountCard:{
                       isActive:false
                   },
                   inboxCard:{
                       isActive:false
                   },
                   appointmentCard:{
                       isActive:false
                   },
                   notificationCard:{
                       isActive:! activeCard.notificationCard.isActive
                   },
                   
                }
            })

            }}>{(activeCard.notificationCard.isActive)?  ' v':' >'}</span></p>
            <div>
            {(activeCard.notificationCard.isActive)?   <NotificationCard display={'flex'}/> : <NotificationCard display={'hidden'}/>} 
           
             
            
            </div>
        </div>

       </div>
    </div>

    );
}

export const openClientDrawer = () =>{

   
    
    const drawer =   document.querySelector('.ClientNavBar ')
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

export const closeClientDrawer = () =>{
  
  const drawer =document.querySelector('.ClientNavBar ')
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

export default ClientNavDrawer