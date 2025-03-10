import { useEffect, useState } from "react"
import useManageAgentState from "./useManageAgentState"

const  useGetAgentNotificationState = () => {
    const {notificationState,notificationDispatcher} = useManageAgentState()

    const  [updatedNotification,setUpdatedNotification] = useState([])

    useEffect(()=>{
     
       setUpdatedNotification(notificationState.notifications)
    },[notificationState])


    const updateNotification = (notifications,count) => {
     
        notificationDispatcher({

            TYPE:'Save',payload:{notifications,
                newNotificationCount:count
                
            }
        })
    }

     return {updatedNotification,updateNotification}
}

export default useGetAgentNotificationState