import {  Navigate,useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { CombineContext } from "../../../../../context/CombineContextProvider";



const HouseFeatures = () => {
 const navigate = useNavigate()

 const [saveIndicator,setSaveindicator]  = useState('')

 const {allDataToPublishReducerState,allDataToPublishReducerDispatcher}  = useContext(CombineContext)
    return (


      <>
      
       
      {
            (!allDataToPublishReducerState.HouseOverview.houseName) && <Navigate to={'/agent/dashboard/publish-home/houseOverview'} replace={true}/> 
          }


<div className=" font-nunito w-full  h-fit  md:min-h-[85%]  p-2 md:ps-14  mt-20  bg-white z-20 rounded-md shadow-md overflow-y-auto overflow-x-hidden pb-14">

<p className="font-bold mt-8">House Features</p>
<p className="text-justify p-2 text-sm">Highlight the key features of your property, such as the number of bedrooms, bathrooms, parking spaces, or amenities like a pool, garden, or balcony. This helps renters understand what your house offers at a glance.</p>

<div className="w-full  h-[350px]  flex flex-col md:flex-row  mt-4">
<div className=" w-full md:w-[70%] flex flex-col gap-4 ">
<div className="w-full  md:w-[50%] flex gap-3">
<p>Total number of bedroom</p>
<input type="number" className=" w-[40px] border border-50 rounded-md border-black outline-none"  onChange={(e)=>{
     allDataToPublishReducerDispatcher({
      TYPE:'Save',
      payload:{
         ...allDataToPublishReducerState,
         HouseFeatures:{
            ...allDataToPublishReducerState.HouseFeatures,
            totalNumberOfBedRooms:e.target.value

         }
      }
     })
}}/>
</div>



<div className="w-full h-fit  md:w-[66%] flex gap-9">
<p >Total number of toilets</p>
<input type="number" className=" w-[40px] border border-50 rounded-md border-black outline-none"  onChange={(e)=>{
     allDataToPublishReducerDispatcher({
      TYPE:'Save',
      payload:{
         ...allDataToPublishReducerState,
         HouseFeatures:{
            ...allDataToPublishReducerState.HouseFeatures,
            totalNumberOfToilets:e.target.value

         }
      }
     }) }} />
</div>

<div className="flex flex-col gap-2">

<div className=" w-full md:w-[50%] flex gap-3 ">
<p className="w-[68%]" >Fennced</p>
<input type="checkbox" className=" w-[30px] border border-50 rounded-md border-black outline-none " onChange={(e)=>{
    allDataToPublishReducerDispatcher({
      TYPE:'Save',
      payload:{
         ...allDataToPublishReducerState,
         HouseFeatures:{
            ...allDataToPublishReducerState.HouseFeatures,
            houseFenced:e.target.checked

         }
      }
     })
}} />
</div>

<div className="w-full md:w-[50%]  flex gap-3 ">
<p className="w-[68%]" >Running Water</p>
<input type="checkbox" className=" w-[30px] border border-50 rounded-md border-black outline-none "  onChange={(e)=>{
    allDataToPublishReducerDispatcher({
      TYPE:'Save',
      payload:{
         ...allDataToPublishReducerState,
         HouseFeatures:{
            ...allDataToPublishReducerState.HouseFeatures,
            runningWater:e.target.checked

         }
      }
     })
}}/>
</div>

<div className="w-full md:w-[50%]  flex gap-3 ">
<p className="w-[68%]" >Prepaid Meter</p>
<input type="checkbox" className=" w-[30px] border border-50 rounded-md border-black outline-none " onChange={(e)=>{
    allDataToPublishReducerDispatcher({
      TYPE:'Save',
      payload:{
         ...allDataToPublishReducerState,
         HouseFeatures:{
            ...allDataToPublishReducerState.HouseFeatures,
            prepaidMeter:e.target.checked

         }
      }
     })
}} />
</div>

<div className="w-full md:w-[50%]  flex gap-3 ">
<p className="w-[68%]" >Smart home features</p>
<input type="checkbox" className=" w-[30px] border border-50 rounded-md border-black outline-none " onChange={(e)=>{
    allDataToPublishReducerDispatcher({
      TYPE:'Save',
      payload:{
         ...allDataToPublishReducerState,
         HouseFeatures:{
            ...allDataToPublishReducerState.HouseFeatures,
            smartHomeFeatures:e.target.checked

         }
      }
     })
}}  />
</div>

<div className="w-full md:w-[50%] flex gap-3 ">
<p className="w-[68%]" >Laundry room</p>
<input type="checkbox" className=" w-[30px] border border-50 rounded-md border-black outline-none "  onChange={(e)=>{
    allDataToPublishReducerDispatcher({
      TYPE:'Save',
      payload:{
         ...allDataToPublishReducerState,
         HouseFeatures:{
            ...allDataToPublishReducerState.HouseFeatures,
            laundryRoom:e.target.checked

         }
      }
     })
}} />
</div>

<div className="w-full md:w-[50%]  flex gap-3 ">
<p className="w-[68%]" >Air Conditioning</p>
<input type="checkbox" className=" w-[30px] border border-50 rounded-md border-black outline-none "  onChange={(e)=>{
    allDataToPublishReducerDispatcher({
      TYPE:'Save',
      payload:{
         ...allDataToPublishReducerState,
         HouseFeatures:{
            ...allDataToPublishReducerState.HouseFeatures,
            airConditioning:e.target.checked

         }
      }
     })
}}/>
</div>

<div className="w-full md:w-[50%] flex gap-3 ">
<p className="w-[68%]" >Parking space</p>
<input type="checkbox" className=" w-[30px] border border-50 rounded-md border-black outline-none "  onChange={(e)=>{
    allDataToPublishReducerDispatcher({
      TYPE:'Save',
      payload:{
         ...allDataToPublishReducerState,
         HouseFeatures:{
            ...allDataToPublishReducerState.HouseFeatures,
            parkingSpace:e.target.checked

         }
      }
     })
}} />
</div>

<div className="w-full md:w-[50%]  flex gap-3 ">
<p className="w-[68%]" >Garbage disposal service</p>
<input type="checkbox" className=" w-[30px] border border-50 rounded-md border-black outline-none "  onChange={(e)=>{
    allDataToPublishReducerDispatcher({
      TYPE:'Save',
      payload:{
         ...allDataToPublishReducerState,
         HouseFeatures:{
            ...allDataToPublishReducerState.HouseFeatures,
            garbageDisposalService:e.target.checked

         }
      }
     })
}}/>
</div>

<div className="w-full md:w-[50%]  flex gap-3 ">
<p className="w-[68%]" >Adequate lighting</p>
<input type="checkbox" className=" w-[30px] border border-50 rounded-md border-black outline-none " onChange={(e)=>{
    allDataToPublishReducerDispatcher({
      TYPE:'Save',
      payload:{
         ...allDataToPublishReducerState,
         HouseFeatures:{
            ...allDataToPublishReducerState.HouseFeatures,
            adequateLigting:e.target.checked

         }
      }
     })
}} />
</div>




</div>




</div>




<div className=" w-full md:w-[70%] flex flex-col gap-4 ">

<div className="w-full md:w-[80%] flex gap-3">
<p className="w-[68%]" >Storage space</p>
<input type="checkbox" className=" w-[30px] border border-50 rounded-md border-black outline-none "  onChange={(e)=>{
    allDataToPublishReducerDispatcher({
      TYPE:'Save',
      payload:{
         ...allDataToPublishReducerState,
         HouseFeatures:{
            ...allDataToPublishReducerState.HouseFeatures,
            storageSpace:e.target.checked

         }
      }
     })
}} />
</div>
<div className="flex flex-col gap-2">

<div className="w-full  md:w-[80%] flex gap-3 ">
<p className="w-[68%]" >Pet-friendly </p>
<input type="checkbox" className=" w-[30px] border border-50 rounded-md border-black outline-none "  onChange={(e)=>{
    allDataToPublishReducerDispatcher({
      TYPE:'Save',
      payload:{
         ...allDataToPublishReducerState,
         HouseFeatures:{
            ...allDataToPublishReducerState.HouseFeatures,
            petFriendly:e.target.checked

         }
      }
     })
}}/>
</div>

<div className="w-full  md:w-[80%] flex gap-3 ">
<p className="w-[68%]" >Emergency exits</p>
<input type="checkbox" className=" w-[30px] border border-50 rounded-md border-black outline-none "  onChange={(e)=>{
    allDataToPublishReducerDispatcher({
      TYPE:'Save',
      payload:{
         ...allDataToPublishReducerState,
         HouseFeatures:{
            ...allDataToPublishReducerState.HouseFeatures,
            emergencyExits:e.target.checked

         }
      }
     })
}} />
</div>

<div className="w-full  md:w-[80%] flex gap-3 ">
<p className="w-[68%]" >Secure windows and doors</p>
<input type="checkbox" className=" w-[30px] border border-50 rounded-md border-black outline-none "  onChange={(e)=>{
    allDataToPublishReducerDispatcher({
      TYPE:'Save',
      payload:{
         ...allDataToPublishReducerState,
         HouseFeatures:{
            ...allDataToPublishReducerState.HouseFeatures,
            secureWindowsAndDoors:e.target.checked

         }
      }
     })
}} />
</div>

<div className="w-full  md:w-[80%] flex gap-3 ">
<p className="w-[68%]" >Security systems</p>
<input type="checkbox" className=" w-[30px] border border-50 rounded-md border-black outline-none " onChange={(e)=>{
    allDataToPublishReducerDispatcher({
      TYPE:'Save',
      payload:{
         ...allDataToPublishReducerState,
         HouseFeatures:{
            ...allDataToPublishReducerState.HouseFeatures,
            securitySystems:e.target.checked

         }
      }
     })
}} />
</div>

<div className="w-full  md:w-[80%] flex gap-3 ">
<p className="w-[68%]" >Backyard, garden, or balcony</p>
<input type="checkbox" className=" w-[30px] border border-50 rounded-md border-black outline-none "  onChange={(e)=>{
    allDataToPublishReducerDispatcher({
      TYPE:'Save',
      payload:{
         ...allDataToPublishReducerState,
         HouseFeatures:{
            ...allDataToPublishReducerState.HouseFeatures,
            backyardGardenOrBalcony:e.target.checked

         }
      }
     })
}}/>
</div>

<div className="w-full  md:w-[80%] flex gap-3 ">
<p className="w-[68%]" >Swimming pool gym</p>
<input type="checkbox" className=" w-[30px] border border-50 rounded-md border-black outline-none "   onChange={(e)=>{
    allDataToPublishReducerDispatcher({
      TYPE:'Save',
      payload:{
         ...allDataToPublishReducerState,
         HouseFeatures:{
            ...allDataToPublishReducerState.HouseFeatures,
            swimmingPoolGym:e.target.checked

         }
      }
     })
}} />
</div>

<div className="w-full  md:w-[80%] flex gap-3 ">
<p className="w-[68%]" >Gym</p>
<input type="checkbox" className=" w-[30px] border border-50 rounded-md border-black outline-none "   onChange={(e)=>{
    allDataToPublishReducerDispatcher({
      TYPE:'Save',
      payload:{
         ...allDataToPublishReducerState,
         HouseFeatures:{
            ...allDataToPublishReducerState.HouseFeatures,
            Gym:e.target.checked

         }
      }
     })
}}  />
</div>

<div className="w-full  md:w-[80%] flex gap-3 ">
<p className="w-[68%]" >24/7 maintenance support</p>
<input type="checkbox" className=" w-[30px] border border-50 rounded-md border-black outline-none "   onChange={(e)=>{
    allDataToPublishReducerDispatcher({
      TYPE:'Save',
      payload:{
         ...allDataToPublishReducerState,
         HouseFeatures:{
            ...allDataToPublishReducerState.HouseFeatures,
            maintenanceSupport:e.target.checked

         }
      }
     })
}} />
</div>

<div className="w-full  md:w-[80%] flex gap-3 ">
<p className="w-[68%]" >Safe play area for children</p>
<input type="checkbox" className=" w-[30px] border border-50 rounded-md border-black outline-none " onChange={(e)=>{
    allDataToPublishReducerDispatcher({
      TYPE:'Save',
      payload:{
         ...allDataToPublishReducerState,
         HouseFeatures:{
            ...allDataToPublishReducerState.HouseFeatures,
            safePlayAreaForChildren:e.target.checked

         }
      }
     })
}} />
</div>



</div>
</div>

</div>



<div className=" absolute md:relative w-full flex justify-center md:justify-end place-items-center h-[20%] gap-5 pe-4 mt-10 ">
<p className={`${(saveIndicator) ? 'block':'hidden'} ${!(saveIndicator.includes('saved')) ? `${(saveIndicator.includes('saving') ) ? 'text-black':'text-red-600' }` : 'text-green-600'}   `}>{saveIndicator}</p>
<p className="bg-[#BB7655] hover:shadow-black hover:shadow-md  p-3 w-[100px] text-white text-center rounded-lg"  onClick={()=>{

if(!allDataToPublishReducerState.HouseFeatures.
   totalNumberOfBedRooms || !allDataToPublishReducerState.HouseFeatures.
   totalNumberOfToilets){
  setSaveindicator('TotalNumberOfBedRooms or  TotalNumberOfToilets Cannot Be empty')
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
    navigate('/agent/dashboard/publish-home/mediaUpload')
 }} >Next</p>
</div>



</div>
      
      </>
     
       

    );
}

export default HouseFeatures