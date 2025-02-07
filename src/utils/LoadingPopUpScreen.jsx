/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { CircularProgress } from "@chakra-ui/progress";
import { TypeAnimation } from "react-type-animation";

const LoadingPopUpScreen = (props) =>{

    return (
        <div className="LoginPopUp hidden  w-full h-screen absolute bg-black bg-opacity-30 top-0   items-center justify-center ">
          <div className="animate-popUpAnimation  bg-white w-[300px] md:w-1/2 h-[50vh] m-5 rounded-2xl flex flex-col items-center justify-center">
            
             <CircularProgress size={80} color="#BB7655" isIndeterminate />
            <div className="mt-10">
            <TypeAnimation 
             sequence={[
                500,
                `${props.sequence[0]}`,1000,
                `${props.sequence[1]}`,1000,
                `${props.sequence[2]}`,1000,
                `${props.sequence[3]}`,1000,
                '',500
             ]}
             speed={50}
            style={{fontSize:'2em'}}
            repeat={Infinity}
            preRenderFirstString:true
            />
            </div>

            
          </div>
        </div>
    );
}

export const  showLoadingPopUp = () =>{
  const popUp = document.querySelector('.LoginPopUp')
   popUp.style.display ='flex'
}

export const  closeLoadingPopUp = () =>{
  const popUp = document.querySelector('.LoginPopUp')
   popUp.style.display ='none'
}

export default  LoadingPopUpScreen