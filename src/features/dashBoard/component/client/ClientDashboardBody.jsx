import ClientDashBoardBodyHeader from "./ClientDashboardBodyHeader";
import Footer from "../../../landingPage/screen/FooterScreen";
import ClientPagination from "../client/ClientPagination";
import PaginationContextProvider from "../../../../context/client/PaginationContext";
import ClientHouseCardContainerView from "../../screen/client/ClientHouseCardContainerView";

const ClientDashBoardBody = () => {
  return (
    <PaginationContextProvider>
      <div className="mt-2 ">
        <ClientDashBoardBodyHeader />
        <ClientHouseCardContainerView />
        <ClientPagination />
        <Footer />
      </div>
    </PaginationContextProvider>
  );
};

export default ClientDashBoardBody;
