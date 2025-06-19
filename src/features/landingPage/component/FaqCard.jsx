/* eslint-disable react/prop-types */
import faqIcon from "../../../assets/faqicon.svg";

import faqIconMore from "../../../assets/viewmore.svg";

const FaqCard = (props) => {
  return (
    <div className=" font-nunito w-full rounded-md md:w-[50%] border border-black  border-opacity-40  p-2">
      <div className="flex">
        <img className="w-[40px] h-[20px]" src={props.makeVisible ? faqIcon : faqIconMore} onClick={props.onClick} />

        <div>
          <p className="flex font-bold ms-1">{props.title}</p>
          {props.makeVisible ? <p className={`text-justify`}>{props.body}</p> : ""}
        </div>
      </div>
    </div>
  );
};

export default FaqCard;
