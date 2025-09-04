//import { MapPin } from "lucide-react"
import { ArrowLeft, Loader, Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import  AllStateData from '../../../../../utils/AllStateData.json'
import { useCallback, useEffect, useState } from "react";
import backArrowIcon from "../../../../../assets/backarrowIcon.svg";
import errorIcon from "../../../../../assets/errorPopupIcon.svg";
import { addNewMarketInsight } from "../../../service";
import useGetClientStateManagement from "../../../hooks/client/useGetClientStateManagement";

export default function ClientRequest() {
  const navigate = useNavigate();
  const {clientReducerState} = useGetClientStateManagement()
  const [stateSelected,setStateSelected] = useState('Abuja')
  const  [lgaSelected,setLgaSelected] = useState('Abuja')
  const [localGovt,setLocalGovt] =  useState([])
  const [processing,setProcessing] = useState(false)
  const [errorMessage,setErrorMessage] = useState('')
  const [successfullyPosted,setSuccessfullyPosted] = useState(false)
  const [houseType] = useState([
                "⁠Self-contained (Selfcon)",
                " ⁠Flat",
                "⁠Apartment",
                "⁠One-room",
                "⁠Two-room",
                "⁠Three-room",
                "⁠Four-room",
                "Boy's Quarter",
                "⁠Duplex",
                "⁠Detached house",
                "⁠Semi-detached house",
                "⁠Terrace house ",
                "⁠Shop",
                "⁠Office space ",
                "⁠Hostel ",
                "⁠Studio apartment",
                "⁠Gatehouse",
                "⁠Bungalow",
                "Townhouse",
                "⁠One-story apartments",
                "Two-story apartment ",
                "⁠Three-story apartment",
                "⁠Four-story apartment ",
                "⁠ ⁠Five-story apartment",
                "⁠Face-me-I-face-you",
              ])

  useEffect(()=>{
    setLocalGovt(AllStateData.find(state=>state.name === stateSelected).lgas)
  }
,[stateSelected])

const [marketInsightData,setMarketInsightData] = useState({
  location:{
    state:'Abuja',
    localGovt:'Abuja',
    area:''
  },
  budget:{
      minimumBudget:'',
      maximumBudget:'',
      rentTimeFrame:''
  },
 propertyType: {
      appartmentType:'⁠Self-contained (Selfcon)',
      numberOfRooms: '',
      numberOfToilet: ''
    },
    durationStay:'',

    additionalDescription: ''
})


  return (
    <div className="">
    <div>
        <div
        className="md:ml-12 md:pt-8 pt-5 ml-6 "
        onClick={() => {
          navigate("/client/dashboard");
        }}
      >
        <ArrowLeft />
      </div>
      <div className="w-[90%] mx-auto pt-6 md:pt-10">
        <h2 className="font-bold text-2xl md:text-3xl">Tell us what you are looking for</h2>
        <p className="py-1 font-semibold text-sm">
          {" "}
          Easily let us know what you are looking for in a rental home. Share your preferences like location, budget,
          and features, and we&apos;ll find options tailored just for you. Start your search with a single click!
        </p>

        <form className="py-5 space-y-5">
          <div className="flex flex-col gap-2">
            <label className="text-lg font-semibold"> Location</label>
            <div className="flex md:space-x-8  flex-wrap gap-4  md:gap-0">
            <select value={stateSelected} className="outline-none  bg-transparent px-2 py-2 border-gray-700 border md:w-[15%] rounded-lg"
            onChange={(e)=>{
              setStateSelected(e.target.value)
              setMarketInsightData({...marketInsightData,location:{
                ...marketInsightData.location,
                state:e.target.value
              }})
            }}  >
            {
              AllStateData.map((state,index)=>(
                <option>{state.name}</option>
              ))
            }
            </select>

             <select  className="outline-none  bg-transparent px-2 py-2 border-gray-700 border md:w-[15%] rounded-lg"
            onChange={(e)=>{
            
              setLgaSelected(e.target.value)
               setMarketInsightData({...marketInsightData,location:{
                ...marketInsightData.location,
                localGovt:e.target.value
              }})
              //setStateSelected(e.target.value)
            }}  >
            {
              localGovt.map((lga,index)=>(
                <option>{lga}</option>
              ))
            }
            </select>
             
              <input
              onChange={(e)=>{
                 setMarketInsightData({...marketInsightData,location:{
                ...marketInsightData.location,
                area:e.target.value
              }})
              }}
                type="text"
                placeholder=" Enter Area"
                className="outline-none  bg-transparent px-2 py-2 border-gray-700 border md:w-[25%] rounded-lg"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-lg font-semibold"> Budget</label>
            <div className="flex md:space-x-8  flex-wrap gap-4  md:gap-0">
              <input
               value={!marketInsightData.budget.minimumBudget  ?'':new Intl.NumberFormat().format(
                  marketInsightData.budget.minimumBudget.replace(/[a-z A-Z ,]/g, ""))}
               onChange={(e)=>{
                 setMarketInsightData({...marketInsightData,budget:{
                ...marketInsightData.budget,
                minimumBudget:new Intl.NumberFormat().format(
                     e.target.value.replace(/[a-z A-Z ,]/g, ""))
             
              }})
              }}
                type="text"
                placeholder=" Minimum Budget"
                className="outline-none  bg-transparent px-2 py-2 border-gray-700 border md:w-[15%] w-[40%]  rounded-lg"
              />


              <input
               onChange={(e)=>{
                 setMarketInsightData({...marketInsightData,budget:{
                ...marketInsightData.budget,
               maximumBudget:new Intl.NumberFormat().format(
                     e.target.value.replace(/[a-z A-Z ,]/g, ""))
              }})
              }}
              value={
                  !marketInsightData.budget.maximumBudget  ?'':new Intl.NumberFormat().format(
                  marketInsightData.budget.maximumBudget.replace(/[a-z A-Z ,]/g, ""))}
                type="text"
                placeholder="Maximum Budget "
                className="outline-none  bg-transparent px-2 py-2 border-gray-700 border md:w-[15%] w-[50%] rounded-lg"
              />
              <input
               onChange={(e)=>{
                 setMarketInsightData({...marketInsightData,budget:{
                ...marketInsightData.budget,
               rentTimeFrame:e.target.value
              }})
              }}
                type="number"
                placeholder=" Rent Timeframe"
                className="outline-none  bg-transparent px-2 py-2 border-gray-700 border md:w-[15%] rounded-lg"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-lg font-semibold"> Property Type</label>
            <div className="flex md:space-x-8  flex-wrap gap-4  md:gap-0">
              <select
               onChange={(e)=>{
                 setMarketInsightData({...marketInsightData,propertyType:{
                ...marketInsightData.propertyType,
                appartmentType:e.target.value
              }})
              }}
             
                placeholder=" Apartment Type"
                className="outline-none  bg-transparent px-2 py-2 border-gray-700 border md:w-[15%] rounded-lg"
              >

                {
                  houseType.map((type)=>(
                    <option>{type}</option>
                  ))
                }

              </select>
              <input
               onChange={(e)=>{
                 setMarketInsightData({...marketInsightData,propertyType:{
                ...marketInsightData.propertyType,
                numberOfRooms:e.target.value
              }})
              }}
                type="number"
                placeholder="Number of Rooms "
                className="outline-none  bg-transparent px-2 py-2 border-gray-700 border md:w-[20%] rounded-lg"
              />
              <input
               onChange={(e)=>{
                 setMarketInsightData({...marketInsightData,propertyType:{
                ...marketInsightData.propertyType,
                numberOfToilet:e.target.value
              }})
              }}
                type="number"
                placeholder=" Number of Toilets"
                className="outline-none  bg-transparent px-2 py-2 border-gray-700 border w-[30%] rounded-lg"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-lg font-semibold"> Duration Of Stay</label>
            <div className="flex space-x-8">
              <input
               onChange={(e)=>{
                 setMarketInsightData({...marketInsightData,durationStay:e.target.value})
              }}
                type="date"
                placeholder=" Select Duration"
                className="outline-none  bg-transparent px-2 py-2 border-gray-700 border md:w-[10%] rounded-lg"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-lg font-semibold"> Additional Description</label>
            <div className="flex space-x-8">
              <textarea
                 onChange={(e)=>{
                 setMarketInsightData({...marketInsightData,additionalDescription:e.target.value})
              }}
                type="text"
                placeholder=" Write a note"
                className="outline-none  bg-transparent px-2 py-2 border-gray-700 border w-full md:w-[60%] h-[60%] rounded-lg"
              />
            </div>
          </div>
        
          <div className="flex justify-end text-gray-100 place-items-center  ">
           {
            errorMessage ?  <p className="text-red-600 me-5">{errorMessage}</p>: !errorMessage && successfullyPosted ? <p className="text-green-600 me-5">Successfully made a request</p>:null
           }
            <button type="button" onClick={async()=>{
              setErrorMessage('')
             const dataEmpty = Object.entries(marketInsightData).some(([key,value])=>{
                   if(!value) return true
               const isDataEmpty  = Object.entries(value).some(([key,value])=>{
                     if(key==='state' || key=== 'budget')
                   return value === '' || !value || value === undefined
                 })
                 if(isDataEmpty) return true
                
              })

              if(dataEmpty){
         setErrorMessage('Please fill the complete data')
         return
              }

              setProcessing(true)
               try {
              alert(JSON.stringify(marketInsightData))
                const response = await addNewMarketInsight(marketInsightData,clientReducerState.data.token)
                  const result = await response.json()
                  setErrorMessage('')
                  setProcessing(false)
                  if(result.status ===200){
                    setSuccessfullyPosted(true)
                    return
                  }
                   setErrorMessage(result.message)
               } catch (error) {
                setErrorMessage(error.message)
                 setProcessing(false)
               }
             
            }} className="bg-requestBtn px-6 rounded-lg py-2">Submit</button>
           {
            processing ?  <Loader2 color="rgba(187, 118, 85, 1)" className="animate-spin mt-2 ms-5" /> :null
           }
          </div>
        </form>
      </div>
    </div>
       
    </div>
  );
}


const ErrorPopUpScreen = ({ errorMessage, closeErrorScreen }) => {
  return (
    <div className="absolute bg-black/40 h-full w-full flex justify-center  place-items-center ">
      <div className="bg-white h-[60%] w-full md:w-[40%] rounded-lg shadow-lg shadow-black/50 m-5 animate-popUpAnimation">
        <img
          onClick={() => {
            closeErrorScreen();
          }}
          src={backArrowIcon}
          width={30}
          height={30}
          className="m-6"
        />

        <div className="w-full flex flex-col gap-5 justify-center place-items-center mt-10">
          <img src={errorIcon} height={200} width={200} />
          <p className="text-center">{errorMessage}</p>
        </div>
      </div>
    </div>
  );
};
