/* eslint-disable react-refresh/only-export-components */



const NavDrawerBar = () =>{

    return (
     
        <div className="drawer hidden absolute md:hidden top-0 right-0 w-[80%] bg-slate-500 bg-opacity-90 h-screen z-50">
          <p className="text-white p-3 font-bold text-3xl hover:text-orange-500" onClick={closeDrawer}>X</p>
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