import {  useEffect, useState } from "react";
import ClientNavBar from "../../component/client/ClientNavBar";
import ClientPopUpMenu from "../../component/client/ClientPopUpMenu";
import { CardType } from "../../../../utils/CardType";
import ClientAdvertBanner from "../../component/client/banner/ClientAdvertBanner";
import ClientDashBoardBody from "../../component/client/ClientDashboardBody";
import ClientNavDrawer from "../../component/client/ClientNavDrawer";


const ClientDashBoardScreen = () =>{
  const [iconHovered,setIconHover] = useState({
       profileCard:{
        isHover:false,
        type:CardType.PROFILE
       },
       appointmentCard:{
        isHover:false,
        type:CardType.APPOINTMENT
       },
       inboxCard:{
        isHover:false,
        type:CardType.INBOX
       },
       notificationCard:{
        isHover:false,
        type:CardType.NOTIFICATION
       },
       searchCard:{
        isHover:false,
        type:CardType.SEARCH
       }

  })
  const [closeMenu,setCloseMenu] = useState(false)
   
  useEffect(()=>{
     window.addEventListener('resize',()=>{
        setCloseMenu(true)
     })

     return ()=>{
        window.removeEventListener('resize',()=>{})
     }
  })
   
    return(
   <div className="overflow-x-hidden">
    
    <ClientNavBar setIconOver={(cardType)=>{
         setCloseMenu(false)
        switch(cardType){
            case CardType.SEARCH :{
               
             setIconHover( (prev)=>{
                return {
                    ...prev,
                    searchCard:{
                        isHover:!iconHovered.searchCard.isHover
                    },
                    appointmentCard:{
                        isHover:false
                    },
                    notificationCard:{
                        isHover:false
                    },
                    profileCard:{
                        isHover:false
                    },
                    inboxCard:{
                        isHover:false
                    }
                    
                }
             })

                return
            }

            case  CardType.APPOINTMENT :{
                setIconHover( (prev)=>{
                    return {
                        ...prev,
                        searchCard:{
                            isHover:false
                        },
                        appointmentCard:{
                            isHover:!iconHovered.appointmentCard.isHover
                        },
                        notificationCard:{
                            isHover:false
                        },
                        profileCard:{
                            isHover:false
                        },
                        inboxCard:{
                            isHover:false
                        }
                        
                    }
                 })
                return
            }

            case  CardType.NOTIFICATION :{
                setIconHover( (prev)=>{
                    return {
                        ...prev,
                        searchCard:{
                            isHover:false
                        },
                        appointmentCard:{
                            isHover:false
                        },
                        notificationCard:{
                            isHover:!iconHovered.notificationCard.isHover
                        },
                        profileCard:{
                            isHover:false
                        },
                        inboxCard:{
                            isHover:false
                        }
                        
                    }
                 })
                return
            }

            case  CardType.INBOX :{
                setIconHover( (prev)=>{
                    return {
                        ...prev,
                        searchCard:{
                            isHover:false
                        },
                        appointmentCard:{
                            isHover:false
                        },
                        notificationCard:{
                            isHover:false
                          },
                        profileCard:{
                            isHover:false
                        },
                        inboxCard:{
                            isHover:!iconHovered.inboxCard.isHover
                      
                        }
                        
                    }
                 })
                return
            }
        }
             }}/>

    <ClientPopUpMenu isMenuClosed={closeMenu} iconHovered={iconHovered}/>
    <ClientAdvertBanner/>
   <ClientDashBoardBody/>
   <ClientNavDrawer/>
   </div>

    );
}
  
export default ClientDashBoardScreen