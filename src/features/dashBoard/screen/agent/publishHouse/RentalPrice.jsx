import { Navigate,useNavigate } from 'react-router-dom';
import {  useState,useContext} from 'react';
import { CombineContext } from "../../../../../context/CombineContextProvider";
import { publishHouse } from '../../../service';
import errorIcon from '../../../../../assets/errorPopupIcon.svg'
import backArrowIcon from "../../../../../assets/backarrowIcon.svg"
import { CircularProgress } from '@chakra-ui/progress';
import { TypeAnimation } from 'react-type-animation';

const RentalPrice = () => {
  const {allDataToPublishReducerState,allDataToPublishReducerDispatcher,agentReducerState}  = useContext(CombineContext)
  const [saveIndicator,setSaveindicator]  = useState('')
  const [error,setError] = useState({
       isError:false,
       title:'',
       errorMessage:""
  })
  const [fetchData,setFetchData] = useState(false)
  const [successPage,setSuccessPage] = useState(false)
 const navigate = useNavigate()
   


    return (

      <>

        
  {
   (!allDataToPublishReducerState. HouseOverview.houseName) && <Navigate to={'/agent/dashboard/publish-home/houseOverview'} replace={true}/> 
 }

<div className="font-nunito w-full  h-dvh  md:min-h-[85%] p-2 md:ps-14  mt-20  bg-white z-20 rounded-md shadow-md overflow-y-auto overflow-x-hidden pb-10">

<p className="font-bold mt-8">Rental Price</p>
<p className="text-justify p-2 text-sm">Provide a brief description of your house, including key features like the number of bedrooms, bathrooms, special amenities, and any unique selling points. This helps potential renters understand what makes your property stand out. Tips: Highlight features like a spacious yard, modern kitchen, nearby amenities, or recent renovations to attract more interest.</p>

<div className="w-full    rounded-md mt-2 me-20 " > 

<div>
<p>Tips:</p>
<ul className="list-item list-disc">
    <li>Consider the current market rates for similar properties in your area.</li>
    <li> Factor in any special amenities or features that might justify a higher price.</li>
    <li>Ensure the price is clear and does not include hidden fees, unless explained separately.</li>
    <li> Make sure the price aligns with the overall value and appeal of the property!</li>
</ul>
</div>
<div className=" w-full mt-5 flex flex-wrap gap-8 place-items-center justify-center md:justify-normal">
  <div>
    <p>Monthly/Yearly Rent</p>
    <input type="text"  className="bg-[#acb4ac]  p-1 rounded-md" onChange={(e)=>{
       allDataToPublishReducerDispatcher({
        TYPE:'Save',
        payload:{
          ...allDataToPublishReducerState,
          RentalPrice:{
          ...allDataToPublishReducerState.RentalPrice,
          monthlyOrYearlyRent:e.target.value
          }
        }
       })
    }}/>
  </div>

  

  <div>
    <p>Security Deposit</p>
    <input type="text"  className="bg-[#acb4ac]  p-1 rounded-md"  onChange={(e)=>{
       allDataToPublishReducerDispatcher({
        TYPE:'Save',
        payload:{
          ...allDataToPublishReducerState,
          RentalPrice:{
          ...allDataToPublishReducerState.RentalPrice,
          securityDeposit:e.target.value
          }
        }
       })
    }}/>
  </div>

  <div>
    <p>Application Fees</p>
    <input type="text"  className="bg-[#acb4ac]  p-1 rounded-md" onChange={(e)=>{
       allDataToPublishReducerDispatcher({
        TYPE:'Save',
        payload:{
          ...allDataToPublishReducerState,
          RentalPrice:{
          ...allDataToPublishReducerState.RentalPrice,
          applicationFee:e.target.value
          }
        }
       })
    }}/>
  </div>

  <div>
    <p>Maintenance fees</p>
    <input type="text"  className="bg-[#acb4ac]  p-1 rounded-md" onChange={(e)=>{
       allDataToPublishReducerDispatcher({
        TYPE:'Save',
        payload:{
          ...allDataToPublishReducerState,
          RentalPrice:{
          ...allDataToPublishReducerState.RentalPrice,
          maintenanceFee:e.target.value
          }
        }
       })
    }}/>
  </div>

  <div>
    <p>Pet fees</p>
    <input type="text"  className="bg-[#acb4ac]   p-1 rounded-md" onChange={(e)=>{
       allDataToPublishReducerDispatcher({
        TYPE:'Save',
        payload:{
          ...allDataToPublishReducerState,
          RentalPrice:{
          ...allDataToPublishReducerState.RentalPrice,
          petFees:e.target.value
          }
        }
       })
    }}/>
  </div>

  <div>
    <p>Rental Term</p>
    <input type="text"  className="bg-[#acb4ac]  p-1 rounded-md" onChange={(e)=>{
       allDataToPublishReducerDispatcher({
        TYPE:'Save',
        payload:{
          ...allDataToPublishReducerState,
          RentalPrice:{
          ...allDataToPublishReducerState.RentalPrice,
          rentalTerm:e.target.value
          }
        }
       })
    }}/>
  </div>

  <div>
    <p>Cleaning services</p>
    <input type="text"  className="bg-[#acb4ac]  p-1 rounded-md"  onChange={(e)=>{
       allDataToPublishReducerDispatcher({
        TYPE:'Save',
        payload:{
          ...allDataToPublishReducerState,
          RentalPrice:{
          ...allDataToPublishReducerState.RentalPrice,
          cleaningServices:e.target.value
          }
        }
       })
    }}/>
  </div>

  <div>
    <p>Total Dues</p>
    <input type="text"  className="bg-[#acb4ac]  p-1 rounded-md" onChange={(e)=>{
       allDataToPublishReducerDispatcher({
        TYPE:'Save',
        payload:{
          ...allDataToPublishReducerState,
          RentalPrice:{
          ...allDataToPublishReducerState.RentalPrice,
          totalDue:e.target.value
          }
        }
       })
    }}/>
  </div>

</div>


</div>




<div className="w-full flex justify-end place-items-center h-[25%] gap-5 pe-4 ">
<p className={`${(saveIndicator) ? 'block':'hidden'} ${!(saveIndicator.includes('saved')) ? `${(saveIndicator.includes('saving') ) ? 'text-black':'text-red-600' }` : 'text-green-600'}   `}>{saveIndicator}</p>

<p className="bg-[#BB7655] hover:shadow-black hover:shadow-md  p-3 w-[100px] text-white text-center rounded-lg" onClick={()=>{
    if(!allDataToPublishReducerState.RentalPrice.monthlyOrYearlyRent || !allDataToPublishReducerState.RentalPrice.totalDue ){
      setSaveindicator("Please provide  atleast monthly/yearly rent and total dues data to continue")
      return
    }
     
    
    allDataToPublishReducerDispatcher({
        TYPE:'Save',
        payload:{
          ...allDataToPublishReducerState,
          RentalPrice:{
          ...allDataToPublishReducerState.RentalPrice,
    securityDeposit:(allDataToPublishReducerState.RentalPrice.securityDeposit)?allDataToPublishReducerState.RentalPrice.securityDeposit:'0',
    applicationFee:(allDataToPublishReducerState.RentalPrice.applicationFee)?allDataToPublishReducerState.RentalPrice.applicationFee:'0',
    maintenanceFee:(allDataToPublishReducerState.RentalPrice.maintenanceFee)?allDataToPublishReducerState.RentalPrice.maintenanceFee:'0',
    petFees:(allDataToPublishReducerState.RentalPrice.petFees)?allDataToPublishReducerState.RentalPrice.petFees:'0',
    rentalTerm:(allDataToPublishReducerState.RentalPrice.rentalTerm)?allDataToPublishReducerState.RentalPrice.rentalTerm:'no term',
    cleaningServices:(allDataToPublishReducerState.RentalPrice. cleaningServices)?allDataToPublishReducerState.RentalPrice.cleaningServices:'no cleaning service',
    
          }
        }
       })

    setSaveindicator('saving...')
setTimeout(()=>{
setSaveindicator('saved')
},3000)

}}>Save</p>
<p className="bg-[#F1E9E9] hover:shadow-black hover:shadow-md p-3 w-[100px] text-black text-center rounded-lg" onClick={ async ()=>{
 //   navigate('/agent/dashboard/publish-home/houseFeatures')
// alert(JSON.stringify(allDataToPublishReducerState))
const userData = agentReducerState.data

setFetchData(true)

publishHouse(allDataToPublishReducerState,userData.token).then(result=>{
  return result.json()
 }).then(res=>{
    if(res.status === 200){
      setFetchData(false)
      setTimeout(()=>{
        setSuccessPage(true)
      },1000)
    
    }else{
      setError({isError:true,errorMessage:res.message,title:res.title})
    }
  
 }).catch(err=> setError({isError:true,errorMessage:err,title:"Error Occured."}))

 }} >Publish</p>
</div>


</div>

<div className={`${(error.isError || fetchData || successPage) ? 'block':'hidden'} absolute   w-full top-0 bottom-0  bg-black bg-opacity-35 flex  mt-20  ps-[16%] place-items-center mx-auto`}>

<div className={` ${(error.isError) ? 'block':'hidden'} animate-popUpAnimation w-full m-5 md:w-[500px] h-[500px] bg-white rounded-md  `}>
            <img className='m-5 w-8' src={backArrowIcon} onClick={()=>{
                
                
            }}/>
           <div className='  flex flex-col place-items-center justify-center mt-20 '>
            <img className='w-[200px]' src={errorIcon}/>
             <p className='pt-5 font-bold text-2xl'>{error.title}</p>
             <p className='pt-5   text-center '>{error.errorMessage}</p>
             </div>
             </div>

             <div className={` ${(fetchData) ? 'block':'hidden'}  animate-popUpAnimation  bg-white w-[300px] md:w-1/2 h-[50vh] m-5 rounded-2xl flex flex-col items-center justify-center`}>
            
            <CircularProgress size={80} color="#BB7655" isIndeterminate />
           <div className="mt-10">
           <TypeAnimation
            sequence={[
               500,
               `Wait`,1000,
               `while`,1000,
               `we publish`,1000,
               `your house.....`,1000,
               '',500
            ]}
            speed={50}
           style={{fontSize:'2em'}}
           repeat={Infinity}
           preRenderFirstString:true
           />
           </div>

           
         </div>

         <div className={` ${(successPage) ? 'block':'hidden'} font-nunito animate-popUpAnimation  bg-white w-[300px] md:w-1/2 h-fit  p-5 m-5 rounded-2xl flex flex-col items-center `}>
            
          <p className='font-bold text-2xl mt-5'> Congratulations! Your Property is Live</p>

           <p className='text-balance text-center mt-5'>{"Your listing has been successfully published and is now visible to potential renters. We’ve made it easy for people to find your property—expect inquiries soon!"}</p>
           <div>
           <p className='ms-4 mt-4'>What’s Next:</p>

            <ul className='list-item ms-8 list-disc text-sm'>
              <li> Manage Your Listing: Make updates or adjustments to the details anytime through your dashboard.</li>
              <li> Track Inquiries: Keep an eye on messages from interested renters in your inbox.</li>
              <li> Enhance Visibility: Share your listing link on social media or with potential tenants for even more exposure.</li>
            </ul>
           </div>
           <p className='mt-4'> Thank you for choosing LodgeMe to showcase your property!</p>
           
           <div className='w-full  '>
            <p className='bg-[#BB7655] text-white p-2 ms-3 me-3 mt-4 text-center rounded-md cursor-default hover:shadow-lg' onClick={()=>{
                navigate('/agent/dashboard')
            }}>Done</p>
           </div>
         </div>
           
</div>
      </>
     
    );
}

export default  RentalPrice