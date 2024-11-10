import { useState, useEffect } from "react";
import { SWIGGY_RESTAURANT_DETAILS_ENDPOINT } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  const [isFetching, setFetching] = useState(true);

  const fetchData = async () => {
    try {
      const data = await fetch(SWIGGY_RESTAURANT_DETAILS_ENDPOINT + resId);
      const json = await data.json(data);
      setResInfo(json?.data || null);
    } catch (error) {
      setResInfo(null);
    } finally {
      setFetching(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data: resInfo, loading: isFetching };
};

export default useRestaurantMenu;
