import BaseURL from "../../utils/BaseURL"

 export  const uploadData = async (file,token)=>{
   
    return  fetch(`${BaseURL.STAGING_URL}/verify-agent-documment`,{
        method:"POST",
        headers:{
            'Authorization':`Bearer ${token}`,
           "Content-Type":'application/json'
        },
        body: JSON.stringify({verificationDocument:file})
    })
 }


