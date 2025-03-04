import LodgeMeIcon from "../../../../../assets/lodgeMeIcon.svg";
import { Copy } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from 'lucide-react';
export default function ClientReferHero(){
  const navigate = useNavigate();
    return( 
        <div className=" ">
           <div className="md:ml-12 md:pt-8 pt-5 ml-6 " onClick={()=>{
            navigate("/client/dashboard")
          }}>
   <ArrowLeft />
   </div>
         <div className="flex items-center gap-6  md:gap-12 w-[90%] mx-auto">
         <img className="w-[100px] mt-8" src={LodgeMeIcon} />
      <div className="pt-7">
        <h3 className="text-2xl font-bold  ">Welcome User!</h3>
        <p className="text-sm">What would you like to see today ?</p>
      </div>
            
            </div>  
            <div className="flex justify-between items-center w-[90%] mx-auto md:flex-row flex-col">
                <div className="flex flex-col md:gap-10 gap-6 md:mt-0 mt-12">
                    <h5 className="bg-refer text-white w-fit px-3 py-1 rounded-full">LodgeMe Referral Progam</h5>
               <h3 className=" text-refer font-bold text-5xl md:w-[70%]">Refer a friend
               Get paid.</h3>

                </div>
                <img src="/clentrefer.png" className="md:w-[40%]" />
            </div>
            <p className="w-[90%] mx-auto">Invite your friends to join our rental community and enjoy exclusive benefits when they sign up and secure a property. Our referral program is simple</p>
<div className="bg-referClientBg  py-12 mt-10">
<div className="flex flex-col gap-1 justify-center items-center">
<h5 className=" border-gray-800 border w-fit px-3 py-1 rounded-full">LodgeMe Referral Progam</h5>        
    <h3 className="text-xl font-bold ">How It Works</h3>
</div>
<div className="flex w-[80%] mx-auto gap-6 md:gap-8 mt-8 items-center justify-center md:flex-row flex-col">
<div className="bg-white py-3 px-3 gap-2 rounded-xl flex flex-col items-center justify-center">
   <p className=" rounded-full shadow-2xl bg-blue-50 py-1 px-2 ">01</p> 
   <h3 className="font-semibold text-xl">Share Your Unique Link</h3>
   <p className="text-sm text-center">Use the provided link or social sharing buttons to invite friends and family.</p>
</div>
<div className="bg-white py-3 px-3 gap-1 rounded-xl flex flex-col items-center justify-center">
   <p className=" rounded-full shadow-2xl bg-blue-50 py-1 px-2">02</p> 
   <h3 className="font-semibold text-xl">Get Rewarded</h3>
   <p className="text-sm text-center  ">For every successful referral, receive credits or discounts toward your rent.</p>
</div>
<div className="bg-white py-3 px-3 gap-1 rounded-xl flex flex-col items-center justify-center">
   <p className=" rounded-full shadow-2xl bg-blue-50 py-1 px-2">03</p> 
   <h3 className="font-semibold text-xl">Track Your Success</h3>
   <p className="text-sm text-center">Monitor your referral progress in your dashboard with clear, real-time updates.</p>
</div>


</div>
<div className="flex justify-center items-center gap-4 md:gap-8 mt-4 w-[90%] mx-auto">
<h3 className="bg-white w-fit px-3 py-1 rounded-full text-sm">lodgeme.com/ref/oogjhUUJH</h3>
<p className="bg-refer flex items-center gap-2 text-white text-center w-fit px-3 py-1 rounded-full">Copy Link <Copy className="size-4"/></p>
</div>

</div>

<div className="py-12 w-[90%] mx-auto">
<h3 className="font-semibold text-2xl  ">Referral Dashboard and Tracking</h3>
<div className="flex  items-center gap-6 md:gap-12 mt-8 md:flex-row flex-col">
      <svg width="200" height="200" viewBox="0 0 36 36" className="rotate-[-90deg]">
        {/* Background Circle */}
        <circle
          cx="18"
          cy="18"
          r="15.9155"
          fill="none"
          stroke="#ddd"
          strokeWidth="3"
        />
        {/* Red Arc */}
        <circle
          cx="18"
          cy="18"
          r="15.9155"
          fill="none"
          stroke="red"
          strokeWidth="3"
          strokeDasharray="25 75"
          strokeDashoffset="0"
        />
        {/* Blue Arc */}
        <circle
          cx="18"
          cy="18"
          r="15.9155"
          fill="none"
          stroke="blue"
          strokeWidth="3"
          strokeDasharray="40 60"
          strokeDashoffset="-25"
        />
        {/* Green Arc */}
        <circle
          cx="18"
          cy="18"
          r="15.9155"
          fill="none"
          stroke="green"
          strokeWidth="3"
          strokeDasharray="35 65"
          strokeDashoffset="-65"
        />
        {/* Centered Text */}
        <text
          x="18"
          y="16"
          fontSize="4"
          fontWeight="bold"
          textAnchor="middle"
          fill="black"
          transform="rotate(90 18 18)"  // Rotates text back to normal
        >
          22
        </text>
        <text
          x="18"
          y="22"
          fontSize="3"
          fontWeight="bold"
          textAnchor="middle"
          fill="black"
          transform="rotate(90 18 18)"  // Rotates text back to normal
        >
         Total Referrals
        </text>
      </svg>
<div className="flex flex-col gap-3 ">
<div className="flex items-center gap-2">
    <div className="bg-blue-600 w-6 h-6 rounded-full"></div>
    <p className="text-sm">Number of clicks : 44</p>
</div>
<div className="flex items-center gap-2">
    <div className="bg-green-700 w-6 h-6 rounded-full"></div>
    <p className="text-sm">Users who completed rental process : 12</p>
</div>
<div className="flex items-center gap-2">
    <div className="bg-red-500 w-6 h-6 rounded-full"></div>
    <p className="text-sm">Users with pending rental process: 10</p>
</div>



</div>

    </div>

<div className="flex w-[90%] mx-auto md:justify-between mt-8 md:flex-row flex-col gap-4">
<div className="flex flex-col  ">
    <h4 className="font-semibold text-lg">Amount Earned</h4>
    <h3 className="font-extrabold text-xl">#200</h3>
</div>
<div className="flex flex-col  ">
    <h4 className="font-semibold text-lg">Total Amount Paid Out</h4>
    <h3 className="font-extrabold text-xl">#200,000</h3>
</div>
<button className="bg-green-700 w-fit px-4 h-11 text-sm text-white rounded-full">Withdraw Available Earnings</button>

</div>
<p className="text-sm w-[90%] py-4 mt-4 mx-auto">All registered  referrals will appear below table, Once a person have a transaction, it will appear as pending ststus.</p>
<div className="w-[90%] mx-auto  flex flex-col gap-4">
<div className="text-sm flex items-center justify-between  md:flex-row flex-wrap gap-3">
<img src="/refer1.png" className="w-8"/>
<h3 className="font-semibold">Faruq Olanrewaju</h3>
<p>Feb 20</p>

<div >
  <span id="ProgressLabel" className=""></span>

  <span
    role="progressbar"
    aria-labelledby="ProgressLabel"
    aria-valuenow="75"
    className="block rounded-full bg-gray-200 w-40"
  >
    <span className="block h-2 rounded-full bg-green-700 w-[70%]" ></span>
  </span>
</div>
<h3 className="font-semibold">Pending</h3>
<h3 className="font-semibold">#200.00</h3>
</div>

<div className="text-sm flex items-center justify-between  md:flex-row flex-wrap gap-3">
<img src="/refer3.png" className="w-8"/>
<h3 className="font-semibold">Adebanjo Olatunji</h3>
<p>Feb 21</p>

<div >
  <span id="ProgressLabel" className=""></span>

  <span
    role="progressbar"
    aria-labelledby="ProgressLabel"
    aria-valuenow="75"
    className="block rounded-full bg-gray-200 w-40"
  >
    <span className="block h-2 rounded-full bg-green-700 w-[50%]" ></span>
  </span>
</div>
<h3 className="font-semibold">Pending</h3>
<h3 className="font-semibold">#150.00</h3>
</div>

<div className="text-sm flex items-center justify-between  md:flex-row flex-wrap gap-3">
<img src="/refer2.png" className="w-8"/>
<h3 className="font-semibold">Wasiu Adeyanju</h3>
<p>Feb 23</p>

<div >
  <span id="ProgressLabel" className=""></span>

  <span
    role="progressbar"
    aria-labelledby="ProgressLabel"
    aria-valuenow="75"
    className="block rounded-full bg-gray-200 w-40"
  >
    <span className="block h-2 rounded-full bg-green-700 w-[30%]" ></span>
  </span>
</div>
<h3 className="font-semibold">Pending</h3>
<h3 className="font-semibold">#100.00</h3>
</div>




</div>

<div className="mt-5 w-[90%] mx-auto">
    <h3 className="text-2xl font-semibold py-4">Payment History</h3>
    
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 text-sm">
        <thead className="bg-gray-200 text-gray-500">
          <tr>
            <th className="px-4 py-2 border">DATE</th>
            <th className="px-4 py-2 border">BANK NAME</th>
            <th className="px-4 py-2 border">STATUS</th>
            <th className="px-4 py-2 border">AMOUNT</th>
           
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white">
            <td className="px-4 py-2 border">18/02/2025</td>
            <td className="px-4 py-2 border">UBA</td>
            <td className="px-4 py-2 border">PAID</td>
            <td className="px-4 py-2 border">#20,000</td>
           
          </tr>
          <tr className="bg-gray-100">
            <td className="px-4 py-2 border">18/02/20252</td>
            <td className="px-4 py-2 border">GTB</td>
            <td className="px-4 py-2 border">PAID</td>
            <td className="px-4 py-2 border">#20,000</td>
            
          </tr>
          
        </tbody>
      </table>
    </div>


</div>

</div>
        </div>
    )
}