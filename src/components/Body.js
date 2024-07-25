import { useEffect, useState } from "react";

import RestaurantCard from "./RestaurantCard";

import { SWIGGY_API_ENDPOINT } from "../utils/constants";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(SWIGGY_API_ENDPOINT);
      const json = await data.json();
      const restaurants =
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];
      setListOfRestaurant(restaurants);
    } catch (err) {}
  };

  return (
    <div className="app-body">
      <div className="restaurant-header">
        <div className="search-container">
          <input type="search" />
          <button className="search-btn">Search</button>
        </div>
        <div>
          <button
            className="filter-btn"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (el) => el?.info?.avgRating > 4.2
              );
              setListOfRestaurant(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="restaurant-container">
        {listOfRestaurants.map((el) => (
          <RestaurantCard key={el?.info?.id} restaurant={el} />
        ))}
      </div>
    </div>
  );
};

export default Body;
