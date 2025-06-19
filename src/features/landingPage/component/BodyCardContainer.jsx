import BodyCard from "./BodyCard";
import ImageI from "../../../../src/assets/bodyImage1.svg";
import ImageII from "../../../../src/assets/bodyImage2.svg";
import ImageIII from "../../../../src/assets/bodyImage3.png";
import ImageIV from "../../../../src/assets/bodyImage4.svg";
import ImageV from "../../../../src/assets/bodyImage5.svg";

const BodyCardContainer = () => {
  return (
    <div className="mx-auto flex flex-wrap place-items-center justify-center  gap-[130px] w-full md:-space-x-20">
      <BodyCard imageUrl={ImageI} text={"Same great quality. New lower prices."} />
      <BodyCard imageUrl={ImageII} text={"Everyday Essentials, High quality affordable "} />
      <BodyCard imageUrl={ImageIII} text={"Seal the deal through to our peer to peer communication channel."} />
      <BodyCard imageUrl={ImageIV} text={"24/7 Online Support anytime any day"} />
      <BodyCard imageUrl={ImageV} text={"Join the makeover journey."} />
    </div>
  );
};

export default BodyCardContainer;
