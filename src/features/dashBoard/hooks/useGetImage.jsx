import { useEffect, useState } from "react"

 export default function useGetImage (inputs){
  const profileInput = inputs[0]
  const  coverImageInput =inputs[1]
  const [data,setData] = useState({
        profileImageString:"",
        coverImageString:"",
  })
 
   useEffect(()=>{
    const  decodeFileAsBase64 = async (file,type)  =>{
      const fileReader = new FileReader()
  
      fileReader.onload = (e) =>{
       switch(type){
         case 'profileImage':{
           setData({
            ...data,
            profileImageString:e.target.result
           })
           return
         }
         
       case 'coverImage':{
        setData({
         ...data,
         coverImageString:e.target.result
        })
      }
    }
      }
  
      fileReader.readAsDataURL(file)
  }
  
    if(profileInput){
        profileInput.addEventListener('change',async ()=>{
            const file = profileInput.files[0]
           await decodeFileAsBase64(file,'profileImage')
        })
      }

        if(coverImageInput){
          coverImageInput.addEventListener('change',async()=>{
              const file = coverImageInput.files[0]
              await decodeFileAsBase64(file,'coverImage')
          })
      }

   
   },[profileInput,coverImageInput,data])

    return {data}
 }