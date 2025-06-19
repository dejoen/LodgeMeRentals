/* eslint-disable react/prop-types */
import { Send } from "lucide-react";
const BodyCard = (props) => {
  return (
    <div className="h-[300px] md:w-[320px] md:m-3 my-8">
      <img src={props.imageUrl} />
      <div
        className="bg-[#FFC839] px- h-20 flex place-items-center justify-items-center   gap-2 
   "
      >
        <p className="bg-white rounded-full m-2 p-2 hover:text-[#FFC839]">
          {" "}
          <Send className="size-5" />
        </p>
        <p className="pr-1">{props.text}</p>
      </div>
    </div>
  );
};

export default BodyCard;
