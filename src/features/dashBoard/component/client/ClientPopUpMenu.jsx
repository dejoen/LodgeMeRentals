/* eslint-disable react/prop-types */
import AppointmentCard from "./menuCards/AppointmentCard";
import InboxCard from "./menuCards/InboxCard";
import NotificationCard from "./menuCards/NotificationCard";
import ProfileCard from "./menuCards/ProfileCard";


const ClientPopUpMenu = (props) =>{
    return (
   
   <div className="hidden">
      <div className={`${(props.isMenuClosed)? 'hidden':'block'}  h-[400px] absolute right-5 z-50 flex  justify-end gap-5`}>
   

   {
      
      (props.iconHovered.searchCard.isHover) ? <ProfileCard display={'flex'}/> : <ProfileCard display={'hidden'}/>
      
   }
    {
      
      (props.iconHovered.profileCard.isHover) ? <ProfileCard display={'flex'}/> : <ProfileCard display={'hidden'}/>
      
   }
    {
      
      (props.iconHovered.appointmentCard.isHover) ? <AppointmentCard display={'flex'}/> : <AppointmentCard display={'hidden'}/>
      
   }

   {
      
      (props.iconHovered.notificationCard.isHover) ? <NotificationCard display={'flex'}/> : <NotificationCard display={'hidden'}/>
      
   }

{
      
      (props.iconHovered.inboxCard.isHover) ? <InboxCard display={'flex'}/> : <InboxCard display={'hidden'}/>
      
   }

    
   

 </div>
   </div>

    );
}

export default ClientPopUpMenu