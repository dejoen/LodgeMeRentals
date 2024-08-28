/* eslint-disable react/prop-types */

import ClientMessageBody from "../ClientMessageBody";


const InboxCard = (props) => {
    
return (
            <div className={`pt-2 font-nunito ${props.display}  w-[360px] h-full bg-white shadow-lg rounded-sm flex flex-col`}>
            
            <div className=" w-full flex  ">
             <p className=" font-bold ms-3">inbox<span>{'v'}</span></p>
                <p className="absolute right-5 ">{'*'}<span>Filter</span></p>
            </div>

            <div className="h-full overflow-auto">
                {
                [1,2,3,4,5,6,7,8,9,10].map((item,index)=>(
                    <ClientMessageBody key={index} />
                ))

                }
            </div>
              

            </div>
        );


}


export default InboxCard