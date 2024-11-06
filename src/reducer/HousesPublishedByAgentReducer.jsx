
export const HousesPublishedByAgentInitialState = { }


 const HousesPublishedByAgentReducer  = (state,action) =>{
    switch (action.TYPE){
        case "Save_Data":{
         
            return state = action.payload
 
        }
       
        default: return state
     }
 }

 export default HousesPublishedByAgentReducer