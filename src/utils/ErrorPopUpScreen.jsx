/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import backArrowIcon from "../assets/backarrowIcon.svg"

import errorIcon from '../assets/errorPopupIcon.svg'
const ErrorPopUpScreen = (props) =>{
    return (
        <div className={` hidden errorScreen absolute w-full  bg-black bg-opacity-35 top-0 bottom-0  place-items-center justify-center`}>
         <div className="animate-popUpAnimation w-full m-5 md:w-[500px] h-[500px] bg-white rounded-md  ">
            <img className='m-5 w-8' src={backArrowIcon} onClick={()=>{
                closeErrorScreen()
            }}/>
           <div className='flex flex-col place-items-center justify-center mt-20'>
            <img className='w-[200px]' src={errorIcon}/>
             <p className='pt-5 font-bold text-2xl'>{props.title}</p>
             <p className='pt-5 font-bold  text-center'>{props.body}</p>
             </div>
             </div>
        </div>
    )
}

export const closeErrorScreen = () =>{
       document.querySelector('.errorScreen').style.display='none'
}

export const openErrorScreen = () =>{
    window.scrollTo({top:0,behavior:'smooth'})
    document.querySelector('.errorScreen').style.display='flex'
}


export default ErrorPopUpScreen