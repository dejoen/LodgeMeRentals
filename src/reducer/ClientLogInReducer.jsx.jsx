import BaseURL from "../utils/BaseURL"

/* eslint-disable react-refresh/only-export-components */

let fetchData = async () =>{
    return fetch(`${BaseURL.LOCAL_URL}/verify-token`,{
      method:"GET",
      headers:{
          'Authorization':`Bearer ${JSON.parse(localStorage.getItem('user')).data.token}`,
         "Content-Type":'application/json'
      },
  })

  }
   
  fetchData().then(r=>{
      return r.json()
  }).then(res=>{
      console.log(res)
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
  }).catch(err=>{
      throw new Error(err)
  })


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