import PropTypes from "prop-types";

const MarketInsightsOverviewCard = ({ header, bodyOne, bodyTwo, percentage }) => {
  return (
    <div className="w-[300px] h-[130px] shadow-black shadow-md border border-opacity-80 rounded-xl ps-3">
      <div className="w-full flex ">
        <p className="w-[90%]">{header}</p>
        <p className="">{"..."}</p>
      </div>

      <div className="mt-4 font-bold ">
        <p>{bodyOne}</p>
      </div>

      <div className="mt-10">
        <p>
          <span className="text-green-700 text-sm">{percentage}</span>
          {bodyTwo}
        </p>
      </div>
    </div>
  );
};

MarketInsightsOverviewCard.propTypes = {
  header: PropTypes.string.isRequired,
  bodyOne: PropTypes.string.isRequired,
  bodyTwo: PropTypes.string.isRequired,
  percentage: PropTypes.string.isRequired,
};

export default MarketInsightsOverviewCard;
