import { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { CombineContext } from "../../../../../context/CombineContextProvider";
import { LucideArrowLeft } from "lucide-react";

const AboutHouse = () => {
  const navigate = useNavigate();

  const [saveIndicator, setSaveindicator] = useState("");

  const { allDataToPublishReducerState, allDataToPublishReducerDispatcher } = useContext(CombineContext);

  return (
    <>
      {!allDataToPublishReducerState.HouseOverview.houseName && (
        <Navigate to={"/agent/dashboard/publish-home/houseOverview"} replace={true} />
      )}

      <div className=" cursor-default font-nunito w-full  mx-auto  h-dvh   md:ps-[21%] p-2   mt-20  bg-white z-20 rounded-md shadow-md overflow-y-auto overflow-x-hidden pb-10">
        <div className=" pt-8 pb-4 flex place-items-center gap-6">
          <LucideArrowLeft
            size={34}
            color="black"
            onClick={() => {
              navigate(-1);
            }}
          />
          <h1 className="font-bold ">About this house</h1>
        </div>
        <p className="text-justify p-2 leading-8 ">
          Provide a brief description of your house, including key features like the number of bedrooms, bathrooms,
          special amenities, and any unique selling points. This helps potential renters understand what makes your
          property stand out. Tips: Highlight features like a spacious yard, modern kitchen, nearby amenities, or recent
          renovations to attract more interest.{" "}
        </p>

        <div
          className="w-full  h-[350px] border-2 bg-opacity-50 p-4 rounded-md mt-2 me-20 "
          onClick={(e) => {
            e.currentTarget.childNodes[0].focus();
          }}
        >
          <input
            type="text"
            className="h-fit w-full outline-none"
            onChange={(e) => {
              allDataToPublishReducerDispatcher({
                TYPE: "Save",
                payload: {
                  ...allDataToPublishReducerState,
                  AboutHouse: {
                    ...allDataToPublishReducerDispatcher.AboutHouse,
                    description: e.target.value,
                  },
                },
              });
            }}
          />
        </div>

        <div className="w-full flex justify-end place-items-center h-[25%] gap-5 pe-4 ">
          <p
            className={`${saveIndicator ? "block" : "hidden"} ${!saveIndicator.includes("saved") ? `${saveIndicator.includes("saving") ? "text-black" : "text-red-600"}` : "text-green-600"}   `}
          >
            {saveIndicator}
          </p>
          <p
            className="bg-[#BB7655] hover:shadow-black hover:shadow-md  p-3 w-[100px] text-white text-center rounded-lg"
            onClick={() => {
              if (!allDataToPublishReducerState.AboutHouse.description) {
                setSaveindicator("Please enter all fields to continue");
                return;
              }
              setSaveindicator("saving...");
              setTimeout(() => {
                setSaveindicator("saved");
              }, 3000);
            }}
          >
            Save
          </p>
          <p
            className="bg-[#F1E9E9] hover:shadow-black hover:shadow-md p-3 w-[100px] text-black text-center rounded-lg"
            onClick={() => {
              if (!saveIndicator.includes("saved")) {
                setSaveindicator("you have to save before clicking next");
                return;
              }
              navigate("/agent/dashboard/publish-home/houseFeatures");
            }}
          >
            Next
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutHouse;
