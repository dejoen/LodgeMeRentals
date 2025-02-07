import { CircleUserRound, Paperclip,   } from 'lucide-react';
const  MessagesBodyContainer = () => {
    return (
    <div className="mx-auto md:ml-[22%] p-3 md:p-8  mt-[90px] md:w-[75%] h-fit  rounded-2xl m-5 md:shadow-2xl shadow-black">
<div className="flex  justify-between">
   <div className='flex flex-col items-center gap-1'> 
    <h3 className='font-bold text-xl'>Inbox</h3>
    <CircleUserRound  className='size-14'/>
    </div> 
{/*<div className='text-lg flex items-cente gap-5 text-gray-500'>
    <p >Edit </p>
    <p>Filter </p>
</div>
*/}

</div>
<div className='bg-messageBg p-2 md:p-3 rounded-lg mt-4'>
<div className='flex items-center justify-between gap-2 bg-white p-2 rounded md:flex-row flex-col md:px-5'>
<CircleUserRound  className='size-14'/>
<div className='flex items-center md:gap-4 gap-4'>
<div className='flex items-center flex-col'>
    <h3 className='md:text-xl font-bold '>Ux Maven</h3>
    <p className='text-green-600 '>Online</p>
</div>
{ /*  <button className='flex items-center gap-1 md:gap-3 border rounded-lg px-3 py-2 border-black text-sm '> Set Appointment  <CirclePlus className='size-4'/></button>  
  <Search />
  <SquareMenu /> */}
</div>

</div>
<div className='bg-white flex justify-center mx-auto items-center mt-4 md:mt-6 px-2 py-1 w-fit rounded-full'>
<p className='text-sm  text-center'>TODAY</p>
  
</div>
<div className='bg-white flex flex-col mt-4 px-4 py-1 w-[80%] md:w-[35%] rounded-lg'>
<p className='font-semibold text-right'>How much is he house rent ?</p>
<p className='text-sm'>7:00 Pm</p>
</div>

<div className='bg-senderBg text-white flex flex-col justify-end right-0 mt-4 px-4 py-1 w-[80%] md:w-[35%] rounded-lg ml-auto'>
  <p className='font-semibold'>Yearly rent or monthly rent ?</p>
  <p className='text-sm text-right'>7:02 Pm</p>
</div>

<div className='bg-white px-3 py-2 rounded-lg mt-[20%] border border-gray-800'>
    <input  type='text' placeholder='Send a message' className=' outline-none  bg-transparent'/>
   <div className='flex items-center gap-3 justify-end'>
   <Paperclip className='size-5'/>
   <button className='bg-senderBg px-5 py-1 text-white rounded-lg  '>Send</button>
   </div>
</div>



</div>


    </div>

    );
}


export default MessagesBodyContainer