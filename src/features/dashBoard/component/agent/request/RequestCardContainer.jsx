import { useState } from "react";
import getTimeAgo from "../../../../../utils/getTimeAgo";

const RequestCardContainer = ({data}) => {
  const [makeVisible, setMakeVisible] = useState(() => {
    return {
      seemMore: false,
      sendOffer: false,
    };
  });

  return (
    <div className="m-3  font-nunito relative bg-[#FFC83980] w-full  rounded-lg min-h-fit p-8 flex  gap-5">
      <img src={data.userID.
userProfile.
profileImage??'/'} className="bg-orange-700 h-[50px] w-[50px] rounded-full" />
      <div className="relative w-full mt-2 md:flex flex-col">
        <p>{data.userID
.userName}</p>
        <p className="md:absolute text-sm md:right-0">{getTimeAgo(new Date(data.
updatedAt))}</p>

        <div className="w-full mt-3 relative ">
          <div className="flex flex-wrap gap-4 relative">
            <p className="bg-[#BB7655] p-1 h-fit text-white rounded-lg w-fit ">{data.location.state}</p>
            <p className="bg-[#BB7655] p-1 h-fit text-white rounded-lg w-fit ">{data.location.localGovt}</p>
            <p className="bg-[#BB7655] p-1 h-fit text-white rounded-lg w-fit ">{data.location.area}</p>
            <p className="text-sm  p-1 h-fit md:absolute  md:right-[25%] ">{data.propertyType.appartmentType
}</p>
            <p className="bg-[#34A853] ms-5 ps-1 pe-1  text-white md:absolute rounded-lg md:right-2">{data.budget.maximumBudget}</p>
          </div>
          <div className="mt-5">
            <p>
              {data.additionalDescription}
            </p>
          </div>

          <div className="w-full  flex flex-wrap justify-end  gap-5 m-3 cursor-default">
            <p
              className="p-1 underline md:no-underline hover:underline "
              onClick={() => {
                if (makeVisible.seemMore) {
                  setMakeVisible((prevState) => {
                    return {
                      ...prevState,
                      seemMore: false,
                      sendOffer: false,
                    };
                  });
                  return;
                }

                setMakeVisible((prevState) => {
                  return {
                    ...prevState,
                    seemMore: true,
                    sendOffer: false,
                  };
                });
              }}
            >
              view more
            </p>
            <p
              className="bg-[#6A3921] text-white rounded-md p-1 "
              onClick={() => {
                if (makeVisible.sendOffer) {
                  setMakeVisible((prevState) => {
                    return {
                      ...prevState,
                      seemMore: false,
                      sendOffer: false,
                    };
                  });
                  return;
                }
                setMakeVisible((prevState) => {
                  return {
                    ...prevState,
                    seemMore: false,
                    sendOffer: true,
                  };
                });
              }}
            >
              Send Offer
            </p>
          </div>
        </div>
        <div className={`${makeVisible.seemMore && !makeVisible.sendOffer ? "block" : "hidden"}  h-fit p-2 `}>
          <p>
            Maximum budget: <span>{data.budget.maximumBudget}</span>
          </p>
          <p>
            Mininum budget: <span>{data.budget.minimumBudget}</span>
          </p>
          <p>
            Number of rooms needed: <span>{data.propertyType.
numberOfRooms
}</span>
          </p>
          <p>
            Number of toilets: <span>{data.propertyType.
numberOfToilet
}</span>
          </p>
        </div>
        <div
          className={`h-[200px]  mb-3 cursor-default ${
            makeVisible.sendOffer && !makeVisible.seemMore ? "block" : "hidden"
          }
     `}
        >
          <textarea
            name="SubmitOfferText"
            className="  h-full w-full outline-none resize-none placeholder:text-black p-2  rounded-xl "
            placeholder="write a note"
          />
          <p className="w-full text-end">
            <span className="bg-[#6A3921] m-2 text-white p-1 rounded-md">Submit Offer</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RequestCardContainer;
