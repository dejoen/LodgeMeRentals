import { io } from "socket.io-client"
import BaseURL from "../utils/BaseURL"

/* eslint-disable react-refresh/only-export-components */

let fetchData = async () =>{
    return fetch(`${BaseURL.URL}/verify-token`,{
      method:"GET",
      headers:{
          'Authorization':`Bearer ${JSON.parse(localStorage.getItem('user')).data.token}`,
         "Content-Type":'application/json'
      },
  })

  }
   
  if(JSON.parse(localStorage.getItem('user')) && JSON.parse(localStorage.getItem('user')).data.accountType==="client" ){
    fetchData().then(r=>{
        return r.json()
    }).then(res=>{
        console.log(res)
       /* if(res.user){
            localStorage.setItem('user',JSON.stringify(
                {
                 showPopUp:false,
                 data:{
                     ...res.user,
                     token:JSON.parse(localStorage.getItem('user')).data.token
                 },
                 isLoggedIn:true
             
                } 
             ))
             return
           }
           localStorage.removeItem('user')*/
           //kkk

           if(res.status === 200){
               
            const   socket =  io(`${BaseURL.LOCAL_URL_SOCKET}`,{
                auth:{
                    token:JSON.parse(localStorage.getItem('user')).data.token
                }
               })

               socket.on('socketConnected',connectedUser=>{
                
                localStorage.setItem('user',JSON.stringify(
                    {
                     showPopUp:false,
                     data:{
                         ...connectedUser,
                         token:JSON.parse(localStorage.getItem('user')).data.token
                     },
                     isLoggedIn:true
                 
                    } 
                 ))
               })

               socket.on('disconnected',()=>{
                console.log('disconnected......')

                let updatePresence = JSON.parse(localStorage.getItem('user'))
                 updatePresence = {...updatePresence,
                    data:{
                        ...updatePresence.data,
                        isOnline:false
                    }
                 }
                localStorage.setItem('user',JSON.stringify(
                   updatePresence
                 ))
               })
           
              
            
             return
           }else{
            localStorage.removeItem('user')
           }
           
    }).catch(err=>{
        localStorage.removeItem('user')
        throw new Error(err)
    })
  
  }


export const clientLoginInitialState = {
    showPopUp:false,
    data:(localStorage.getItem('user'))?JSON.parse(localStorage.getItem('user')).data:{},
    isLoggedIn:(localStorage.getItem('user') && JSON.parse(localStorage.getItem('user')).isLoggedIn && JSON.parse(localStorage.getItem('user')).data.accountType==="client")?true:false,
}


const  ClientLoginReducer = (state,action)=> {
  switch(action.TYPE){
        case 'Authentication' :{
            state =action.payload
            if(action.payload.data){
                localStorage.setItem('user',JSON.stringify(state))
               
          }
           return state
        }
        default: return state
    }
   
    
    
   
}

export default ClientLoginReducer