import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsive } from "../../../../../utils/CarouselDisplay";
import  ClientAdvertBannerCard from '../../../component/client/banner/ClientAdvertBannerCard'

const ClientAdvertBanner = () =>{

    return (
<div className=" mx-auto h-fit  w-[800px]   md:w-[800px] flex  ">
    <div className="mx-auto w-full  mt-5">
    <Carousel responsive={responsive} autoPlay={true}   rewindWithAnimation={true} infinite={true} partialVisbile={true} transitionDuration={1000} arrows={false} className=" " ssr={true}>
  <ClientAdvertBannerCard     onClick={()=>{
  
  }}/>
  <ClientAdvertBannerCard  onClick={()=>{
  
}}/>
<ClientAdvertBannerCard  onClick={()=>{
  
}}/>
  
    </Carousel>
    </div>
    
</div>
    );
}

export default ClientAdvertBanner