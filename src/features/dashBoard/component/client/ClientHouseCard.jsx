/* eslint-disable react/prop-types */

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsive } from "../../../../utils/CouroselDisplayHome";

import { useEffect, useRef } from "react";
const ClientHouseCard = ({ item, parent }) => {
  const cardRef = useRef();
  const videoRef = useRef();

  useEffect(
    () => {
      const ref = parent.current;

      ref.addEventListener("scroll", () => {
        const v = videoRef.current;

        v.pause();
      });

      return () => {
        ref.removeEventListener("scroll", () => {});
      };
    },
    [parent]
  );

  return (
    <div
      className="shadow shadow-black w-[350px] h-[390px]  bg-[#FFC8391A] rounded-2xl flex flex-col justify-center"
      ref={cardRef}
    >
      <div className="bg-[#D9D9D9] w-[290px] h-[180px] m-4 rounded-3xl">
        <Carousel
          className=" w-fill h-full rounded-md "
          responsive={responsive}
          ssr={true}
          afterChange={e => {
            console.log(e + ":" + videoRef.current.value);
          }}
        >
          {item.mediaUpload.map(
            media =>
              (media.type === "image" &&
                <img
                  key={media.lodgeUploadId}
                  className="w-[100%] h-[100%]"
                  src={media.url}
                />) ||
              (media.type === "video" &&
                <video
                  key={media.lodgeUploadId}
                  playsInline
                  controls
                  muted
                  className="w-[100%] h-[100%] object-cover"
                  onEnded={e => {
                    e.currentTarget.play();
                  }}
                  autoPlay
                  src={media.url}
                  ref={videoRef}
                />)
          )}
        </Carousel>
      </div>
      <div className="ms-3">
        <p className="font-bold">
          {item.houseOverview.houseName}
        </p>
        <p className="font-bold text-sm">For Rent</p>
        <p className="text-sm">
          Address:<span>{item.houseOverview.houseAddress}</span>
        </p>
        <p className="text-sm">
          Location:<span>{`${item.houseOverview.localGovtArea},${item
            .houseOverview.state}`}</span>
        </p>
      </div>
      <div className="w-[280px] bg-[#F9BA8F] p-2 text-center rounded-2xl m-1 mb-3 place-self-center hover:bg-opacity-55 cursor-pointer">
        <p>Contact Agent</p>
      </div>
    </div>
  );
};

export default ClientHouseCard;
