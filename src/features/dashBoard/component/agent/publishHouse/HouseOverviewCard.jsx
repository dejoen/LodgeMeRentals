/* eslint-disable react/prop-types */
import { useContext, useRef} from 'react'

import { CombineContext } from '../../../../../context/CombineContextProvider';

const HouseOverViewCard = ({headerText,bodyText,placeHolderText,inputType,option,lgaContainer,updateData})=>{

   

   const {allDataToPublishReducerState,allDataToPublishReducerDispatcher}  = useContext(CombineContext)
     

       const headerRef = useRef()
       const inputRef = useRef()
   

    return (
        <div className="font-nunito w-[300px] border-black border border-opacity-20 rounded-md p-3 m-2  md:m-5 h-[250px] flex flex-col gap-3 place-items-center justify-center ">
  <p className="font-bold" ref={headerRef}>{headerText}</p>
   <p className="text-xs">{bodyText}</p>
   <div className=" border-black border border-opacity-20 rounded-md m-2">
    {
        (inputType === "text") && <input className="outline-none p-2" type="text" placeholder={placeHolderText} ref={inputRef} onChange={(e)=>{
              
             if(String(headerRef.current.innerHTML).toLowerCase().includes('name')){

          allDataToPublishReducerDispatcher({
            TYPE:"Save",payload:{
                ...allDataToPublishReducerState,
                HouseOverview:{
                    ...allDataToPublishReducerState.HouseOverview,
                    houseName:e.target.value
                }

            }
          })

             
              return
             }

             if(String(headerRef.current.innerHTML).toLowerCase().includes('address')){

                allDataToPublishReducerDispatcher({
                    TYPE:"Save",payload:{
                        ...allDataToPublishReducerState,
                        HouseOverview:{
                            ...allDataToPublishReducerState.HouseOverview,
                            houseAddress:e.target.value
                        }
        
                    }
                  })
               
                return
               }
               
             
        }}/>
    }
    {
         (inputType === "select") && <select className="w-[200px] p-2 " onChange={(e)=>{
           // const data = getLocalGovt(e.target.value)
              
               if(String(headerRef.current.innerHTML).toLowerCase().includes('type')){

                allDataToPublishReducerDispatcher({
                    TYPE:"Save",payload:{
                        ...allDataToPublishReducerState,
                        HouseOverview:{
                            ...allDataToPublishReducerState.HouseOverview,
                            houseType:e.target.value
                        }
        
                    }
                  })
                
                return
               }

               if(String(headerRef.current.innerHTML).toLowerCase().includes('state')){
                updateData(e.target.value)
                allDataToPublishReducerDispatcher({
                    TYPE:"Save",payload:{
                        ...allDataToPublishReducerState,
                        HouseOverview:{
                            ...allDataToPublishReducerState.HouseOverview,
                            state:e.target.value,
                            localGovtArea:''
                        }
        
                    }
                  })
                
                return
               }

               if(String(headerRef.current.innerHTML).toLowerCase().includes('government')){
                allDataToPublishReducerDispatcher({
                    TYPE:"Save",payload:{
                        ...allDataToPublishReducerState,
                        HouseOverview:{
                            ...allDataToPublishReducerState.HouseOverview,
                            localGovtArea:e.target.value
                        }
        
                    }
                  })
              
                return
               }
           

        }}  onClick={(e)=>{

         

            if(String(headerRef.current.innerHTML).toLowerCase().includes('type')){

                allDataToPublishReducerDispatcher({
                    TYPE:"Save",payload:{
                        ...allDataToPublishReducerState,
                        HouseOverview:{
                            ...allDataToPublishReducerState.HouseOverview,
                            houseType:e.target.value
                        }
        
                    }
                  })
                
                return
               }

               if(String(headerRef.current.innerHTML).toLowerCase().includes('state')){
                updateData(e.target.value)
                allDataToPublishReducerDispatcher({
                    TYPE:"Save",payload:{
                        ...allDataToPublishReducerState,
                        HouseOverview:{
                            ...allDataToPublishReducerState.HouseOverview,
                            state:e.target.value,
                            localGovtArea:''
                        }
        
                    }
                  })
                
                return
               }

               if(String(headerRef.current.innerHTML).toLowerCase().includes('government')){
                allDataToPublishReducerDispatcher({
                    TYPE:"Save",payload:{
                        ...allDataToPublishReducerState,
                        HouseOverview:{
                            ...allDataToPublishReducerState.HouseOverview,
                            localGovtArea:e.target.value
                        }
        
                    }
                  })
              
                return
               }
           
        }}>
            {
                (option) &&  !lgaContainer && option.map((item,index)=>(
                   
                    <option key={index} className="" name="t" >{item}</option>
            
                ))

            }

{
                (option)  && lgaContainer && option.map((item,index)=>(
                   
                    <option key={index} className="" name="t" >{item}</option>
            
                ))

            }
         </select>
    }
   </div>

        </div>

    );
}

export default HouseOverViewCard