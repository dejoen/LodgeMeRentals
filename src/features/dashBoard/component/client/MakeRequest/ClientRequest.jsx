//import { MapPin } from "lucide-react"
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
export default function ClientRequest() {
  const navigate = useNavigate();
  return (
    <div>
      <div
        className="md:ml-12 md:pt-8 pt-5 ml-6 "
        onClick={() => {
          navigate("/client/dashboard");
        }}
      >
        <ArrowLeft />
      </div>
      <div className="w-[90%] mx-auto pt-6 md:pt-10">
        <h2 className="font-bold text-2xl md:text-3xl">Tell us what you are looking for</h2>
        <p className="py-1 font-semibold text-sm">
          {" "}
          Easily let us know what you are looking for in a rental home. Share your preferences like location, budget,
          and features, and we&apos;ll find options tailored just for you. Start your search with a single click!
        </p>

        <form className="py-5 space-y-5">
          <div className="flex flex-col gap-2">
            <label className="text-lg font-semibold"> Location</label>
            <div className="flex md:space-x-8  flex-wrap gap-4  md:gap-0">
              <input
                type="text"
                placeholder=" State"
                className="outline-none  bg-transparent px-2 py-2 border-gray-700 border md:w-[10%] w-[30%] rounded-lg"
              />
              <input
                type="text"
                placeholder="Local Government "
                className="outline-none  bg-transparent px-2 py-2 border-gray-700 border md:w-[15%] rounded-lg"
              />
              <input
                type="text"
                placeholder=" Enter Area"
                className="outline-none  bg-transparent px-2 py-2 border-gray-700 border md:w-[25%] rounded-lg"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-lg font-semibold"> Budget</label>
            <div className="flex md:space-x-8  flex-wrap gap-4  md:gap-0">
              <input
                type="number"
                placeholder=" Minimum Budget"
                className="outline-none  bg-transparent px-2 py-2 border-gray-700 border md:w-[15%] w-[40%]  rounded-lg"
              />
              <input
                type="number"
                placeholder="Maximum Budget "
                className="outline-none  bg-transparent px-2 py-2 border-gray-700 border md:w-[15%] w-[50%] rounded-lg"
              />
              <input
                type="number"
                placeholder=" Rent Timeframe"
                className="outline-none  bg-transparent px-2 py-2 border-gray-700 border md:w-[15%] rounded-lg"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-lg font-semibold"> Property Type</label>
            <div className="flex md:space-x-8  flex-wrap gap-4  md:gap-0">
              <input
                type="text"
                placeholder=" Apartment Type"
                className="outline-none  bg-transparent px-2 py-2 border-gray-700 border md:w-[15%] rounded-lg"
              />
              <input
                type="number"
                placeholder="Number of Rooms "
                className="outline-none  bg-transparent px-2 py-2 border-gray-700 border md:w-[20%] rounded-lg"
              />
              <input
                type="number"
                placeholder=" Number of Toilets"
                className="outline-none  bg-transparent px-2 py-2 border-gray-700 border w-[30%] rounded-lg"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-lg font-semibold"> Duration Of Stay</label>
            <div className="flex space-x-8">
              <input
                type="date"
                placeholder=" Select Duration"
                className="outline-none  bg-transparent px-2 py-2 border-gray-700 border md:w-[10%] rounded-lg"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-lg font-semibold"> Additional Description</label>
            <div className="flex space-x-8">
              <textarea
                type="text"
                placeholder=" Write a note"
                className="outline-none  bg-transparent px-2 py-2 border-gray-700 border w-full md:w-[60%] h-[60%] rounded-lg"
              />
            </div>
          </div>

          <div className="flex justify-end text-gray-100  ">
            <button className="bg-requestBtn px-6 rounded-lg py-2">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
