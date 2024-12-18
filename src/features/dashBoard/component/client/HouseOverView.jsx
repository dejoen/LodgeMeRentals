import { useLocation } from "react-router-dom";
import getTimeAgo from "../../../../utils/getTimeAgo";

const HouseOverView = () => {
  const { state } = useLocation();
  //alert(JSON.stringify(state))

  let getFirstVideo = () => {
    if (state) {
      const video = state.mediaUpload.find(media => media.type === "video");
      return video.url;
    }
  };

  return (
    <div className="font-nunito  w-full m-5 ">
      <p className="text-justify font-bold text-[] w-[90%] ">
        {" "}The house details page offers a clear overview of a property,
        including its price, location, photos, amenities, and availability.
        Users can explore features, view multimedia content, and contact the
        owner or agent directly for inquiries or bookings.
      </p>

      <div className="w-full mt-6 flex gap-4 place-items-center">
        <img src="/" className="bg-orange-500 w-[80px] h-[80px] rounded-full" />
        <div>
          <p>djjdjdjdjj</p>
          <p>fff</p>
        </div>
      </div>
      <div className="ms-5 mt-5 flex ">
        <img src="/" />
        <p>.Unityhostel</p>
        <p>.Unityhostel</p>
        <p className="ms-6">
          {getTimeAgo(state.datePublished)}
        </p>
      </div>

      <div className="w-[95%] flex  flex-wrap  ">
        <div className=" h-full w-full md:w-[70%]">
          <div className="w-full p-5">
            <video
              src={getFirstVideo()}
              className="bg-gray-400  rounded-md object-contain w-[100%] h-[100%]"
              controls
            />
          </div>

          <div className="w-full ms-5 p-2 flex gap-5 overflow-x-auto  max-h-[180px] overflow-y-hidden">
            {state &&
              state.mediaUpload &&
              state.mediaUpload.map(media =>
                <div key={state._id}>
                  {media.type === "image"
                    ? <div className=" rounded-md w-[170px] h-[170px]">
                        {" "}<img
                          className="rounded-md h-full w-full"
                          src={media.url}
                        />{" "}
                      </div>
                    : <div className="rounded-md w-[300px] h-[300px]">
                        {" "}<video
                          className="rounded-md"
                          controls
                          src={media.url}
                        />{" "}
                      </div>}
                </div>
              )}
          </div>

          <div className="ms-5 text-justify p-2">
            <p>
              {` Grace Haven offers a luxurious living experience in the heart of Lekki. This home combines contemporary architecture with functionality, perfect for families or professionals seeking comfort and style. Each room is thoughtfully designed, with large windows providing ample natural light. Enjoy entertaining guests in the open-plan living and dining area or relax in the serene backyard by the pool. Located in a secure and quiet neighborhood, Grace Haven is just minutes away from top schools, shopping malls, and recreational facilities.
This house is more than a home; it’s a statement of elegance and convenience.`}
            </p>

            <div className="mt-5">
              <p className="font-bold">House Address</p>
              <p>
                {state.houseOverview.houseAddress}
              </p>
            </div>

            <div className="mt-1">
              <p className="font-bold">Total number of rooms</p>
              <p className="">
                {state.houseFeatures.totalNumberOfBedRooms}
              </p>
            </div>
          </div>
        </div>

        <div className=" h-full w-full md:w-[30%] ">
          <div className="w-full p-5">
            <div className="bg-[#BB7655] h-10  flex place-items-center ps-2 text-white">
              House Feature
            </div>
            <div className="bg-[#F0D38F80] max-h-ful relative ">
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
                <input
                  type="checkbox"
                  className="absolute right-2"
                  disabled
                  checked={state.laundryRoom}
                />
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
                <input
                  type="checkbox"
                  className="absolute right-2"
                  disabled
                  checked={state.houseFeatures.Gym}
                />
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
                <p className="cursor-default">Contact Agent</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HouseOverView;