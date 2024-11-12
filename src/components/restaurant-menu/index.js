import { useState } from "react";
import { useParams } from "react-router-dom";

import Shimmer from "../Shimmer";
import MenuByCategory from "./MenuByCategory";
import RestaurantHeader from "./RestaurantHeader";
import useRestaurantMenu from "../../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const { resInfo, resItems = [], isFetchingData } = useRestaurantMenu(resId);
  const [activeItemId, setActiveItemId] = useState(0);
  const filteredResItems = resItems.filter((res) => res?.card?.card?.itemCards);

  if (isFetchingData) {
    return <Shimmer />;
  }

  return (
    <div className="mx-auto max-w-4xl py-4">
      <div className="flex flex-col space-y-6 pt-4">
        <RestaurantHeader resInfo={resInfo} />

        <div>
          {filteredResItems &&
            filteredResItems.map((item, index) => {
              const title = item?.card?.card?.title;
              const itemCards = item?.card?.card?.itemCards;

              return (
                <MenuByCategory
                  key={title}
                  title={title}
                  categories={itemCards}
                  isActiveCategory={activeItemId === index}
                  setCategoryActive={() =>
                    setActiveItemId(activeItemId === index ? null : index)
                  }
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
