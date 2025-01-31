import { CircleCheck, CircleX  } from 'lucide-react';


export default function AppointmentContainer(){
return(

    <div className="mx-auto p-3 md:p-8 mt-[90px] w-[95%] md:w-[95%] h-fit  rounded-2xl m-5 md:shadow-2xl shadow-black">
<p className="text-lg">Manage and track your client’s rental appointments</p>

<div className='text-sm flex md:items-center md:flex-row flex-col gap-4 md:gap-6 mt-10'>
   <div className='bg-green-600 text-white w-fit py-2 px-4 rounded-xl'> <button className='flex items-center gap-2 '> Active Appointments  <CircleCheck  className='size-4'/></button>
   </div>
   <div className='bg-red-600 text-white w-fit py-2 px-4 rounded-xl'><button className='flex items-center gap-2 '>Canceled Appointments  <CircleX  className='size-4'/></button> </div>
    
</div>

<div className='mt-10 flex items-center gap-8 md:gap-20'>
      <div className='border w-fit border-black rounded-xl py-1 px-4'>
      <input
          type="date"
          id="appointment-date"
          name="appointment-date"
          className=" block w-full  py-1 text-base border-gray-300 focus:outline-none focus:ring-0 focus:border-0 sm:text-sm rounded-md"
        /></div> 
   <div className='text-sm flex items-center gap-4'>
    <button className='bg-senderBg text-white rounded-full text-center py-1 px-4'> Day</button>
    <button className='bg-gray-100 rounded-full py-1 px-4'>Week</button>
    </div>    


      </div>

<div className='flex items-center gap-3 justify-between md:w-[80%] mx-auto mt-6'>
<button className='font-bold text-sm md:text-lg'>MONDAY </button>
<button className='text-sm md:text-lg'>TUESDAY </button>
<button className='text-sm md:text-lg'>WENESDAY </button>
<button className='text-sm md:text-lg'>THURSDAY </button>
<button className='text-sm md:text-lg'>FRIDAY </button>


</div>

<div className='flex items-center gap-8 md:gap-20 mt-5 md:mt-8'>
<h3 className='font-bold text-lg md:text-xl'>Available Bookings  </h3>
<p className='text-sm text-gray-500'>Morning</p>


</div>
 <div className=' grid text-sm md:grid-cols-2 grid-cols-1 mx-auto w-[90%] md:w-[100%] lg:grid-cols-3 mt-5 gap-4'>
<div className='flex justify-center bg-morningBg w-fit py-6 px-6 rounded-lg  items-center gap-5'>
<img src='/avatar.png'  className='size-14  border-black rounded-full border-2'/>
    <div>
      <h3 className='font-bold text-lg'>Abideen Yinusa</h3> 
      <p className='flex items-center justify-between gap-8'><span>12PM-1PM</span> <span className='text-sm'>Osogbo</span></p> 
    </div>
</div>
<div className='flex justify-center bg-morningBg w-fit py-6 px-6 rounded-lg  items-center gap-5'>
<img src='/avatar.png'  className='size-14  border-black rounded-full border-2'/>
    <div>
      <h3 className='font-bold text-lg'>Abideen Yinusa</h3> 
      <p className='flex items-center justify-between gap-8'><span>12PM-1PM</span> <span className='text-sm'>Osogbo</span></p> 
    </div>
</div>
<div className='flex justify-center bg-morningBg w-fit py-6 px-6 rounded-lg  items-center gap-5'>
<img src='/avatar.png'  className='size-14  border-black rounded-full border-2'/>
    <div>
      <h3 className='font-bold text-lg'>Abideen Yinusa</h3> 
      <p className='flex items-center justify-between gap-8'><span>12PM-1PM</span> <span className='text-sm'>Osogbo</span></p> 
    </div>
</div>
<div className='flex justify-center bg-morningBg w-fit py-6 px-6 rounded-lg  items-center gap-5'>
<img src='/avatar.png'  className='size-14  border-black rounded-full border-2'/>
    <div>
      <h3 className='font-bold text-lg'>Abideen Yinusa</h3> 
      <p className='flex items-center justify-between gap-8'><span>12PM-1PM</span> <span className='text-sm'>Osogbo</span></p> 
    </div>
</div>




 </div>








 <div className='flex items-center  gap-8 md:gap-20 mt-5 md:mt-8'>
<h3 className='font-bold text-lg md:text-xl'>Available Bookings  </h3>
<p className='text-sm text-gray-500'>Afternoon</p>


</div>

 <div className=' grid md:grid-cols-2 text-sm grid-cols-1 mx-auto w-[90%] md:w-[100%] lg:grid-cols-3 mt-5 gap-4'>
<div className='flex justify-center bg-afternooBg w-fit py-6 px-6 rounded-lg  items-center gap-5'>
<img src='/avatar.png'  className='size-14  border-black rounded-full border-2'/>
    <div>
      <h3 className='font-bold text-lg'>Abideen Yinusa</h3> 
      <p className='flex items-center justify-between gap-8'><span>12PM-1PM</span> <span className='text-sm'>Osogbo</span></p> 
    </div>
</div>
<div className='flex justify-center bg-afternooBg w-fit py-6 px-6 rounded-lg  items-center gap-5'>
<img src='/avatar.png'  className='size-14  border-black rounded-full border-2'/>
    <div>
      <h3 className='font-bold text-lg'>Abideen Yinusa</h3> 
      <p className='flex items-center justify-between gap-8'><span>12PM-1PM</span> <span className='text-sm'>Osogbo</span></p> 
    </div>
</div>

<div className='flex justify-center bg-afternooBg w-fit py-6 px-6 rounded-lg  items-center gap-5'>
<img src='/avatar.png'  className='size-14  border-black rounded-full border-2'/>
    <div>
      <h3 className='font-bold text-lg'>Abideen Yinusa</h3> 
      <p className='flex items-center justify-between gap-8'><span>12PM-1PM</span> <span className='text-sm'>Osogbo</span></p> 
    </div>
</div>

<div className='flex justify-center bg-afternooBg w-fit py-6 px-6 rounded-lg  items-center gap-5'>
<img src='/avatar.png'  className='size-14  border-black rounded-full border-2'/>
    <div>
      <h3 className='font-bold text-lg'>Abideen Yinusa</h3> 
      <p className='flex items-center justify-between gap-8 '><span className=''>12PM-1PM</span> <span className='text-sm'>Osogbo</span></p> 
    </div>
</div>





 </div>


 <div className='flex items-center  gap-8 md:gap-20 mt-5 md:mt-8'>
<h3 className='font-bold text-lg md:text-xl'>Late Bookings  </h3>


</div>
<div className='flex justify-center mt-5 bg-otherBg w-fit py-6 px-6 rounded-lg  items-center gap-5'>
<img src='/avatar.png'  className='size-14  border-black rounded-full border-2'/>
    <div>
      <h3 className='font-bold text-lg'>Abideen Yinusa</h3> 
      <p className='flex items-center justify-between gap-8'><span>12PM-1PM</span> <span className='text-sm'>Osogbo</span></p> 
    </div>
</div>
    </div>
)


}
