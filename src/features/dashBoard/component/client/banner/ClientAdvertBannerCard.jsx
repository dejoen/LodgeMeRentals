 import promoImage from '../../../../../assets/promoimageone.svg'

const ClientAdvertBannerCard = () =>{
    return (
        <div className="w-[350px]  h-[200px] bg-[#FD995B80] rounded-2xl flex flex-row   place-items-center font-nunito gap-1 p-2">
       <div className="w-[50%] text-center">
     <p className="font-bold">Rent A House</p>
     <p>Browse for listed available houses available for rent nearby you</p>
       </div>
       <div className=" w-[50%] h-fit border border-blue-600 rounded-2xl  ">
         <img className='relative w-full  ' src={promoImage} />
       </div>
        </div>
     
    );
}


export default ClientAdvertBannerCard