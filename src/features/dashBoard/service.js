import BaseURL from "../../utils/BaseURL"

 export  const uploadData = async (file,token)=>{
   
    return  fetch(`${BaseURL.URL}/verify-agent-documment`,{
        method:"POST",
        headers:{
            'Authorization':`Bearer ${token}`,
           "Content-Type":'application/json'
        },
        body: JSON.stringify({verificationDocument:file})
    })
 }


 export  const  publishHouse = async (data,token)=>{
   
    return  fetch(`${BaseURL.URL}/publish-house`,{
        method:"POST",
        headers:{
            'Authorization':`Bearer ${token}`,
           "Content-Type":'application/json'
        },
        body: JSON.stringify({
            houseOverview:data.HouseOverview,
            aboutHouse:data.AboutHouse,
            houseFeatures:data.HouseFeatures, 
            mediaUpload:data.MediaUpload, 
            rentalPrice:data.RentalPrice
        })
    })
 }


