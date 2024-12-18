import ClientHouseCard from "../../component/client/ClientHouseCard";

import { CircularProgress } from "@chakra-ui/progress";
import { useRef } from "react";
import useGetPublishedHouses from "../../hooks/client/useGetPublishedHouses";
import useGetClientUpdatedState from "../../hooks/client/useGetClientUpdatedState";

const ClientHouseCardContainerView = () => {
  const cardContainerBodyRef = useRef();
  const { clientUpdatedState } = useGetClientUpdatedState();

  const { isLoading, errorMessage, publishedHouses } = useGetPublishedHouses(
    clientUpdatedState.data.token
  );

  return (
    <div
      className="w-full  mt-3 flex flex-wrap  justify-center gap-5 h-[400px] overflow-y-auto p-2"
      ref={cardContainerBodyRef}
    >
      <div
        className={`${isLoading
          ? "flex"
          : "hidden"}  absolute  top-[450px] bottom-0 z-[15] justify-center place-items-center`}
      >
        <CircularProgress size={130} isIndeterminate={true} color="#F9BA8F" />
      </div>

      {!isLoading &&
        errorMessage &&
        <div>
          <p>
            {errorMessage}
          </p>
        </div>}

      {!isLoading &&
        !errorMessage &&
        publishedHouses.length > 0 &&
        publishedHouses.map((item, index) =>
          <ClientHouseCard
            key={index}
            item={item}
            parent={cardContainerBodyRef}
          />
        )}
    </div>
  );
};

/*const chunkArray = (arr, size) => {
  return arr.reduce((acc, _, index) => {
    if (index % size === 0) {
      acc.push(arr.slice(index, index + size));
    }
    return acc;
  }, []);
};*/

export default ClientHouseCardContainerView;
