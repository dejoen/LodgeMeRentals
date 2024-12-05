import UserProfileLegitimacyCard from "../../../component/agent/userProfile/UserProfileLegitimacyCard";

const UserProfileLegitimacyScreen = () => {
  return (
    <div className=" font-nunito w-full flex flex-wrap gap-5 justify-center">
      {[
        {
          title: "Trust Score",
          icon: ""
        },
        {
          title: "Address Verification",
          icon: ""
        },
        {
          title: "ID Verification",
          icon: ""
        },
        {
          title: "Testimonials",
          icon: ""
        },
        {
          title: "Compliance with law",
          icon: ""
        },
        {
          title: "Certifications",
          icon: ""
        }
      ].map((item, index) => <UserProfileLegitimacyCard title={item.title} icon={item.icon}  key={index} />)}
    </div>
  );
};

export default UserProfileLegitimacyScreen;
