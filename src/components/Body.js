import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Shimmer from "./Shimmer";
import RestaurantCard from "./RestaurantCard";
import useOnlineStatus from "../utils/useOnlineStatus";

import { SWIGGY_API_ENDPOINT } from "../utils/constants";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredRestaurants, setFilteredRestaurant] = useState([]);

  const getOnlineStatus = useOnlineStatus();

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

  if (!getOnlineStatus) {
    return (
      <h1>
        Could not able to connect to Internet to fetch the data. Please check
        your Internet connection.
      </h1>
    );
  }

  return filteredRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="m-4 p-4">
      <div className="flex justify-between">
        <div className="flex space-x-2">
          <input
            type="text"
            placeholder="Search..."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            className="border border-black rounded-md shadow-lg p-0.5"
          />
          <button
            className="border rounded-lg border-black bg-gray-500 text-white p-1 px-4"
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
            className="border rounded-lg border-black bg-gray-500 text-white p-1 px-4"
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

      <div className="grid grid-cols-5 gap-4 gap-y-8 mt-8">
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
