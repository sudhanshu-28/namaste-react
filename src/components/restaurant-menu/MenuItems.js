import React from "react";
import { CDN_URL } from "../../utils/constants";

const ItemLeftContainer = ({ item }) => (
  <div className="flex-[7] space-y-1">
    <div className="font-bold text-gray-600 text-lg">{item?.name}</div>
    <div className="text-gray-900 font-bold">{`₨.${item?.price / 100}`}</div>
    {item?.ratings?.aggregatedRating?.rating && (
      <div className="text-sm font-bold space-x-1">
        <span className="text-green-800">{`⁕ ${item?.ratings?.aggregatedRating?.rating}`}</span>
        <span className="text-gray-500">
          ({item?.ratings?.aggregatedRating?.ratingCountV2})
        </span>
      </div>
    )}

    <div className="line-clamp-2 text-gray-500 pr-6">{item?.description}</div>
  </div>
);

const ItemRightContainer = ({ item }) => {
  const cloudinaryImageId = item?.imageId;

  return (
    <div className="flex-[2] w-32 h-32 rounded-2xl p-2">
      <img
        src={CDN_URL + cloudinaryImageId}
        alt={item?.name}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

const MenuItems = (props) => {
  const { item } = props;

  return (
    <div>
      <div className="flex justify-between items-center py-4">
        <ItemLeftContainer item={item} />
        <ItemRightContainer item={item} />
      </div>
    </div>
  );
};

export default MenuItems;
