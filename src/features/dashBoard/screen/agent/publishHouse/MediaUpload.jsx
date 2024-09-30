

const  MediaUpload = () => {

    return (
        <div className=" w-full  h-dvh  md:min-h-[85%]   mt-20  bg-white z-20 rounded-md shadow-md overflow-y-auto  pb-10">

        <p className="font-bold ms-20 mt-8">House Overview</p>
    


        <div className=" h-[75%]  flex flex-wrap justify-center overflow-y-auto">
         hhh


        </div>

<div className="w-full flex justify-end place-items-center pe-4 h-[25%] gap-5">
     <p className="bg-[#BB7655] hover:shadow-black hover:shadow-md  p-3 w-[100px] text-white text-center rounded-lg" onClick={()=>{
      //    navigate('/agent/dashboard/publish-home/aboutHouse')
     }}>Save</p>
     <p className="bg-[#F1E9E9] hover:shadow-black hover:shadow-md p-3 w-[100px] text-black text-center rounded-lg">Next</p>
</div>
       
     
      </div>
    );
}


export default MediaUpload 