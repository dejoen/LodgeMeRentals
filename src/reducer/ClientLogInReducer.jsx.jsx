/* eslint-disable react-refresh/only-export-components */



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