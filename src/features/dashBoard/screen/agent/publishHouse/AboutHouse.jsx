import { useNavigate } from "react-router-dom";


const AboutHouse = () => {
    const navigate = useNavigate()

    return (
        <div className=" w-full  h-dvh  md:min-h-[85%]  ps-14  mt-20  bg-white z-20 rounded-md shadow-md overflow-y-auto overflow-x-hidden pb-10">

        <p className="font-bold mt-8">About this house</p>
        <p className="text-justify p-2 text-sm">Provide a brief description of your house, including key features like the number of bedrooms, bathrooms, special amenities, and any unique selling points. This helps potential renters understand what makes your property stand out. Tips: Highlight features like a spacious yard, modern kitchen, nearby amenities, or recent renovations to attract more interest.</p>
    
       <div className="w-full  h-[350px] border-2 bg-opacity-50  rounded-md mt-2 me-20 " onClick={(e)=>{
          e.currentTarget.childNodes[0].focus()
       }}> 
         <input type="text" className="h-fit w-full outline-none" />
       </div>


      

<div className="w-full flex justify-end place-items-center h-[25%] gap-5 pe-4 ">
     <p className="bg-[#BB7655] hover:shadow-black hover:shadow-md  p-3 w-[100px] text-white text-center rounded-lg">Save</p>
     <p className="bg-[#F1E9E9] hover:shadow-black hover:shadow-md p-3 w-[100px] text-black text-center rounded-lg" onClick={()=>{
            navigate('/agent/dashboard/publish-home/houseFeatures')
         }} >Next</p>
</div>
       
     
      </div>
    );
}

export default AboutHouse