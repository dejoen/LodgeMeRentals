import { useState } from "react";

const RequestCardContainer = () => {
  const [makeVisible, setMakeVisible] = useState(() => {
    return {
      seemMore: false,
      sendOffer: false
    };
  });

  return (
    <div className="  font-nunito relative bg-[#FFC83980] w-full  rounded-lg min-h-fit p-8 flex  gap-5">
      <img src="/" className="bg-orange-700 h-[50px] w-[50px] rounded-full" />
      <div className="relative w-full mt-2 md:flex flex-col">
        <p>Adedayo Ddedayo</p>
        <p className="md:absolute text-sm md:right-0">Just now</p>

        <div className="w-full mt-3 relative ">
          <div className="flex flex-wrap gap-4 relative">
            <p className="bg-[#BB7655] p-1 h-fit text-white rounded-lg w-fit ">
              Osun
            </p>
            <p className="bg-[#BB7655] p-1 h-fit text-white rounded-lg w-fit ">
              Osogbo
            </p>
            <p className="bg-[#BB7655] p-1 h-fit text-white rounded-lg w-fit ">
              Alekunwodo
            </p>
            <p className="text-sm  p-1 h-fit md:absolute  md:right-[25%] ">
              2 Bedroom flat
            </p>
            <p className="bg-[#34A853] ms-5 ps-1 pe-1  text-white md:absolute rounded-lg md:right-2">
              #500k
            </p>
          </div>
          <div className="mt-5">
            <p>
              Looking for a 2-bedroom apartment in a quiet neighborhood near the
              city center. Must include parking space, a balcony, and be
              pet-friendly. Budget is #500k – #500k per month. Prefer move-in by
              February 1st.
            </p>
          </div>

          <div className="w-full  flex flex-wrap justify-end  gap-5 m-3 cursor-default">
            <p
              className="p-1 underline md:no-underline hover:underline "
              onClick={() => {
                if (makeVisible.seemMore) {
                  setMakeVisible(prevState => {
                    return {
                      ...prevState,
                      seemMore: false,
                      sendOffer: false
                    };
                  });
                  return;
                }

                setMakeVisible(prevState => {
                  return {
                    ...prevState,
                    seemMore: true,
                    sendOffer: false
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
                  setMakeVisible(prevState => {
                    return {
                      ...prevState,
                      seemMore: false,
                      sendOffer: false
                    };
                  });
                  return;
                }
                setMakeVisible(prevState => {
                  return {
                    ...prevState,
                    seemMore: false,
                    sendOffer: true
                  };
                });
              }}
            >
              Send Offer
            </p>
          </div>
        </div>
        <div
          className={`${makeVisible.seemMore && !makeVisible.sendOffer
            ? "block"
            : "hidden"}  h-fit p-2 `}
        >
          <p>
            Maximum budget<span>3</span>
          </p>
          <p>
            Mininum budget <span>4</span>
          </p>
          <p>
            Number of rooms needed<span>4</span>
          </p>
          <p>
            Number of toilets<span>4</span>
          </p>
        </div>
        <div
          className={`h-[200px]  mb-3 cursor-default ${makeVisible.sendOffer &&
          !makeVisible.seemMore
            ? "block"
            : "hidden"}
     `}
        >
          <textarea
            name="SubmitOfferText"
            className="  h-full w-full outline-none resize-none placeholder:text-black p-2  rounded-xl "
            placeholder="write a note"
          />
          <p className="w-full text-end">
            <span className="bg-[#6A3921] m-2 text-white p-1 rounded-md">
              Submit Offer
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RequestCardContainer;
