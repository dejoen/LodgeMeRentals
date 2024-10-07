import { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { CombineContext } from "../../../../../context/CombineContextProvider";


const AboutHouse = () => {
    const navigate = useNavigate()
    

    const [saveIndicator,setSaveindicator]  = useState('')

   const {allDataToPublishReducerState,allDataToPublishReducerDispatcher}  = useContext(CombineContext)
  

    return (
        <>
          
          {
            (!allDataToPublishReducerState. HouseOverview.houseName) && <Navigate to={'/agent/dashboard/publish-home/houseOverview'} replace={true}/> 
          }
        
        <div className="font-nunito w-full  h-dvh  md:min-h-[85%] p-2 md:ps-14  mt-20  bg-white z-20 rounded-md shadow-md overflow-y-auto overflow-x-hidden pb-10">

        <p className="font-bold mt-8">About this house</p>
        <p className="text-justify p-2 ">Please enter the rental price for your property. This price should reflect the monthly rent amount in your local currency. It’s important to set a competitive and accurate price to attract potential renters. </p>
    
       <div className="w-full  h-[350px] border-2 bg-opacity-50  rounded-md mt-2 me-20 " onClick={(e)=>{
          e.currentTarget.childNodes[0].focus()
       }}> 
         <input type="text" className="h-fit w-full outline-none" onChange={(e)=>{
               allDataToPublishReducerDispatcher({
                TYPE:'Save',
                payload:{
                  ...allDataToPublishReducerState,
                  AboutHouse:{
                    ...allDataToPublishReducerDispatcher.AboutHouse,
                    description:e.target.value
                  }
                }
               })
         }} />
       </div>


      

<div className="w-full flex justify-end place-items-center h-[25%] gap-5 pe-4 ">
<p className={`${(saveIndicator) ? 'block':'hidden'} ${!(saveIndicator.includes('saved')) ? `${(saveIndicator.includes('saving') ) ? 'text-black':'text-red-600' }` : 'text-green-600'}   `}>{saveIndicator}</p>
     <p className="bg-[#BB7655] hover:shadow-black hover:shadow-md  p-3 w-[100px] text-white text-center rounded-lg" onClick={()=>{

              if(!allDataToPublishReducerState.AboutHouse.description){
                setSaveindicator('Please enter all fields to continue')
               return 
             }
              setSaveindicator('saving...')
      setTimeout(()=>{
         setSaveindicator('saved')
      },3000)
     }}>Save</p>
     <p className="bg-[#F1E9E9] hover:shadow-black hover:shadow-md p-3 w-[100px] text-black text-center rounded-lg" onClick={()=>{
           if(!saveIndicator.includes('saved')){
            setSaveindicator('you have to save before clicking next')
            return
           }
           navigate('/agent/dashboard/publish-home/houseFeatures')
         }} >Next</p>
</div>
       
     
      </div>
        </>
    );
}

export default AboutHouse