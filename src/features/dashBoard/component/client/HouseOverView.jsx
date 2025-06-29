import { useLocation, useNavigate } from "react-router-dom";
import getTimeAgo from "../../../../utils/getTimeAgo";
import OtherPropertiesPostedCard from "./houseOverview/OtherPropertiesPostedCard";
import ReviewsCard from "./houseOverview/ReviewsCard";
import SimilarPropertiesCard from "./houseOverview/SimilarPropertiesCard";
import FooterScreen from "../../../landingPage/screen/FooterScreen";
import smallHouseIcon from "../../../../assets/smallHouseIcon.svg";
import React from "react";
import starDarkIcon from "../../.../../../../assets/StarDark.svg";

const HouseOverView = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  //alert(JSON.stringify(state))
  console.log(state);
  let getFirstVideo = () => {
    if (state) {
      const video = state.mediaUpload.find((media) => media.type === "video");
      return video.url;
    }
  };

  return (
    <React.Fragment>
      <div className="font-nunito  w-full md:m-5 " style={{ scrollbarWidth: "none" }}>
        <p className="ps-2 md:p-0  mx-auto text-justify font-bold  w-[80%] leading-8 ">
          The house details page offers a clear overview of a property, including its price, location, photos,
          amenities, and availability. Users can explore features, view multimedia content, and contact the owner or
          agent directly for inquiries or bookings.
        </p>

        <div className="md:w-full w-[90%] mx-auto mt-6 flex gap-4 place-items-center">
          <img src={state.publisher.userProfile.profileImage} className="bg-black/40 w-[80px] h-[80px] rounded-full" />
          <div>
            <p>{state.publisher.userName ? state.publisher.userName : state.houseOverview.houseName}</p>
            <p className="text-ellipsis space-x-0 w-[42px]">
              publishingAs:
              <span>{state.publisher.userProfile.publishingAs}</span>
            </p>
            <div className="flex gap-1 mt-2 justify-center place-items-center">
              {[1, 2, 4, 5, 6].map((item, index) => (
                <img className="h-[15px]" key={index} src={starDarkIcon} />
              ))}
              <div className="h-[20px] flex gap-1">
                <p className="font-bold">5.0</p>
                <p>(203 reviews)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="ms-5 mt-5 flex place-items-center space-x-3">
          <img className="md:ms-16 h-[24px] w-[24px]" src={smallHouseIcon} />

          <div className="flex  gap-3 flex-wrap place-items-center p-1 ">
            <p className="md:text-[16px] md:w-[150px] text-nowrap overflow-hidden text-ellipsis">
              .{state.houseOverview.houseName ? state.houseOverview.houseName : ""}
            </p>
            <p className="md:text-[16px] md:w-[200px] text-nowrap overflow-hidden text-ellipsis]">
              .{state.houseOverview.houseType ? state.houseOverview.houseType : ""}
            </p>
            <p className=" text-gray-700">{getTimeAgo(state.datePublished)}</p>
          </div>
        </div>

        <div className="w-[95%] mx-auto flex  flex-wrap  ">
          <div className=" h-full w-full md:w-[70%] ">
            <div className="w-full p-1  h-fit  bg-black   flex place-items-center justify-center">
              <video
                src={getFirstVideo()}
                className="bg-gray-400  rounded-md object-cover object-center w-fit h-fit max-h-[380px] "
                controls
              />
            </div>

            <div className="w-full md:ms-5 p-2 flex gap-5   overflow-x-auto  h-[180px] overflow-y-hidden">
              {state &&
                state.mediaUpload &&
                state.mediaUpload.map((media) => (
                  <div key={(state._id += 1)}>
                    {media.type === "image" ? (
                      <div className=" rounded-md w-[170px] h-full">
                        {" "}
                        <img className="rounded-md h-full w-full object-contain object-center" src={media.url} />{" "}
                      </div>
                    ) : (
                      <div className="rounded-md w-[170px] h-full">
                        {" "}
                        <video
                          className="rounded-md h-full  object-cover object-center"
                          controls
                          src={media.url}
                        />{" "}
                      </div>
                    )}
                  </div>
                ))}
            </div>

            <div className="md:ms-5 text-justify p-2 ">
              <p className="min-h-[250px]">
                {state.aboutHouse.description ? state.aboutHouse.description : "No description"}
              </p>

              <div className="mt-5">
                <p className="font-bold">House Address</p>
                <p>{state.houseOverview.houseAddress}</p>
              </div>

              <div className="mt-1">
                <p className="font-bold">Total number of rooms</p>
                <p className="">{state.houseFeatures.totalNumberOfBedRooms}</p>
              </div>
            </div>
          </div>

          <div className=" h-full w-full md:w-[30%] ">
            <div className="w-full p-2">
              <div className="bg-[#BB7655] h-10   flex place-items-center p-2 text-white">House Feature</div>
              <div className="bg-[#F0D38F80] px-4 max-h-ful relative ">
                <div className="w-full flex place-items-center p-1">
                  <p>Fenced</p>
                  <input
                    type="checkbox"
                    className="absolute right-2"
                    disabled
                    checked={state.houseFeatures.houseFenced}
                  />
                </div>

                <div className="w-full flex place-items-center p-1">
                  <p>Running Water</p>
                  <input
                    type="checkbox"
                    className="absolute right-2"
                    disabled
                    checked={state.houseFeatures.runningWater}
                  />
                </div>

                <div className="w-full flex place-items-center p-1">
                  <p>Prepaid Meter</p>
                  <input
                    type="checkbox"
                    className="absolute right-2"
                    disabled
                    checked={state.houseFeatures.prepaidMeter}
                  />
                </div>

                <div className="w-full flex place-items-center p-1">
                  <p>Smart Home Features</p>
                  <input
                    type="checkbox"
                    className="absolute right-2"
                    disabled
                    checked={state.houseFeatures.smartHomeFeatures}
                  />
                </div>

                <div className="w-full flex place-items-center p-1">
                  <p>Laundry Room</p>
                  <input type="checkbox" className="absolute right-2" disabled checked={state.laundryRoom} />
                </div>

                <div className="w-full flex place-items-center p-1">
                  <p>Air Conditioning</p>
                  <input
                    type="checkbox"
                    className="absolute right-2"
                    disabled
                    checked={state.houseFeatures.airConditioning}
                  />
                </div>

                <div className="w-full flex place-items-center p-1">
                  <p>Parking Space</p>
                  <input
                    type="checkbox"
                    className="absolute right-2"
                    disabled
                    checked={state.houseFeatures.parkingSpace}
                  />
                </div>

                <div className="w-full flex place-items-center p-1">
                  <p>Garbage Disposal Service</p>
                  <input
                    type="checkbox"
                    className="absolute right-2"
                    disabled
                    checked={state.houseFeatures.garbageDisposalService}
                  />
                </div>

                <div className="w-full flex place-items-center p-1">
                  <p>Adequate Lighting</p>
                  <input
                    type="checkbox"
                    className="absolute right-2"
                    disabled
                    checked={state.houseFeatures.adequateLighting}
                  />
                </div>

                <div className="w-full flex place-items-center p-1">
                  <p>Storage Space</p>
                  <input
                    type="checkbox"
                    className="absolute right-2"
                    disabled
                    checked={state.houseFeatures.storageSpace}
                  />
                </div>

                <div className="w-full flex place-items-center p-1 mt-3 ms-2">
                  <p className=" text-black opacity-20">Additional Details</p>
                </div>

                <div className="w-full flex place-items-center p-1">
                  <p>Pet-Friendly</p>
                  <input
                    type="checkbox"
                    className="absolute right-2"
                    disabled
                    checked={state.houseFeatures.petFriendly}
                  />
                </div>

                <div className="w-full flex place-items-center p-1">
                  <p>Emergency Exits</p>
                  <input
                    type="checkbox"
                    className="absolute right-2"
                    disabled
                    checked={state.houseFeatures.emergencyExits}
                  />
                </div>

                <div className="w-full flex place-items-center p-1">
                  <p>Secure Windows And Doors</p>
                  <input
                    type="checkbox"
                    className="absolute right-2"
                    disabled
                    checked={state.houseFeatures.secureWindowsAndDoors}
                  />
                </div>

                <div className="w-full flex place-items-center p-1">
                  <p>Security Systems</p>
                  <input
                    type="checkbox"
                    className="absolute right-2"
                    disabled
                    checked={state.houseFeatures.securitySystems}
                  />
                </div>

                <div className="w-full flex place-items-center p-1">
                  <p>Backyard,Garden Or Balcony</p>
                  <input
                    type="checkbox"
                    className="absolute right-2"
                    disabled
                    checked={state.houseFeatures.backyardGardenOrBalcony}
                  />
                </div>

                <div className="w-full flex place-items-center p-1">
                  <p>Swimming Pool Gym</p>
                  <input
                    type="checkbox"
                    className="absolute right-2"
                    disabled
                    checked={state.houseFeatures.swimmingPoolGym}
                  />
                </div>

                <div className="w-full flex place-items-center p-1">
                  <p> Gym</p>
                  <input type="checkbox" className="absolute right-2" disabled checked={state.houseFeatures.Gym} />
                </div>

                <div className="w-full flex place-items-center p-1">
                  <p> 24/7 Maintenance Support</p>
                  <input
                    type="checkbox"
                    className="absolute right-2"
                    disabled
                    checked={state.houseFeatures.maintenanceSupport}
                  />
                </div>

                <div className="w-full flex place-items-center p-1">
                  <p> Safe Play Area For Children</p>
                  <input
                    type="checkbox"
                    className="absolute right-2"
                    disabled
                    checked={state.safePlayAreaForChildren}
                  />
                </div>
              </div>

              <div className="ps-2  ms-5 mt-10">
                <p className="font-bold">Pricing</p>
                <ul className="list-item list-disc ">
                  <li>
                    <p>
                      Monthly Rent:₦<span>1,200,000</span>
                    </p>
                  </li>
                  <li>
                    <p>
                      Annual Rent:₦<span>1,200,000</span>
                    </p>
                  </li>
                </ul>

                <div className="bg-[#34A853] rounded-md w-[200px] p-2 text-center text-white mt-5">
                  <p
                    onClick={() => {
                      navigate("/client/dashboard/chat", { state });
                    }}
                    className="cursor-default"
                  >
                    Contact Agent
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className=" overflow-x-auto">
            <p className="font-bold text-center text-2xl pb-3">Other properties posted by this Agent</p>

            <div
              className=" w-full 
             overflow-x-auto  whitespace-nowrap space-x-5"
              style={{ scrollbarWidth: "none" }}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
                <OtherPropertiesPostedCard key={index} />
              ))}
            </div>

            <div className="w-full">
              <div className="flex mt-5 md:flex-row flex-col">
                <p className="font-bold  text-2xl">Reviews from past clients:</p>
                <span>(203)Reviews</span>
              </div>

              <div className="w-full max-h-[400px] overflow-y-auto">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
                  <ReviewsCard key={index} />
                ))}
              </div>
            </div>
          </div>

          <div className="w-full mt-10 ">
            <p className="font-bold text-center text-2xl">Similar properties you may like</p>

            <div
              className=" mt-5 w-full 
             overflow-x-auto  whitespace-nowrap space-x-5"
              style={{ scrollbarWidth: "none" }}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
                <SimilarPropertiesCard key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <FooterScreen />
    </React.Fragment>
  );
};

export default HouseOverView;
