/* eslint-disable react/prop-types */


const HouseOverViewCard = ({headerText,bodyText,placeHolderText,inputType,option})=>{
    return (
        <div className="font-nunito w-[300px] border-black border border-opacity-20 rounded-md p-3 m-5 h-[250px] flex flex-col gap-3 place-items-center justify-center ">
  <p className="font-bold">{headerText}</p>
   <p className="text-xs">{bodyText}</p>
   <div className=" border-black border border-opacity-20 rounded-md m-2">
    {
        (inputType === "text") && <input className="outline-none p-2" type="text" placeholder={placeHolderText}/>
    }
    {
         (inputType === "select") && <select className="w-[200px] p-2 ">
            {
                (option) && option.map((item,index)=>(
                   
                    <option key={index} className="" name="t">{item}</option>
            
                ))
            }
         </select>
    }
   </div>

        </div>

    );
}

export default HouseOverViewCard