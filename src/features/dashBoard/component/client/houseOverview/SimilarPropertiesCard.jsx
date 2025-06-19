const SimilarPropertiesCard = () => {
  return (
    <div
      className="font-nunito m:ml-0 ml-2 inline-block w-[100%] md:w-[350px] h-[40
        50px] bg-[#34A853] rounded-md p-3 text-white  "
    >
      <img src="/" className="bg-orange-400 h-[200px] rounded-md object-contain object-center" />
      <p className="text-white font-bold mt-2">Eko Serenity Villa</p>
      <div className="w-full flex justify-end ">
        <p>2 Bedroom Flat</p>
      </div>
      <div className="mt-2 h-[70px] w-full ">
        <p className=" w-full overflow-hidden h-full">
          {"Peaceful Retreat, No. 15 Unity Street, Gwarinpa Estate,Lagos, Nigeria."}
        </p>
      </div>
      <div>
        <div className="flex gap-2 justify-evenly">
          <p className="text-white bg-black rounded-md p-2 text-center cursor-default ">View Property</p>
          <p className="text-black bg-white rounded-md p-2 text-center cursor-default ">Contact Agent/LandLord</p>
        </div>
      </div>
    </div>
  );
};

export default SimilarPropertiesCard;
