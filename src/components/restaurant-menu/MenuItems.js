import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { addItem, clearCart, removeItem } from "../../store/cartSlice";
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
  const { resId } = useParams();
  const cloudinaryImageId = item?.imageId;

  const dispatch = useDispatch();
  const { items = [], resId: activeResId } = useSelector(
    (state) => state?.cart
  );

  const isItemInCart = items.find((el) => el?.itemId === item?.id);

  const controlBtnStyle = "flex items-center justify-center space-x-5";
  const addBtnStyle =
    "absolute bottom-0 border border-gray-500 bg-white text-green-500 rounded-md font-bold px-3 py-1.5 shadow-lg text-sm ";

  const RESTAURANT_CHANGE_ALERT_TEXT =
    "Your cart contains items from other restaurant. Would you like to reset your cart for adding items from this restaurant?";

  const handleAddItem = () => {
    if (items.length !== 0 && activeResId !== resId) {
      if (confirm(RESTAURANT_CHANGE_ALERT_TEXT)) {
        // Dispatch an Action
        dispatch(clearCart());
        dispatch(addItem({ item, resId }));
      }
    } else {
      dispatch(addItem({ item, resId })); // Dispatch an Action
    }
  };

  const handleRemoveItem = () => {
    dispatch(removeItem({ item }));
  };

  return (
    <div className="flex-[2] w-32 h-32 rounded-2xl p-2 flex items-center justify-center relative">
      <img
        src={CDN_URL + cloudinaryImageId}
        alt={item?.name}
        className="w-full h-full object-cover"
      />
      {isItemInCart ? (
        <div className={addBtnStyle + controlBtnStyle}>
          <button onClick={handleRemoveItem}>-</button>
          <button disabled>{isItemInCart?.quantity || 0}</button>
          <button onClick={handleAddItem}>+</button>
        </div>
      ) : (
        <div className={addBtnStyle}>
          <button onClick={handleAddItem}>ADD</button>
        </div>
      )}
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
