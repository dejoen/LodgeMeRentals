import { House,RefreshCcw ,UsersRound,  Handshake,History,ShieldQuestion } from 'lucide-react';


export default function RentalHistor(){
return(
    <div className="mx-auto p-3 md:p-8 md:ml-[22%]  w-[95%] md:w-[75%] h-screen  rounded-2xl m-5 md:shadow-2xl  shadow-black">
<h3 className="font-bold text-xl">Rental History</h3>
<p className="text-sm pt-4 md:w-[70%]">Your Rental History is a key component of managing your rental experience and building trust with future landlords. It provides a detailed record of your past rental properties, payment history, and references from previous landlords.</p>
   <div className='text-sm text-white grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 md:w-[90%] mt-4'>
    <button className='bg-senderBg py-3 w-fit px-4 rounded-lg flex items-center gap-2'> <House className='size-4' /> House Posted</button>
    <button className='bg-senderBg py-3 w-fit px-4 rounded-lg flex items-center gap-2'><History className='size-4' /> Payment History</button>
    <button className='bg-senderBg py-3 w-fit px-4 rounded-lg flex items-center gap-2'> <UsersRound className='size-4'/> Landlord Reviews</button>
    <button className='bg-senderBg py-3 w-fit px-3 md:px-4 rounded-lg flex items-center gap-2'><Handshake className='size-4'/> Rental Agreements </button>
    <button className='bg-senderBg py-3 w-fit px-2  md:px-4 rounded-lg flex items-center gap-2'> <RefreshCcw className='size-4'/> Dispute resolutions </button>
    <button className='bg-senderBg py-3 w-fit px-4  rounded-lg flex items-center gap-2'> <ShieldQuestion className='size-4'/> Complaints  </button>
    
    </div> 
    
    
    
    
    
    </div>
)

}