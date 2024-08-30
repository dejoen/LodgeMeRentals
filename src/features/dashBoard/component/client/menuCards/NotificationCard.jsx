/* eslint-disable react/prop-types */

import NotificationBody from "../NotificationBody";

const NotificationCard = (props) =>{
    let d = [1,2,3]
    return (
    <div className={` ${props.display} flex-col  w-[360px] h-full bg-white shadow-lg rounded-sm gap-4`}>
        <div className=" hidden md:block mt-2 ms-3">
            <p>Notification <span>{"(0)"}</span></p>
        </div>
         <div className="ms-3">
         {
          
           d.map((data,index)=>(
             <NotificationBody key={index}/>
           ))
   
              
           
        }
        
         </div>

            </div>
      
    );
}


export default NotificationCard