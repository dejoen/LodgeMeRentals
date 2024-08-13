
import  wlIcon1 from "../../../../src/assets/wlmicon.svg"
import  wlIchatcon1 from "../../../../src/assets/wlmchaticon.svg"
import  wlIchatcon2 from "../../../../src/assets/wlmchaticon2.svg"
import  wlIImage from "../../../../src/assets/whyLodgeMeImage.svg"
 

const WhyLodgeMeContainer = () =>{

    return (
    <div className="mt-28 w-full p-10">
   <div className="w-full leading-10 font-bold size-[36px] mb-6 lg:text-center text-xl">
   Why LodgeMe Rental Service ?
   </div>
 <div className="mx-auto w-full flex flex-wrap justify-center gap-16 pt-8">
 <div className="flex flex-col gap-3 mt-4">
     <div className="flex">
        <img className=" w-[60px] h-[60px]"  src={wlIcon1}/>
        <div className="p-1">
        <p className="text-lg">Close Interaction between Landlord and Tenants</p>
        <p className="leading-[29px] text-sm">See fixed prices before you book. No hidden charges.</p>
        </div>
     </div>

     <div className="flex">
        <img className=" w-[60px] h-[60px]"  src={wlIchatcon1}/>
        <div className="p-1">
        <p className="text-lg">Breaking Long Range Location Barriers</p>
        <p className="leading-[29px] text-sm">Access to nearby houses in your location and the owner&apos;s info</p>
        </div>
     </div>

     <div className="flex">
        <img className=" w-[60px] h-[60px]"  src={wlIchatcon2}/>
        <div className="p-1">
        <p className="text-lg">Market Insights</p>
        <p className="leading-[29px] text-sm">access/view what clients are interested in/ looking for</p>
        </div>
     </div>

   </div>
   <div className="justify-end">
    <img src={wlIImage}/>
   </div>

   </div>

   
    </div>
    );
}

export default WhyLodgeMeContainer