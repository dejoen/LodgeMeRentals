import UserProfilePostsCard from "../../../component/agent/userProfile/UserProfilePostsCard"

const UserProfilePostsScreen = () => {

    return(
        <div className="w-full font-nunito">
           <p className="m-3">Posted Houses</p>
           <div className=" flex flex-wrap gap-5 place-items-center justify-center w-full max-h-[400px] md:ms-5 overflow-y-auto mb-2">
           {
            [1,2,3,4,5,6,7,8,9].map((items,index)=>(
                <UserProfilePostsCard key={index}/>
            ))
           }
           </div>
        </div>
    )
}


export default UserProfilePostsScreen