import RequestCardContainer from "./RequestCardContainer";

const RequestContainer = () => {
  return (
    <div className="w-full mt-20 p-3 md:w-[80%] md:ml-[20%] mx-auto">
      <div className="md:pl-8">
        <p className="font-bold text-[32px]">View Request</p>
        <p className="w-full text-justify">
          Browse and manage all rental requests submitted by users, ensuring a
          seamless matching process.
        </p>
      </div>

      <div className="w-full flex flex-col gap-6 p-3 overflow-y-auto h-[75vh]">
  {
[1,3,4,5,6,7,8,9].map((item,index)=>(
    <RequestCardContainer key={index}/>
))

}
      </div>
    </div>
  );
};

export default RequestContainer;
