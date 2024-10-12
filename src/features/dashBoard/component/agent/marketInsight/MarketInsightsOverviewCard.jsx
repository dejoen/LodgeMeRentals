import PropTypes from "prop-types";

const MarketInsightsOverviewCard = ({ header, bodyOne, bodyTwo, percentage }) => {
  return (
    <div className="w-[300px] h-[150px] border border-opacity-80 rounded-md">
      <p>
        {header}
      </p>
      <div>
        <p>

          {bodyOne}
        </p>
      </div>

      <div>
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
  percentage:PropTypes.string.isRequired
};

export default MarketInsightsOverviewCard;
