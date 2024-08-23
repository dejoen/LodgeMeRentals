/* eslint-disable react-refresh/only-export-components */

import GetStartedPopUp from "../component/GetStartedPopUp";

const GetStartedScreen = () =>{
  
    return (
        <div className={`startedPage  hidden absolute bg-black bg-opacity-60 w-full   top-0 bottom-0 z-40 p-8  place-items-center justify-center`}>
     <GetStartedPopUp closeScreen={closeGetStartedPageScreen}/>
        </div>
    );
}

 const  closeGetStartedPageScreen = () => {
   return document.querySelector('.startedPage').style.display='none'
}

 export const  openGetStartedPageScreen = () => {
let startedPage= document.querySelector('.startedPage')
      startedPage.style.display='flex'
   return startedPage
    }

export default GetStartedScreen