import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Shimmer from "./Shimmer";
import RestaurantCard from "./RestaurantCard";

import { SWIGGY_API_ENDPOINT } from "../utils/constants";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredRestaurants, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(SWIGGY_API_ENDPOINT);
      const json = await data.json();
      // Optional Chaining
      const restaurants =
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];
      setListOfRestaurant(restaurants);
      setFilteredRestaurant(restaurants);
    } catch (err) {}
  };

  // Conditional Rendering
  // if (listOfRestaurants.length === 0) {
  //   return <Shimmer />;
  // }

  return filteredRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="app-body">
      <div className="restaurant-header">
        <div className="search-container">
          <input
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              const filteredList = listOfRestaurants.filter((res) =>
                res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <div>
          <button
            className="filter-btn"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (el) => el?.info?.avgRating > 4.2
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="restaurant-container">
        {filteredRestaurants.map((el) => (
          <Link to={"/restaurants/" + el?.info?.id} key={el?.info?.id}>
            <RestaurantCard restaurant={el} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
