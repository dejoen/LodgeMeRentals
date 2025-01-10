import { useEffect, useState } from "react"
import { getMessagesBetweenUsers } from "../../service"

const useGetMessagesBetweenUsers = (token,receiverId) =>{
   
     const  [messagesFromServer,setMessages] = useState()

     useEffect(()=>{
            getMessagesBetweenUsers(token,receiverId).then(async res=>{
              
                return res.json()
            }).then(result=>{

              if(result.status === 200){

                    setMessages(result.messages)
                }
     }).catch(err=>{
        alert(err)
     })
     },[receiverId,token])


    return {messagesFromServer}
}


export default useGetMessagesBetweenUsers