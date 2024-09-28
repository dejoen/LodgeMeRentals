import { useNavigate } from "react-router-dom";

const HouseFeatures = () => {
 const navigate = useNavigate()
    return (
     
        <div className=" font-nunito w-full  h-fit  md:min-h-[85%]   ps-14  mt-20  bg-white z-20 rounded-md shadow-md overflow-y-auto overflow-x-hidden pb-10">

        <p className="font-bold mt-8">House Features</p>
        <p className="text-justify p-2 text-sm">Highlight the key features of your property, such as the number of bedrooms, bathrooms, parking spaces, or amenities like a pool, garden, or balcony. This helps renters understand what your house offers at a glance.</p>
    
       <div className="w-full  h-[350px]  flex flex-col md:flex-row  mt-4">
<div className=" w-full md:w-[70%] flex flex-col gap-4 ">
 <div className="w-full  md:w-[50%] flex gap-3">
    <p>Total number of bedroom</p>
    <input type="text" className=" w-[40px] border border-50 rounded-md border-black outline-none" />
 </div>


 
 <div className="w-full h-fit  md:w-[66%] flex gap-9">
    <p >Total number of toilets</p>
    <input type="text" className=" w-[40px] border border-50 rounded-md border-black outline-none" />
 </div>

 <div className="flex flex-col gap-2">

 <div className=" w-full md:w-[50%] flex gap-3 ">
    <p className="w-[68%]" >Fennced</p>
    <input type="text" className=" w-[30px] border border-50 rounded-md border-black outline-none " />
 </div>

 <div className="w-full md:w-[50%]  flex gap-3 ">
    <p className="w-[68%]" >Running Water</p>
    <input type="text" className=" w-[30px] border border-50 rounded-md border-black outline-none " />
 </div>

 <div className="w-full md:w-[50%]  flex gap-3 ">
    <p className="w-[68%]" >Prepaid Meter</p>
    <input type="text" className=" w-[30px] border border-50 rounded-md border-black outline-none " />
 </div>

 <div className="w-full md:w-[50%]  flex gap-3 ">
    <p className="w-[68%]" >Smart home features</p>
    <input type="text" className=" w-[30px] border border-50 rounded-md border-black outline-none " />
 </div>

 <div className="w-full md:w-[50%] flex gap-3 ">
    <p className="w-[68%]" >Laundry room</p>
    <input type="text" className=" w-[30px] border border-50 rounded-md border-black outline-none " />
 </div>

 <div className="w-full md:w-[50%]  flex gap-3 ">
    <p className="w-[68%]" >Air Conditioning</p>
    <input type="text" className=" w-[30px] border border-50 rounded-md border-black outline-none " />
 </div>

 <div className="w-full md:w-[50%] flex gap-3 ">
    <p className="w-[68%]" >Parking space</p>
    <input type="text" className=" w-[30px] border border-50 rounded-md border-black outline-none " />
 </div>

 <div className="w-full md:w-[50%]  flex gap-3 ">
    <p className="w-[68%]" >Garbage disposal service</p>
    <input type="text" className=" w-[30px] border border-50 rounded-md border-black outline-none " />
 </div>

 <div className="w-full md:w-[50%]  flex gap-3 ">
    <p className="w-[68%]" >Adequate lighting</p>
    <input type="text" className=" w-[30px] border border-50 rounded-md border-black outline-none " />
 </div>

 <div className="w-full md:w-[50%] flex gap-3 ">
    <p className="w-[68%]" >Storage space</p>
    <input type="text" className=" w-[30px] border border-50 rounded-md border-black outline-none " />
 </div>


 </div>




</div>



 
<div className=" w-full md:w-[70%] flex flex-col gap-4 ">
<div className="flex flex-col gap-2">

<div className="w-full  md:w-[80%] flex gap-3 ">
   <p className="w-[68%]" >Pet-friendly </p>
   <input type="text" className=" w-[30px] border border-50 rounded-md border-black outline-none " />
</div>

<div className="w-full  md:w-[80%] flex gap-3 ">
   <p className="w-[68%]" >Emergency exits</p>
   <input type="text" className=" w-[30px] border border-50 rounded-md border-black outline-none " />
</div>

<div className="w-full  md:w-[80%] flex gap-3 ">
   <p className="w-[68%]" >Secure windows and doors</p>
   <input type="text" className=" w-[30px] border border-50 rounded-md border-black outline-none " />
</div>

<div className="w-full  md:w-[80%] flex gap-3 ">
   <p className="w-[68%]" >Security systems</p>
   <input type="text" className=" w-[30px] border border-50 rounded-md border-black outline-none " />
</div>

<div className="w-full  md:w-[80%] flex gap-3 ">
   <p className="w-[68%]" >Backyard, garden, or balcony</p>
   <input type="text" className=" w-[30px] border border-50 rounded-md border-black outline-none " />
</div>

<div className="w-full  md:w-[80%] flex gap-3 ">
   <p className="w-[68%]" >Swimming pool gym</p>
   <input type="text" className=" w-[30px] border border-50 rounded-md border-black outline-none " />
</div>

<div className="w-full  md:w-[80%] flex gap-3 ">
   <p className="w-[68%]" >Gym</p>
   <input type="text" className=" w-[30px] border border-50 rounded-md border-black outline-none " />
</div>

<div className="w-full  md:w-[80%] flex gap-3 ">
   <p className="w-[68%]" >24/7 maintenance support</p>
   <input type="text" className=" w-[30px] border border-50 rounded-md border-black outline-none " />
</div>

<div className="w-full  md:w-[80%] flex gap-3 ">
   <p className="w-[68%]" >Safe play area for children</p>
   <input type="text" className=" w-[30px] border border-50 rounded-md border-black outline-none " />
</div>



</div>
</div>
      
       </div>


      
  <div className=" absolute md:relative w-full flex justify-center md:justify-end place-items-center h-[25%] gap-5 pe-4 ">
     <p className="bg-[#BB7655] hover:shadow-black hover:shadow-md  p-3 w-[100px] text-white text-center rounded-lg">Save</p>
     <p className="bg-[#F1E9E9] hover:shadow-black hover:shadow-md p-3 w-[100px] text-black text-center rounded-lg" onClick={()=>{
            navigate('/agent/dashboard/publish-home/houseFeatures')
         }} >Next</p>
</div>
     
       
     
      </div>

    );
}

export default HouseFeatures