import RestaurantCard from "./RestaurantCard";
import { restaurantsList } from "../utils/mockData";

const Body = () => {
  return (
    <div className="app-body">
      <div className="search-container">
        <input type="search" />
        <button type="submit">Search</button>
      </div>
      <div className="restaurant-container">
        {restaurantsList.map((el) => (
          <RestaurantCard key={el?.info?.id} restaurant={el} />
        ))}
      </div>
    </div>
  );
};

export default Body;
