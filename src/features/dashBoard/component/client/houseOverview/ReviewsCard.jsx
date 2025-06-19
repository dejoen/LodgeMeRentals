import starDarkIcon from "../../.../../../../../assets/StarDark.svg";
const ReviewsCard = () => {
  return (
    <div className=" font-nunitow-full flex  flex-col md:flex-row  w-[90%] md:w-full mx-auto  mt-3 gap-2">
      <img src="/ " alt="" className="bg-orange-400 rounded-full object-contain object-center h-[40px] w-[40px] " />
      <div className=" mt-2 flex flex-col gap-2 ">
        <div className="flex gap-5  ">
          <p className="font-bold">Adeora dhhh</p>
          <p className="text-black opacity-50">Lagos</p>
        </div>
        <div className="flex gap-1 ">
          {[1, 2, 4, 5, 6].map((item, index) => (
            <img className="h-[15px]" key={index} src={starDarkIcon} />
          ))}
        </div>

        <div>
          <p className="md:text-justify md:text-pretty">
            I had an excellent experience renting this house. The location was perfect, close to essential amenities and
            in a safe neighborhood. The house was clean, well-maintained, and matched the photos provided online.
            Communication with the landlord was seamless, and any minor issues were resolved promptly. I particularly
            appreciated the spacious living room and the modern kitchen. Overall, it was a comfortable stay, and I would
            highly recommend this property to anyone looking for a hassle-free rental experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewsCard;
