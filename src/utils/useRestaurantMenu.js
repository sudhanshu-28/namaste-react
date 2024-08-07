import { useEffect, useState } from "react";
import { SWIGGY_RESTAURANT_DETAILS_ENDPOINT } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_RESTAURANT_DETAILS_ENDPOINT + resId);
    const json = await data.json();
    setResInfo(json?.data || null);
  };

  return resInfo;
};

export default useRestaurantMenu;
