import { string } from "prop-types";

const UserProfileLegitimacyCard = ({ title, icon }) => {
  return (
    <div className=" font-nunito min-w-[300px] bg-[#BB7655] min-h-[80px] rounded-md flex justify-center place-items-center">
      <div className="text-white flex justify-center place-items-center gap-2">
        <img src={icon} />
        <p className="font-bold">{title}</p>
      </div>
    </div>
  );
};

UserProfileLegitimacyCard.propTypes = {
  title: string,
  icon: string,
};

export default UserProfileLegitimacyCard;
