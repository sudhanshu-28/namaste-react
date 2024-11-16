import React from "react";
import { CDN_URL } from "../../utils/constants";

const ItemLeftContainer = ({ item }) => (
  <div className="flex-[7] space-y-1">
    <div className="font-bold text-gray-600 text-lg">{item?.name}</div>
    <div className="text-gray-900 font-bold">{`₨.${
      (item?.price || item?.defaultPrice) / 100
    }`}</div>
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
    <div className="flex-[2] w-32 h-32 rounded-2xl p-2 flex items-center justify-center relative">
      <img
        src={CDN_URL + cloudinaryImageId}
        alt={item?.name}
        className="w-full h-full object-cover"
      />
      <button className="absolute bottom-0 border border-gray-500 bg-white text-green-500 rounded-md font-bold px-3 py-1.5 shadow-lg text-sm">
        ADD
      </button>
    </div>
  );
};

const MenuItems = (props) => {
  const { item } = props;

  return (
    <div className="flex justify-between items-center pb-4 border-b-2">
      <ItemLeftContainer item={item} />
      <ItemRightContainer item={item} />
    </div>
  );
};

export default MenuItems;
