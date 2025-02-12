
import { useState } from "react";
import BaseURL from "../../../../utils/BaseURL";
import useGetClientStateManagement from "./useGetClientStateManagement";


export default  function useUpdateClientProfile() {

    const { clientReducerState,clientReducerDispatcher } = useGetClientStateManagement();

    const [errorMessage,setErrorMessage] =useState()

    const [progressBar,setProgressBar] =useState(false)
    const [updatedProfileSuccessfully,setUpdatedProfileSuccessfully] =useState(false)
    let updateProfileRequest = async (token,data) => {
      setProgressBar(true)
      fetch(`${BaseURL.URL}/update-client-profile`,{
            method:"POST",
            headers:{
                'Authorization':`Bearer ${token}`,
               "Content-Type":'application/json'
            },
             body:JSON.stringify(data)
            
           
        }).then(res=>{
            return res.json()
        }).then(result=>{
          setProgressBar(false)
            if(result.status == 200){

                clientReducerDispatcher({
                    TYPE: "Authentication",
                    payload: {
                      ...clientReducerState,
                      isLoggedIn: true,
                      data: {
                        ...result.user,
                        token
                        
                      }
                    }
                  });
                  setUpdatedProfileSuccessfully(true)
               setErrorMessage('no error')
              return   
            }

            setErrorMessage(result.message)
            //setUpdatedProfile(result)
            
        }).catch(err=>{
            setProgressBar(false)
            setErrorMessage('failed to fetch')
        })
    }
    return {updateProfileRequest,errorMessage,progressBar,setUpdatedProfileSuccessfully,updatedProfileSuccessfully}

    
}