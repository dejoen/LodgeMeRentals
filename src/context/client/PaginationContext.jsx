/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react"


export   const PaginationContext  = createContext()

const PaginationContextProvider = ({children}) => {
   
   
    
    const [homeItems,setHomeItems] = useState([
         [
            1,2,
         ],
         [
            2,4,6,
         ],
         [
            2,4,6,5,9
         ],
         [
            2,4,6,5,9,9,3,5,4
         ]
        
        
    ])
     const [items,setItems] = useState([])
     const [loading,setLoading] = useState(false)
     useEffect(()=>{
        setLoading(true)
        fetchData().then(res=>{
            setLoading(false)
            setItems(homeItems[0])
           
        })
       },[])

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

const fetchData = async () =>{
  
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
           
           resolve("just me")
        },5000)
    })
    

   
}

export default PaginationContextProvider

