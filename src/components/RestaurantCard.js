import { useContext } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import UserContext from "../utils/UserContext";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { restaurant } = props;

  const { loggedInUser } = useContext(UserContext);

  const { cloudinaryImageId, name, avgRating, cuisines, locality, sla } =
    restaurant?.info;

  return (
    <div className="h-auto shadow-md hover:shadow-xl">
      <LazyLoadImage
        alt={name}
        src={CDN_URL + cloudinaryImageId}
        className="rounded-lg w-72 h-56 object-cover"
      />
      <div className="p-3 py-4 flex flex-col space-y-1">
        <h3 className="text-lg truncate">{name}</h3>
        <div className="flex justify-between text-gray-600 text-sm">
          <h4>{`${avgRating} stars`}</h4>
          <h4>{sla?.slaString}</h4>
        </div>
        <div className="text-gray-600 text-sm space-y-1">
          <div className="truncate">{cuisines.join(", ")}</div>
          <div className="truncate">{locality}</div>
          <div>{loggedInUser}</div>
        </div>
      </div>
    </div>
  );
};

// High Order Component - HOC
export const withPromotedRestaurant = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <label
          htmlFor="promoted"
          className="absolute bg-white text-black text-sm rounded-md p-[3px] right-3 top-2"
        >
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
