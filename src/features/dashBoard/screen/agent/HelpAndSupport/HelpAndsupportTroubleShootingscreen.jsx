import HelpAndSupportCard from "../../../component/agent/helpandsupport/HelpAndSupportCard";

const HelpAndSupportTroubleShootingScreen = () => {
  return (
    <div className="w-full p-5 flex flex-wrap gap-5 justify-center ">
      <HelpAndSupportCard
        title={"Booking Issues"}
        body={"step-by-step guides on what to do if you encounter a problem during booking."}
      />
      <HelpAndSupportCard title={"Payment Issues"} body={" Common payment problems and how to resolve them."} />
      <HelpAndSupportCard
        title={"Technical Issues"}
        body={" Help with website or app functionality issues, such as login problems."}
      />
      <HelpAndSupportCard title={"Live Chat"} body={" A link to chat with a customer support agent"} />
    </div>
  );
};

export default HelpAndSupportTroubleShootingScreen;
