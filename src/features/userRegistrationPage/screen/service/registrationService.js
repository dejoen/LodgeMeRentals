import BaseURL from "../../../../utils/BaseURL"


let  registerUser =  async (data) =>{

  return  fetch(`${BaseURL.STAGING_URL}/register`,{
         method:"POST",
         headers:{
            "Content-Type":'application/json'
         },
         body: JSON.stringify(data)
     })
}


export default registerUser