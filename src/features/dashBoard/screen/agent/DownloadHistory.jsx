import {MoveUp,MoveDown,CornerUpRight,Filter,InspectionPanel,RefreshCcw  } from 'lucide-react';


export default function DownloadHistor(){
return(
    <div className="mx-auto p-3 md:p-8 md:ml-[22%]  w-[95%] md:w-[75%] h-screen  rounded-2xl m-5 md:shadow-2xl  shadow-black">
<h3 className="font-bold text-xl">Documents</h3>
<p className="text-sm pt-4 md:w-[70%]">The Documents section is your centralized hub for storing and managing all your rental-related paperwork. From lease agreements to ID verification, this page helps you keep all essential documents organized and accessible</p>
   <div className='text-sm text-white grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 md:w-[95%] mt-4'>
    <button className='bg-senderBg py-3 w-fit px-2 md:px-4 rounded-lg flex items-center gap-2'> <MoveUp className='size-4' /> Upload Document</button>
    <button className='bg-senderBg py-3 w-fit px-2 md:px-4 rounded-lg flex items-center gap-1 md:gap-2'><MoveDown  className='size-4' /> Download Document</button>
    <button className='bg-senderBg py-3 w-fit px-4 rounded-lg flex items-center gap-2'> <CornerUpRight className='size-4'/> Share Document</button>
    <button className='bg-senderBg py-3 w-fit px-3 md:px-4 rounded-lg flex items-center gap-2'><Filter className='size-4'/> Categories </button>
    <button className='bg-senderBg py-3 w-fit px-2  md:px-4 rounded-lg flex items-center gap-2'> <RefreshCcw className='size-4'/>Change Document </button>
    <button className='bg-senderBg py-3 w-fit px-4  rounded-lg flex items-center gap-2'> <InspectionPanel className='size-4'/> Access Template  </button>
    
    </div> 
    
    
    
    
    
    </div>
)

}