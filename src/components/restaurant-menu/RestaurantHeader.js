import React from "react";

const RestaurantHeader = ({ resInfo }) => {
  return (
    <div className="flex justify-between items-baseline">
      <div>
        <div className="text-2xl font-bold">{resInfo?.name}</div>
        <div className="text-md font-bold text-gray-600">
          {`${resInfo?.areaName}, ${resInfo?.locality}`}
        </div>
      </div>
      <div className="text-end">
        <div className="text-md font-bold text-gray-600">{`⁕ ${resInfo?.avgRating} (${resInfo?.totalRatingsString}) - ${resInfo?.costForTwoMessage}`}</div>
        <div className="text-sm font-bold text-gray-600">
          {`Deliver by ${resInfo?.sla?.slaString}`}
        </div>
      </div>
    </div>
  );
};

export default RestaurantHeader;
