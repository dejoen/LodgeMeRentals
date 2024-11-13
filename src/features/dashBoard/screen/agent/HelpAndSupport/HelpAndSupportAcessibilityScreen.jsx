import HelpAndSupportCard from "../../../component/agent/helpandsupport/HelpAndSupportCard";

const  HelpAndSupportAcessibilityScreen = () => {
   return ( <div className="w-full p-5 flex flex-wrap gap-5 justify-center ">
        <HelpAndSupportCard
          title={"Rental Process"}
          body={
            " How to book a property, how the rental process works, and how to find available properties"
          }
        />
        <HelpAndSupportCard
          title={"Pricing & Payments"}
          body={
            " Information on how pricing is determined, payment methods, security deposits, and refunds"
          }
        />
        <HelpAndSupportCard
          title={"Cancellations & Changes:"}
          body={
            " Information on how pricing is determined, payment methods, security deposits, and refunds"
          }
        />
        <HelpAndSupportCard
          title={"Account Management"}
          body={
            " How to book a property, how the rental process works, and how to find available properties"
          }
        />
        <HelpAndSupportCard
          title={"Property Information"}
          body={
            " Explanation of property features, check-in and check-out times, and amenities."
          }
        />
        <HelpAndSupportCard
          title={"Security & Privacy"}
          body={
            " How your data is protected and what security measures are in place for payments."
          }
        />
        <HelpAndSupportCard
          title={"Contact Information"}
          body={"Methods to contact customer service for more help"}
        />
      </div>
   );
}

export default HelpAndSupportAcessibilityScreen