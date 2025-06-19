import { useState } from "react";
import FaqCard from "../landingPage/component/FaqCard";

const RentingAProperty = () => {
  const [seeMore, setSeeMore] = useState({
    cardOne: false,
    cardTwo: false,
  });
  return (
    <div className="w-full flex flex-col place-items-center gap-3 mt-4 ">
      <div className="font-nunito place-self-start  ms-2 font-bold md:place-self-center">Renting A Property</div>

      <FaqCard
        title={"How do I apply to rent a property?"}
        body={
          "To apply for a rental property, click on the “Apply Now” button on the property listing. Fill out the application form and submit any required documents, such as proof of income and references."
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
        title={"What is included in the rental application process? "}
        body={
          "The rental application process typically includes a background check, credit check, and verification of income and rental history. Our team will review your application and get back to you promptly."
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
        title={"Can I renew my lease? "}
        body={`Lease renewals depend on the property owner’s policies. If you’re interested in renewing your lease, contact us, and we will assist you with the renewal process. `}
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

export default RentingAProperty;
