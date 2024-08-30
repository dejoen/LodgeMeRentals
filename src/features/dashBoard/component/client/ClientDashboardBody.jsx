import ClientDashBoardBodyHeader from "./ClientDashboardBodyHeader";
import Footer from '../../../landingPage/screen/FooterScreen'
import ClientPagination from "./clientPagination";
import { Outlet } from "react-router-dom";
import PaginationContextProvider from "../../../../context/client/PaginationContext";


const  ClientDashBoardBody = () =>{
     
    return (
        <PaginationContextProvider >
        <div className="mt-2 ">

             <ClientDashBoardBodyHeader/>
             <Outlet/>
             <ClientPagination/>
             <Footer/>
        </div>
        </PaginationContextProvider>
    );
}



export default ClientDashBoardBody