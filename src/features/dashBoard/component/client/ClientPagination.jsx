import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PaginationContext } from "../../../../context/client/PaginationContext";
import ResponsivePaginationComponent from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic.css";

const ClientPagination = () => {
  const navigate = useNavigate();
  const [pageState, setPageState] = useState(1);

  const { homeItems, setItem, getItem } = useContext(PaginationContext);

  return (
    <div className=" w-full flex gap-5 place-items-center justify-center mt-5 mb-5">
      <ResponsivePaginationComponent
        current={pageState}
        total={homeItems.length}
        onPageChange={(p) => {
          getItem(p - 1);
          setPageState(p);
        }}
      />
    </div>
  );
};

export default ClientPagination;
