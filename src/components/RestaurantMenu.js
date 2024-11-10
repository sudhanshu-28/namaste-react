import { useParams } from "react-router-dom";

import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { getValidItemPrice } from "../utils/helper";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const { resInfo, resItems, isFetchingData } = useRestaurantMenu(resId);

  if (isFetchingData) {
    return <Shimmer />;
  }

  return (
    <div className="menu">
      <div className="restaurant-menu-header">
        <h1>{resInfo?.name}</h1>
        <span>({resInfo?.cuisines && resInfo?.cuisines.join(", ")})</span>
      </div>

      <h3>
        {resInfo?.avgRatingString} ({resInfo?.totalRatingsString}) -{" "}
        {resInfo?.costForTwoMessage}
      </h3>

      <h3>Recommended Menu</h3>
      <ul>
        {resItems?.map((item) => {
          console.log(item);
          const itemId = item?.card?.info?.id;
          const itemName = item?.card?.info?.name;
          const itemPrice = getValidItemPrice(item?.card?.info);

          return (
            <li key={itemId}>
              {itemName} - ₹{itemPrice}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
