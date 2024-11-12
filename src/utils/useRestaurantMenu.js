import { useState, useEffect } from "react";
import { SWIGGY_RESTAURANT_DETAILS_ENDPOINT } from "./constants";

const useRestaurantMenu = (resId) => {
  const [responseData, setResponseData] = useState(null);
  const [isFetchingData, setFetchingData] = useState(true);

  const resInfo = responseData?.cards[2]?.card?.card?.info;
  const resItems =
    responseData?.cards[4]?.groupedCard?.cardGroupMap.REGULAR?.cards || [];

  const fetchData = async () => {
    try {
      const data = await fetch(SWIGGY_RESTAURANT_DETAILS_ENDPOINT + resId);
      const json = await data.json(data);
      setResponseData(json?.data || null);
    } catch (error) {
      setResponseData(null);
    } finally {
      setFetchingData(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { resInfo, resItems, isFetchingData };
};

export default useRestaurantMenu;
