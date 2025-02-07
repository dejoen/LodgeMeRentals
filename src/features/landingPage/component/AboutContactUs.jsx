import facebookIcon  from '../../../assets/facebookIcon.svg'
import instagramIcon  from '../../../assets/instagramIcon.svg'
import twitterIcon  from '../../../assets/twitterIcon.svg'
import youtubeIcon  from '../../../assets/youtubeIcon.svg'
import tictok  from '../../../assets/tictokIcon.svg'



const AboutContactUs = () =>{

    return (
   <div className="font-nunito mt-2 w-[90%] md:w-[70%] mx-auto flex flex-col place-items-center justify-center">
     <p className="font-bold text-3xl md:text-4xl">Contact Us</p>
     <p className="text-center font-bold leading-[30px]">Ready to find your next home? Get in touch with us today to start your property search journey. Whether you’re looking to rent or buy, we’re here to help you every step of the way.</p>
     
     <div className="w-full flex place-content-center">

     <div className="flex gap-5 m-5">
    <img src={facebookIcon} />
    <img src={instagramIcon} />
    <img src={twitterIcon} />
    <img src={youtubeIcon} />
    <img src={tictok} />
    
    </div>
     </div>
   </div>

    );
}

export default AboutContactUs