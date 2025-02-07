export default function ApplicationHistor(){
    return(
        <div className="mx-auto p-3 md:ml-[22%] md:p-8  w-[95%] md:w-[75%] h-fit  rounded-2xl m-5 md:shadow-2xl  shadow-black">
    <h3 className="font-bold text-xl">Application</h3>
    <p className="text-sm pt-4 md:w-[70%]">Welcome to Your Next Big Step in Homeownership or Renting! We are excited to help you find your dream home or ideal rental space. This application page is your gateway to accessing tailored property options, connecting with trusted landlords, and starting a seamless rental journey. Let us make your house hunt effortless and enjoyable!</p>
      <div className=" flex justify-center mt-8 items-center">
        <div className="w-40 h-1 bg-black"></div>
        <div className="w-6 h-6 bg-black rounded-full"></div>
        <div className="w-40 h-1 bg-black"></div>
        <div className="w-6 h-6 bg-black rounded-full"></div>
        <div className="w-40 h-1 bg-black"></div>
        <div className="w-6 h-6 bg-black rounded-full"></div>
        <div className="w-40 h-1 bg-black"></div>
        <div className="w-6 h-6 bg-black rounded-full"></div>
        <div className="w-40 h-1 bg-black"></div>
   
        </div>       
    <p className="text-sm pt-4 md:w-[70%] font-bold">Ready to apply for your perfect property? Fill out the application form with your details to kickstart the process. We’ve designed this page to be quick, simple, and secure, ensuring your information is protected while we match you with the best available homes.</p>
  
    <h3 className="font-bold text-lg pt-5">Personal Information</h3>
       <form className="mt-2 flex flex-col gap-4 md:w-[70%]">
        <div className="flex md:items-center gap-3 md:gap-12 md:flex-row flex-col">
<div className="flex flex-col gap-2">
    <label className="text-md font-semibold">First Name</label>
    <input type="text" name='first-name' className="outline-none border border-gray-400 py-1 px-4 rounded-lg md:w-72" />
</div>

<div className="flex flex-col gap-2">
    <label className="text-md font-semibold">Last Name</label>
    <input type="text" name='last-name' className="outline-none border border-gray-400 py-1 px-4 rounded-lg md:w-72" />
</div>
        </div>
        
        <div className="flex flex-col gap-2">
    <label className="text-md font-semibold">Email Address</label>
    <input type="email" name='email' className="outline-none border border-gray-400 py-1 px-4 rounded-lg" />
</div>    
        
<div className="flex md:items-center gap-3 md:gap-12 md:flex-row flex-col">
<div className="flex flex-col gap-2">
    <label className="text-md font-semibold">Phone Number</label>
    <input type="text" name='number' className="outline-none border border-gray-400 py-1 px-4 rounded-lg md:w-72" />
</div>

<div className="flex flex-col gap-2">
    <label className="text-md font-semibold">Date Of Birth</label>
    <input type="text" name='date-of-birth' className="outline-none border border-gray-400 py-1 px-4 rounded-lg md:w-72" />
</div>
        </div>   

        <h3 className="font-bold text-lg ">Rental Detials</h3>
   
        <div className="flex flex-col gap-2 ">
    <label className="text-md font-semibold">Property Address</label>
    <input type="text" name='address' className="outline-none border border-gray-400 py-1 px-4 rounded-lg" />
</div>  
<div className="flex md:items-center gap-3 md:gap-12 md:flex-row flex-col">
<div className="flex flex-col gap-2">
    <label className="text-md font-semibold">Start Date</label>
    <input type="text" name='date' className="outline-none border border-gray-400 py-1 px-4 rounded-lg md:w-72" />
</div>

<div className="flex flex-col gap-2">
    <label className="text-md font-semibold">Duration</label>
    <input type="text" name='duration' className="outline-none border border-gray-400 py-1 px-4 rounded-lg md:w-72" />
</div>
        </div>
        
        <h3 className="font-bold text-lg ">Payment Information</h3>
       
        <div className="flex md:items-center gap-3 md:gap-12 md:flex-row flex-col">
<div className="flex flex-col gap-2">
    <label className="text-md font-semibold">Transaction ID</label>
    <input type="text" name='id' className="outline-none border border-gray-400 py-1 px-4 rounded-lg md:w-72" />
</div>

<div className="flex flex-col gap-2">
    <label className="text-md font-semibold">Payment Date</label>
    <input type="text" name='date' className="outline-none border border-gray-400 py-1 px-4 rounded-lg md:w-72" />
</div>
        </div>

        <div className="flex flex-col gap-2 mt-4">
    <label className="text-md font-semibold">Upload Reciept</label>
    <input type="file" name='file' className="outline-none border border-gray-400 py-1 px-4 rounded-lg" />
</div>
         
        </form> 
       <div className="flex justify-end"> <button className="font-bold text-md pt-10"> Next Page</button>
       </div>

















        </div>
    )
    
    }