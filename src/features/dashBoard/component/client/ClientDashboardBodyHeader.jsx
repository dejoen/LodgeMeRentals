import { useContext } from "react";
import { PaginationContext } from "../../../../context/client/PaginationContext";

const ClientDashBoardBodyHeader = () => {
  const { items } = useContext(PaginationContext);

  return (
    <div className="mt-5 ms-2 font-nunito">
      <div className=" font-bold  flex ">
        <p>Available properties for you</p>
      {/*  <p className="ms-10 ">Filter Selection</p>*/}
      </div>
      <div className="flex mt-1 text-sm">
        <p className="me-1">Number of houses available </p>
        <p className="w-[100px]  border-b border-dashed border-black text-center">
          {items.length > 0 ? items.length : 0}
        </p>
      </div>
    </div>
  );
};

export default ClientDashBoardBodyHeader;
