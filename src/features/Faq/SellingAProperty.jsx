import { useState } from "react";
import FaqCard from "../landingPage/component/FaqCard";

const SellingAProperty = () => {
  const [seeMore, setSeeMore] = useState({
    cardOne: false,
    cardTwo: false,
  });
  return (
    <div className="w-full flex flex-col place-items-center gap-3 mt-4 ">
      <div className="font-nunito place-self-start  ms-2 font-bold md:place-self-center">Selling A Property</div>

      <FaqCard
        title={"How do I list my property for sale?"}
        body={
          "To list your property for sale, click on the “List Your Property” button on our website. Follow the instructions to provide details about your property, upload photos, and set your asking price."
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
        title={"What are the costs associated with selling a property?"}
        body={
          "The costs of selling a property may include agent commissions, closing costs, and any necessary repairs or upgrades to make your property market-ready. Our team will provide you with a detailed breakdown of these costs."
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
        title={"How do I determine the value of my property?"}
        body={`Our experienced agents will conduct a market analysis to determine the value of your property. Factors such as location, property condition, and current market trends will be considered to provide you with an accurate valuation.`}
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

export default SellingAProperty;
