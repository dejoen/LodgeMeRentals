const ResourceCard = () => {
  return (
    <div className="m-2 w-[300px] shadow-black shadow-md">
      <div className="w-full h-[140px] bg-[#D9D9D9]">ddd</div>
      <div className="w-full h-[110px]">
        <p className="text-sm font-nunito flex gap-2 mt-1">
          <span className="text-white  bg-[#BB7655] p-1 ms-1">FEATURED</span>
          <span className="mt-1">LANDLORDING BASICS</span>
        </p>
        <div className="m-1">Resources content goes here Resources content goes here Resources content goes here</div>
      </div>
    </div>
  );
};

export default ResourceCard;
