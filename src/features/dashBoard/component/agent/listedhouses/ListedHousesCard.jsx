import PropTypes from "prop-types";
import image from "../../../../../assets/aboutbgimage.svg";
import moreButton from "../../../../../assets/tableMore.svg";
import editListing from "../../../../../assets/listedhouses/editlisting.svg";
import deleteIcon from "../../../../../assets/listedhouses/delete.svg";
import duplicateIcon from "../../../../../assets/listedhouses/duplicate.svg";
import shareIcon from "../../../../../assets/listedhouses/share.svg";
import pauseIcon from "../../../../../assets/listedhouses/pause.svg";
import markAsRentedIcon from "../../../../../assets/listedhouses/markasread.svg";
import { useRef, useState } from "react";

const ListedHousesCard = ({
  houseName,
  shortDescription,
  houseImage,
  listId
}) => {
  const containerRef = useRef();

  const [activateSecondContainer, setActivateSecondContainer] = useState(false);
  return (
    <div
      ref={containerRef}
      className={`flex  flex-col text-black border-b border-black min-h-[10vh] w-[810px]  md:w-full place-items-center justify-center `}
    >
      <div
        className={`max-h-[56vh] md:max-h-[53vh]  w-full place-items-center flex gap-4 justify-end md:justify-end pe-[2%]  `}
      >
        <div className="hidden md:block  h-[10vh]   min-w-[120px] max-w-[120px] md:me-12 ">
          <img
            className="rounded-md  w-full h-full    "
            src={houseImage ? houseImage : image}
          />
        </div>
        <div className="text-sm flex flex-col justify-center place-items-center  text-center min-w-[120px] max-w-[120px] md:me-8">
          <p>
            {houseName ? houseName : "house name"}
          </p>
          <p className="text-ellipsis">
            {shortDescription ? shortDescription : "short description"}
          </p>
        </div>

        <p className=" text-center min-w-[120px] max-w-[120px] overflow-x-auto">
          1
        </p>
        <p className=" text-center min-w-[120px]">0</p>
        <p className=" text-center min-w-[120px]">0</p>
        <p className=" text-center min-w-[120px]">4</p>
        <div className=" text-center min-w-[120px] ps-4 flex justify-center gap-3">
          <p>4</p>
          <img
            src={moreButton}
            className=""
            alt="more.."
            onClick={() => {
              setActivateSecondContainer(!activateSecondContainer);
              //alert(listId)
            }}
          />
        </div>
      </div>

      <div
        className={` ${activateSecondContainer
          ? " flex"
          : "hidden"} w-full mt-2 gap-4 justify-evenly md:justify-end pe-[2%] text-black  place-items-center `}
      >
        <div className="flex min-w-[120px] gap-2   place-items-center">
          <p className=" text-center ">Edit Listing</p>
          <img src={editListing} />
        </div>
        <div className="flex min-w-[120px] gap-2  place-items-center">
          <p className=" text-center ">Delete</p>
          <img src={deleteIcon} />
        </div>
        <div className="flex min-w-[120px] gap-2  place-items-center">
          <p className=" text-center ">Duplicate</p>
          <img src={duplicateIcon} />
        </div>
        <div className="flex min-w-[120px] gap-2  place-items-center">
          <p className=" text-center ">Share</p>
          <img src={shareIcon} />
        </div>

        <div className="flex min-w-[120px] gap-2  place-items-center">
          <p className=" text-center">Pause</p>
          <img src={pauseIcon} />
        </div>

        <div className="flex min-w-[120px] gap-2  place-items-center">
          <p className=" text-center">Mark as rented</p>
          <img src={markAsRentedIcon} />
        </div>
      </div>
    </div>
  );
};

ListedHousesCard.propTypes = {
  houseName: PropTypes.string,
  shortDescription: PropTypes.string,
  houseImage: PropTypes.string,
  listId: PropTypes.string
};

export default ListedHousesCard;
