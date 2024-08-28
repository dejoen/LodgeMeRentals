/* eslint-disable react/prop-types */

const ProfileCard = (props) =>{
    return (
        <div className={`font-nunito ${props.display}  w-[360px] h-full bg-white shadow-lg rounded-sm flex flex-col`}>
         <div className="w-full mt-3 flex justify-center">
            <img src="/" />
            <div className="ms-4">
                <p>User Own Name</p>
                <p className="text-sm">benagu477@gmail.com</p>
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