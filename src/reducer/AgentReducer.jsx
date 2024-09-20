/* eslint-disable react-refresh/only-export-components */

import BaseURL from "../utils/BaseURL"


    let fetchData = async () =>{
      return fetch(`${BaseURL.URL}/verify-token`,{
        method:"GET",
        headers:{
            'Authorization':`Bearer ${JSON.parse(localStorage.getItem('user')).data.token}`,
           "Content-Type":'application/json'
        },
    })
  
    }
    

     if(JSON.parse(localStorage.getItem('user')) && JSON.parse(localStorage.getItem('user')).data.accountType==="agent" ){
        fetchData().then(r=>{
            return r.json()
        }).then(res=>{
            console.log(res)
           if(res.user){
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
           localStorage.removeItem('user')
        }).catch(err=>{
            localStorage.removeItem('user')
            throw new Error(err)
        })
     }

    


export const agentInitialState =  {
    showPopUp:false,
    data:(localStorage.getItem('user'))?JSON.parse(localStorage.getItem('user')).data:{},
    isLoggedIn:(localStorage.getItem('user') && JSON.parse(localStorage.getItem('user') ).isLoggedIn && JSON.parse(localStorage.getItem('user')).data.accountType==="agent" )?true:false,
}

const  AgentReducer = (state,action)=> {
  switch(action.TYPE){
        case 'Authentication' :{
            state = action.payload
            if(action.payload.data){
                  localStorage.setItem('user',JSON.stringify(state))
                 
            }
           return state
        }

        case 'VerifyAgent' :{
            state = action.payload
            if(action.payload.data){
                  localStorage.setItem('user',JSON.stringify(state))
                 
            }
           return state
        }

       

        default: return state
    }
   
    
    
   
}

export default AgentReducer