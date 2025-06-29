/* eslint-disable react/prop-types */

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsive } from "../../../../utils/CouroselDisplayHome";

import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
const ClientHouseCard = ({ item, parent }) => {
  const navigate = useNavigate();
  const cardRef = useRef();
  const videoRef = useRef();

  useEffect(() => {
    const ref = parent.current;

    ref.addEventListener("scroll", () => {
      const v = videoRef.current;

      v.pause();
    });

    return () => {
      ref.removeEventListener("scroll", () => {});
    };
  }, [parent]);

  return (
    <div
      className="shadow shadow-black w-[350px] h-[390px]  bg-[#FFC8391A] rounded-2xl flex flex-col justify-center"
      ref={cardRef}
    >
      <div className=" w-[290px] h-[180px] m-4 ">
        <Carousel
          className=" bg-[#D9D9D9] w-full   max-h-[180px] rounded-md "
          responsive={responsive}
          ssr={true}
          afterChange={(e) => {
            console.log(e + ":" + videoRef.current.value);
          }}
        >
          {item.mediaUpload.map(
            (media) =>
              (media.type === "image" && (
                <img
                  key={media.lodgeUploadId}
                  className="w-full h-[100%] object-contain object-center aspect-auto"
                  src={media.url}
                />
              )) ||
              (media.type === "video" && (
                <video
                  key={media.lodgeUploadId}
                  playsInline
                  controls
                  muted
                  className="w-[100%] h-[100%] object-cover object-center"
                  onEnded={(e) => {
                    e.currentTarget.play();
                  }}
                  autoPlay
                  src={media.url}
                  ref={videoRef}
                />
              )),
          )}
        </Carousel>
      </div>
      <div className="ms-3 ">
        <p className="font-bold">{item.houseOverview.houseName}</p>
        <p className="font-bold text-sm pt-2">For Rent</p>
        <p className="text-sm pt-2">
          Address:<span>{item.houseOverview.houseAddress}</span>
        </p>
        <p className="text-sm pt-2">
          Location:
          <span>{`${item.houseOverview.localGovtArea},${item.houseOverview.state}`}</span>
        </p>
      </div>
      <div className="w-[280px] bg-[#F9BA8F] p-2 text-center rounded-2xl m-1 mb-3 place-self-center hover:bg-opacity-55 cursor-pointer mt-2">
        <p
          onClick={() => {
            navigate("/client/dashboard/houseOverview", { state: item });
          }}
        >
          Contact Agent
        </p>
      </div>
    </div>
  );
};

export default ClientHouseCard;
