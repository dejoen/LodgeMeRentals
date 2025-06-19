import { useState } from "react";
import FaqCard from "../landingPage/component/FaqCard";

const BuyingAProperty = () => {
  const [seeMore, setSeeMore] = useState({
    cardOne: false,
    cardTwo: false,
  });
  return (
    <div className="w-full flex flex-col place-items-center gap-3 mt-4 ">
      <div className="font-nunito place-self-start  ms-2 font-bold md:place-self-center">Buying A Property</div>

      <FaqCard
        title={"How do I search for properties?"}
        body={
          "You can search for properties using our advanced search tool. Filter results by location, price range, property type, and other criteria to find the perfect home or investment."
        }
        makeVisible={seeMore.cardOne}
        onClick={() => {
          setSeeMore((prev) => {
            return {
              ...prev,
              cardOne: !seeMore.cardOne,
            };
          });
        }}
      />

      <FaqCard
        title={"Can I schedule a property tour? "}
        body={
          "Yes, you can schedule property tours directly through our website. Once you find a property you’re interested in, click on the “Schedule a Tour” button and choose a convenient time."
        }
        makeVisible={seeMore.cardTwo}
        onClick={() => {
          setSeeMore((prev) => {
            return {
              ...prev,
              cardTwo: !seeMore.cardTwo,
            };
          });
        }}
      />

      <FaqCard
        title={"What are the steps to buying a property? "}
        body={`1.Search for properties and schedule tours. \n
     2.Make an offer on the property you like. \n
        3.Get your offer accepted and sign the purchase agreement.   \n
        4.Complete the necessary inspections and appraisals. \n 
        5.Finalize your mortgage or financing.Close the deal and move into your new home. `}
        makeVisible={seeMore.cardThree}
        onClick={() => {
          setSeeMore((prev) => {
            return {
              ...prev,
              cardThree: !seeMore.cardThree,
            };
          });
        }}
      />
    </div>
  );
};

export default BuyingAProperty;
