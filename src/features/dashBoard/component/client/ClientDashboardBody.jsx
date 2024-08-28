import ClientDashBoardBodyHeader from "./ClientDashboardBodyHeader";
import Footer from '../../../landingPage/screen/FooterScreen'
import ClientHouseCardContainer from "./ClientHouseCardContainer";


const  ClientDashBoardBody = () =>{
    return (
     
        <div className="mt-2 ms-2">

             <ClientDashBoardBodyHeader/>
             <ClientHouseCardContainer/>
             <Footer/>
        </div>

    );
}

export default ClientDashBoardBody