import PropTypes from "prop-types";
import image from "../../../../../assets/aboutbgimage.svg";
import moreButton from "../../../../../assets/tableMore.svg";
import { useRef, useState } from "react";

const ListedHousesCard = ({ houseName, shortDescription, houseImage }) => {
 
  const containerRef = useRef();
   const [scrollable,setScrollable] = useState(false)

 
  return (
    <div
      ref={containerRef}
      className={`flex text-black border-b border-black min-h-[10vh] w-[810px] md:w-full place-items-center  ${(scrollable) ?'overflow-x-auto' : 'overflow-x-hidden'} `}
    >
      <div
       
        className={` flex  gap-4 justify-evenly md:justify-end pe-[2%] text-black  place-items-center `}
      >
        <div className="hidden md:block  h-[10vh]  ps-5 min-w-[120px] max-w-[120px] ">
          <img
            className="rounded-md  w-full h-full    "
            src={houseImage ? houseImage : image}
          />
        </div>
        <div className="text-sm flex flex-col justify-center place-items-center  text-center min-w-[120px] max-w-[120px]">
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
              setScrollable(!scrollable)
              containerRef.current.scrollBy({ left: 1000, behavior: "smooth" });
              setTimeout(()=>{
                setScrollable(false)
              },1000)
            }}
          />
        </div>
      </div>

      <div
       
        className={`flex w-full  gap-4 justify-evenly md:justify-end pe-[2%] text-black  place-items-center `}
      >
      

        <p className=" text-center min-w-[120px] max-w-[120px] overflow-x-auto">
        Edit Listing
        </p>
        <p className=" text-center min-w-[120px]">
          Delete
        </p>
        <p className=" text-center min-w-[120px]">Duplicate</p>
        <p className=" text-center min-w-[120px]">Share</p>
        <p className=" text-center min-w-[120px]">Pause</p>
        <p className=" text-center min-w-[120px]">Mark as rented</p>
        <div className=" text-center min-w-[120px] ps-4 flex justify-center gap-3">
       
          <img
            src={moreButton}
            className=""
            alt="more.."
            onClick={() => {
              setScrollable(!scrollable)
              containerRef.current.scrollBy({
              
                left:-1000,
                behaviour: "smooth"
              });

              setTimeout(()=>{
                setScrollable(false)
              },1000)
            }}
          />
        </div>
      </div>
    </div>
  );
};

ListedHousesCard.propTypes = {
  houseName: PropTypes.string,
  shortDescription: PropTypes.string,
  houseImage: PropTypes.string
};

export default ListedHousesCard;
