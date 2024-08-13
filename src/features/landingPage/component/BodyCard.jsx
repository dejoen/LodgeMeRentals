/* eslint-disable react/prop-types */

const BodyCard = (props) =>{
  
    return (
 <div className="h-[300px] w-[300px] m-3">
   <img src={props.imageUrl} />
   <div className="bg-[#FFC839] h-20 flex place-items-center justify-items-center   gap-x-2 
   " >
     <p className="bg-white rounded-2xl m-2 p-4 hover:text-[#FFC839]">&gt;</p>
     <p>
   {
    props.text
   }
   </p>

   </div>
 </div>

    );
  
}


export default BodyCard