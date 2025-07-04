import lodgeMeIcon from "../../../assets/lodgeMeIcon.svg";
import facebookIcon from "../../../assets/facebookIcon.svg";
import instagramIcon from "../../../assets/instagramIcon.svg";
import twitterIcon from "../../../assets/twitterIcon.svg";
import youtubeIcon from "../../../assets/youtubeIcon.svg";
import tictok from "../../../assets/tictokIcon.svg";
import playstoreIcon from "../../../assets/playstoreIcon.svg";
import appleIcon from "../../../assets/appleIcon.svg";
import { useNavigate } from "react-router-dom";

const FooterScreen = () => {
  const navigate = useNavigate();

  return (
    <footer className="mt-7 bg-footerImage bg-center bg-contain bg-no-repeat bg-fil sm:h-[1200px]  xl:h-[800px]">
      <div className="bg-blue-700 bg-opacity-45 h-[1200px]  md:h-full ">
        <div className="w-full  h-full flex flex-wrap place-items-center justify-center">
          <div
            className="place-self-center md:ms-10 w-full md:w-fit bg-gray-900 bg-opacity-35   h-[256px] flex text-white
           flex-col  justify-center place-items-center font-bold"
          >
            <img src={lodgeMeIcon} />
            <p>Connect with us on Social Media</p>

            <div className="flex gap-5 m-5">
              <img src={facebookIcon} />
              <img src={instagramIcon} />
              <img src={twitterIcon} />
              <img src={youtubeIcon} />
              <img src={tictok} />
            </div>
          </div>

          <div className="place-self-center  w-full md:w-[300px] md:ms-10 bg-gray-900 bg-opacity-35 font-bold text-white h-[256px] md:h-[400px] flex flex-col  justify-center place-items-center ">
            <p
              className="m-3 hover:underline"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });

                navigate("/copyrights");
              }}
            >
              copyrights
            </p>
            {/*<p className="m-3"  >License</p>
    <p className="m-3 hover:underline" onClick={()=>{
          window.scrollTo({top:0,behavior:"smooth"})
         navigate('/blog/one')
         
    }} >Blog</p>  
      <p className="m-3 hover:underline" onClick={()=>{
          window.scrollTo({top:0,behavior:"smooth"})
         navigate('/about')
           }}>About</p> 
    
     */}
            <p
              className="m-3 hover:underline"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });

                navigate("/terms");
              }}
            >
              Terms & Conditions
            </p>
          </div>

          <div className="place-self-center  w-full md:w-[300px] md:ms-10 bg-gray-900 bg-opacity-40 font-bold text-white h-fit md:h-[400px] flex flex-col  justify-center place-items-center ">
            {/*}
<p  className="m-3 hover:underline" onClick={()=>{
          window.scrollTo({top:0,behavior:"smooth"})

         navigate('/resources')
         
         }}>Resources</p> 

 

<p className="m-3 hover:underline" onClick={()=>{
          window.scrollTo({top:0,behavior:"smooth"})

         navigate('/faq')
         
         }} >FAQS</p>
           <p className="m-3" >Support</p> */}

            <p className="m-3 w-[150px] text-center bg-orange-400 p-4 rounded-2xl">Login</p>
            <p className="cursor-grab text-center m-3 w-[150px] text-black bg-white p-4 rounded-2xl">Register</p>
          </div>

          <div className="place-self-center  w-full md:w-[300px] md:ms-10 bg-gray-900 bg-opacity-40 font-bold text-white h-[256px] md:h-[400px] flex flex-col  justify-center place-items-center md:pt-36">
            <p className="m-3">Get our mobile app</p>
            <div className="flex gap-3">
              <img src={appleIcon} />
              <img src={playstoreIcon} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterScreen;
