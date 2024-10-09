/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react"
import { getAllHousespublished } from "../../features/dashBoard/service"
import  {CombineContext} from '../../context/CombineContextProvider'

export   const PaginationContext  = createContext()

const PaginationContextProvider = ({children}) => {
   
    const {clientReducerState}  = useContext(CombineContext)
   
    
    const [homeItems,setHomeItems] = useState([])
     const [items,setItems] = useState([])

     const [loading,setLoading] = useState(false)

     useEffect(()=>{
        setLoading(true)


         const userData = clientReducerState.data

         const token = userData.token

        fetchData(token).then(result=>{
         return result.json()
        }).then(res=>{
            setLoading(false)
            setItems(res.housesPublished)
          
           
        })
       },[clientReducerState])



   const setItem = (items) =>{
      setHomeItems(prev=>{
        return [
            ...prev,
            items
        ]
      })
   }

   const getItem = (page) => {
    setLoading(true)  
        fetchData().then(res=>{
             setLoading(false)
            setItems(homeItems[page])
        })
       
   }
    return (
       <PaginationContext.Provider value={{homeItems,setItem,getItem,items,loading}}  >
        {children}
       </PaginationContext.Provider> 
    )
}

const fetchData = async (token) =>{

return getAllHousespublished(token)
  
}

export default PaginationContextProvider

