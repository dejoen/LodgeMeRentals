import { useEffect, useState } from "react"
 import {getAllHousespublished} from '../../service'

const useGetPublishedHouses = (token) => {

    const [publishedHouses,setPublishedHouses] =useState([])
    const [errorMessage,setErrorMessage] = useState()
    const [isLoading,setIsLoading] = useState(false)

    useEffect(()=>{
           (async()=>{
            if(publishedHouses.length === 0){
             setIsLoading(true)
            getAllHousespublished(token).then(result=>{
                return result.json()
            }).then(result=>{
                if(result.status === 200){
                    setPublishedHouses(result.housesPublished)  
                    setIsLoading(false) 
                }else{
                    setErrorMessage(result.error)
                    setIsLoading(false)
                }
               
            })

        }
        })()
           
    },[])

    return {publishedHouses,isLoading,errorMessage}
}


export default useGetPublishedHouses