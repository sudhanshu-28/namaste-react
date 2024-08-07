import { useParams } from "react-router-dom";

import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);
  if (resInfo === null) return <Shimmer />;

  const {
    name,
    cuisines,
    costForTwoMessage,
    avgRatingString,
    totalRatingsString,
  } = resInfo?.cards[2]?.card?.card?.info;

  const { itemCards = [] } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  // console.log("SSR itemCards => ", itemCards);

  return (
    <div className="menu">
      <div className="restaurant-menu-header">
        <h1>{name}</h1>
        <span>({cuisines.join(", ")})</span>
      </div>

      <h3>
        {avgRatingString} ({totalRatingsString}) - {costForTwoMessage}
      </h3>

      <h3>Recommended Menu</h3>
      <ul>
        {itemCards?.map((item) => {
          const itemId = item?.card?.info?.id;
          const itemName = item?.card?.info?.name;
          const itemPrice = Number(item?.card?.info?.price / 100);

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
