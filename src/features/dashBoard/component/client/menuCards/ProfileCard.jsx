/* eslint-disable react/prop-types */

import { useContext } from "react";
import { CombineContext } from "../../../../../context/CombineContextProvider";

const ProfileCard = (props) =>{
    const {clientReducerState,clientReducerDispatcher,socketConnectedReducerState} = useContext(CombineContext)
    
    
    return (
        <div className={`font-nunito ${props.display} flex-col  w-[300px] md:w-[360px] h-full bg-white shadow-lg rounded-sm  `}>
         <div className="hidden w-full mt-3 md:flex justify-center">
            <img src="/" />
            <div className="ms-4">
                <p>{clientReducerState.data.userName}</p>
                <p className="text-sm">{clientReducerState.data.userEmail}</p>
            </div>
           
         </div>

         <div className="flex ms-6 mt-5 font-bold">
                <div className="flex gap-2">
                    <img src="/"/>
                    <p>Profile</p>
                </div>

            </div>
            <div className="flex ms-6 mt-5 font-bold">
                <div className="flex gap-2">
                    <img src="/"/>
                    <p>Favourites</p>
                </div>

            </div>

            <div className="flex ms-6 mt-5 font-bold">
                <div className="flex gap-2">
                    <img src="/"/>
                    <p>Make A Request</p>
                </div>

            </div>

            <div className="flex ms-6 mt-5 font-bold">
                <div className="flex gap-2">
                    <img src="/"/>
                    <p>Help And Support</p>
                </div>

            </div>

            <div className="flex ms-6 mt-5 font-bold">
                <div className="flex gap-2">
                    <img src="/"/>
                    <p>Logout</p>
                </div>

            </div>
        </div>
    );
}

export default ProfileCard