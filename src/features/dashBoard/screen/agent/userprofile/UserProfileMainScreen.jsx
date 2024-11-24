import { Outlet } from "react-router-dom"
import UserProfileSideBar from "../../../component/agent/userProfile/UserProfileSideBar"




const UserProfileMainScreen = () =>{

    return (
        <div className="flex h-[100vh] w-full overflow-x-hidden">
            <UserProfileSideBar/>
            <Outlet/>
        </div>
    )
}

  export default  UserProfileMainScreen