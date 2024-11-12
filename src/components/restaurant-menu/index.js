import { useParams } from "react-router-dom";

import Shimmer from "../Shimmer";
import MenuByCategory from "./MenuByCategory";
import RestaurantHeader from "./RestaurantHeader";
import useRestaurantMenu from "../../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const { resInfo, resItems = [], isFetchingData } = useRestaurantMenu(resId);

  if (isFetchingData) {
    return <Shimmer />;
  }

  return (
    <div className="mx-auto max-w-4xl py-4">
      <div className="flex flex-col space-y-6 pt-4">
        <RestaurantHeader resInfo={resInfo} />

        <div>
          {resItems &&
            resItems.map((item) => {
              if (!item?.card?.card?.itemCards) return;

              const title = item?.card?.card?.title;
              const itemCards = item?.card?.card?.itemCards;

              return (
                <MenuByCategory
                  key={title}
                  title={title}
                  categories={itemCards}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
