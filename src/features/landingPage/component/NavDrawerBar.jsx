/* eslint-disable react-refresh/only-export-components */

import { Link, useNavigate} from "react-router-dom";



const NavDrawerBar = () =>{
   const navigate = useNavigate()
    return (
     
        <div className="drawer hidden absolute md:hidden top-0 right-0 w-[80%] bg-slate-500 bg-opacity-90 h-screen z-50">
          <p className="text-white p-3 font-bold text-3xl hover:text-orange-500" onClick={closeDrawer}>X</p>
          <div className="w-full flex flex-col gap-5 place-items-center justify-center mt-5 text-white font-bold  text-2xl">

          <p className="hover:text-orange-400 hover:underline" onClick={()=>{
              navigate('/') 
           }}>Home</p>

        <p className="hover:text-orange-400 hover:underline" onClick={()=>{
              navigate('/about') 
           }}>About</p>
           
           <p><Link to={"about"}>Blog</Link></p>
           <p>Copyrights</p>
           <p>Terms & Conditions</p>
           <div className="flex place-items-center bg-orange-500 rounded-md w-fit hover:bg-white hover:text-orange-500 p-2">
               <p className="w-full text-center"> Log in</p>
                </div>
                <div className="flex place-items-center bg-white rounded-md w-fit text-black p-2">
               <p className="w-full text-center"> Register</p>
                </div>
          </div>
        </div>

    );
}

export const openDrawer = () =>{

   
    
    const drawer =   document.querySelector('.drawer')
    drawer.style.display= "block"
    drawer.animate([
        {
            transform:"translateX(100%)"
        },
        {
            transform:"translateX(0%)"
        }
    ],{
        duration:500
    })
 
     return drawer
    
}

export const closeDrawer = () =>{
  
  const drawer =document.querySelector('.drawer')
  drawer.animate([
    {
        transform:"translateX(0%)"
    },
    {
        transform:"translateX(100%)"
    }
],{
    duration:500
}).onfinish=()=>{
    drawer.style.display= "none" 
}


  
 

    
   return drawer 
}


export default NavDrawerBar 