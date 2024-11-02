import image from "../../../../../assets/aboutbgimage.svg";
const ListedHousesCard = () => {
  return (
    <div className=" p-1 flex gap-4 justify-evenly md:justify-end pe-[2%] text-black border-b border-black min-h-[10vh] w-[810px] md:w-full place-items-center">
      <div className=" text-center md:min-w-[300px] flex justify-center gap-5">
        <div className="hidden md:block  h-[10vh] w-1/2 ">
          <img className="rounded-md  w-full h-full    " src={image} />
        </div>
        <div className="text-sm flex flex-col justify-center place-items-center">
          <p>House name</p>
          <p>short description</p>
        </div>
      </div>
      <p className=" text-center min-w-[120px] max-w-[120px] overflow-x-auto">
        1
      </p>
      <p className=" text-center min-w-[120px]">0</p>
      <p className=" text-center min-w-[120px]">0</p>
      <p className=" text-center min-w-[120px]">4</p>
      <div className=" text-center min-w-[120px] ps-4 flex justify-center gap-2">
        <p>4</p>
        <p>open</p>
      </div>
    </div>
  );
};

export default ListedHousesCard;
