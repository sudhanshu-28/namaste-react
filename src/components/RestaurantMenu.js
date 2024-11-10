import { useParams } from "react-router-dom";

import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const { data, loading } = useRestaurantMenu(resId);

  const resInfo = data?.cards[2]?.card?.card?.info;
  const resItems =
    data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      ?.itemCards || [];

  if (loading) {
    return <Shimmer />;
  }

  return (
    <div className="menu">
      <div className="restaurant-menu-header">
        <h1>{resInfo?.name + "1"}</h1>
        <span>({resInfo?.cuisines && resInfo?.cuisines.join(", ")})</span>
      </div>

      <h3>
        {resInfo?.avgRatingString} ({resInfo?.totalRatingsString}) -{" "}
        {resInfo?.costForTwoMessage}
      </h3>

      <h3>Recommended Menu</h3>
      <ul>
        {resItems?.map((item) => {
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
