import ClientAdvertBanner from "../../component/client/banner/ClientAdvertBanner"
import ClientDashBoardBody from "../../component/client/ClientDashboardBody"

const ClientHomeScreen = ()=>{

    return (
        <div className="w-full">
            
             <ClientAdvertBanner/>
             <ClientDashBoardBody/>
        </div>
    )
}

export default ClientHomeScreen