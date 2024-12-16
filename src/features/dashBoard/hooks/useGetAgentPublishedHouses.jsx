import { useEffect, useState } from "react"
import { getAllHousesPublishedAgent } from "../service"



const  useGetAgentPublishedHouses = (user) => {

    

      const [publisedHouses,setPublishedHouses] = useState([])
      const [isLoading,setIsLoading] = useState(true)
      const [errorMessage,setErrorMessage] = useState()
 
      useEffect(()=>{
      
      if(publisedHouses.length === 0){
       
          getAllHousesPublishedAgent(user.token,user._id).then(res=> {
              return res.json()
             }).then(result=>{
                setIsLoading(false)
                 if(result.status === 200)
                  setPublishedHouses(result.housesPublished)
            else
             setErrorMessage(result.error)
          
              
               
             }).catch((e)=>{
                setIsLoading(false)
                setErrorMessage(e) 
             })

        }else{
            setIsLoading(false)
        }

        return ()=>{
            setIsLoading(true)
        }
      },[])


      



      return {publisedHouses,isLoading,errorMessage}

}

export default useGetAgentPublishedHouses