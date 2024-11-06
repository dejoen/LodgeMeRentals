import PropTypes from "prop-types";
import image from "../../../../../assets/aboutbgimage.svg";
import  moreButton from '../../../../../assets/tableMore.svg'
const ListedHousesCard = ({houseName,shortDescription,houseImage}) => {
  return (
    <div className=" p-1 flex gap-4 justify-evenly md:justify-end pe-[2%] text-black border-b border-black min-h-[10vh] w-[810px] md:w-full place-items-center">
      <div className="hidden md:block  h-[10vh]  text-center min-w-[120px] max-w-[120px] ">
     
          <img className="rounded-md  w-full h-full    " src={(houseImage)?houseImage:image} />
        </div>
        <div className="text-sm flex flex-col justify-center place-items-center  text-center min-w-[120px] max-w-[120px]">
          <p>{(houseName)? houseName:'house name'}</p>
          <p className="text-ellipsis">{(shortDescription)? shortDescription:'short description'}</p>
        </div>
    
      <p className=" text-center min-w-[120px] max-w-[120px] overflow-x-auto">
        1
      </p>
      <p className=" text-center min-w-[120px]">0</p>
      <p className=" text-center min-w-[120px]">0</p>
      <p className=" text-center min-w-[120px]">4</p>
      <div className=" text-center min-w-[120px] ps-4 flex justify-center gap-3">
        <p>4</p>
       <img src={moreButton} className=""  alt="more.."/>
      </div>
    </div>
  );
};

 ListedHousesCard.propTypes = {
   houseName:PropTypes.string,
   shortDescription:PropTypes.string,
   houseImage:PropTypes.string
 }

export default ListedHousesCard;
