import { useEffect } from "react"

 export default function useGetProfileImage (input){
   useEffect(()=>{
      if(input){
        input.addEventListener('change',()=>{
            const file = input.files[0]
            alert(file.name)
        })
      }
   },[input])
    return {}
 }