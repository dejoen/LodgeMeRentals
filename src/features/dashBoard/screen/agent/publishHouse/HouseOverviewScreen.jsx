import { useNavigate } from "react-router-dom";
import HouseOverViewCard from "../../../component/agent/publishHouse/HouseOverviewCard";
 
import allStateData from '../../../../../utils/AllStateData.json'
import { useContext, useState } from "react";
import { CombineContext } from "../../../../../context/CombineContextProvider";


const  HouseOverViewScreen = () => {
  
  const {allDataToPublishReducerState}  = useContext(CombineContext)

  const [saveIndicator,setSaveindicator]  = useState('')
   
   const navigate = useNavigate()
   
   const allStateName = allStateData.map(state=>{
    return state.name
   })


   const getLocalGovt = (name)=>{
    return  allStateData.filter(lga=>{
         return lga.name ===  name
     })
  }



   const [activeLocalGovt,setActiveLocalGovt] = useState(()=>{
    const data = getLocalGovt('Abuja')
    
    if(data){
        return data[0].lgas
    }
    return []
  })

 

    const updateData = (state) => {
      
       const  data = getLocalGovt(state)

       setActiveLocalGovt(data[0].lgas)

    }


    const checkIfDataComplete = (data) => {
  
       const result = Object.values(data).some(value=> value === '')
      return result
    }



    return (
      <>
        <div className=" w-full  h-dvh  md:min-h-[85%]   mt-20  bg-white z-20 rounded-md shadow-md overflow-y-auto  pb-10">

          <p className="font-bold ms-20 mt-8">House Overview</p>
      


          <div className=" h-[75%]  flex flex-wrap justify-center overflow-y-auto">
           {
           [{
             headeText:'House Name/Apartment Name',
             bodyText:'Enter a unique name for your property, like “Sunny Apartments” or “Willow House.” This helps renters easily find and identify your listing. Make sure it’s accurate for clear communication.',
             placeHolderText:"house name",
             inputType:'text'
           },{
            headeText:'House or Apartment address',
            bodyText:'Provide the full **House or Apartment Address** to ensure potential renters can accurately locate your property. Make sure to enter details like street name, building number, and any additional information that helps identify your property clearly. This step is crucial for making your listing easily searchable and visible to users on the platform.',
            placeHolderText:"Address where house is located",
            inputType:'text'
          },

          {
            headeText:'House type',
            bodyText:'To help potential renters find the perfect home, please select the type of house you are listing. This information will ensure your property is categorized correctly and is easier for users to find',
            placeHolderText:"Select house type",
            inputType:'select',
            options:[
                '4 Bed room flat',
                'One Room Appartment',
            ]
          },
          {
            headeText:'State',
            bodyText:' Please enter the location of your property. Providing the accurate address or at least the state helps potential renters find your listing and understand where it’s situated.',
            placeHolderText:"Select state",
             inputType:'select',
             options:allStateName
          },
          {
            headeText:'Local government',
            bodyText:'Please enter the local government area where your property is located. This helps renters get a clearer picture of the property’s local governance and community.Providing this information helps renters understand local services and administrative details.',
            placeHolderText:"Select local government",
             inputType:'select',
             options:activeLocalGovt
          },
         
        
        ].map((item,index)=>(
            <HouseOverViewCard key={index} headerText={item.headeText} bodyText={item.bodyText} placeHolderText={item.placeHolderText} inputType={item.inputType} option={item.options} lgaContainer={(index===4)?true:false } updateData={updateData}/>
           ))

}


          </div>

<div className="w-full flex justify-end place-items-center pe-4 h-[25%] gap-5">
  <p className={`${(saveIndicator) ? 'block':'hidden'} ${!(saveIndicator.includes('saved')) ? `${(saveIndicator.includes('saving') ) ? 'text-black':'text-red-600' }` : 'text-green-600'}   `}>{saveIndicator}</p>
       <p className="bg-[#BB7655]    hover:shadow-black hover:shadow-md  p-3 w-[100px] text-white text-center rounded-lg"   onClick={()=>{
          
         
            const valid = checkIfDataComplete(allDataToPublishReducerState.HouseOverview)
         
          
          if(valid){
             setSaveindicator('Please enter all fields to continue')
            return 
          }
           setSaveindicator('saving...')
   setTimeout(()=>{
      setSaveindicator('saved')
   },3000)

         //  alert(JSON.stringify(allDataToPublishReducerState))
       }}>Save</p>
       <p className="bg-[#F1E9E9] hover:shadow-black hover:shadow-md p-3 w-[100px] text-black text-center rounded-lg" onClick={()=>{
          if(saveIndicator.includes('saved')){
            navigate('/agent/dashboard/publish-home/aboutHouse')
            return
          }

          setSaveindicator('you have to save data before clicking next')
       }}>Next</p>
</div>
         
       
        </div>

       

        </>

    );
}

export default HouseOverViewScreen 