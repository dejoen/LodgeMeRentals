import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css";
import { responsive } from "../../../../utils/CouroselDisplayHome";
import promoImage from '../../../../assets/promoimageone.svg'
const ClientHouseCard = () => {

    return (
        <div className="shadow shadow-black w-[350px] h-[390px]  bg-[#FFC8391A] rounded-2xl flex flex-col justify-center">
            <div className="bg-[#D9D9D9] w-[290px] h-[180px] m-4 rounded-3xl">
             
             <Carousel className="w-fill h-full rounded-md " responsive={responsive} >
               <img className="" src={promoImage} />
               <img className="" src={promoImage} />
               <img className="" src={promoImage} />
             </Carousel>
            </div>
            <div className="ms-3">
             <p className="font-bold">House A</p>
             <p className="font-bold text-sm">For Rent</p>
             <p className="text-sm">Address:<span>Ojo street hhhch</span></p>
             <p className="text-sm">Location:<span>Ekpoma Edo state</span></p>
            </div>
            <div className="w-[280px] bg-[#F9BA8F] p-2 text-center rounded-2xl m-1 mb-3 place-self-center hover:bg-opacity-55 cursor-pointer">
                <p>Contact Agent</p>
            </div>
        </div>
    )
}


export default ClientHouseCard