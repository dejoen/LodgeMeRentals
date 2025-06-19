import HelpAndSupportCard from "../../../component/agent/helpandsupport/HelpAndSupportCard";

const HelpAndSupportPoliciesScreen = () => {
  return (
    <div className="w-full p-5 flex flex-wrap gap-5 justify-center ">
      <HelpAndSupportCard title={"Terms & Conditions"} body={" Overview of the legal aspects of using the platform."} />
      <HelpAndSupportCard title={"Privacy Policy:"} body={"Details on how user information is handled."} />
      <HelpAndSupportCard title={"Refund Policy"} body={" Explanation of how and when users can get refunds"} />
      <HelpAndSupportCard title={"Live Chat"} body={"A link to chat with a customer support agent"} />
    </div>
  );
};

export default HelpAndSupportPoliciesScreen;
