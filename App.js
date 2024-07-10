import React from "react";
import ReactDOM from "react-dom/client";

import { restaurantsList } from "./mock";

import "./index.css";

const Header = () => {
  return (
    <div className="app-header">
      <div className="logo-container">
        <img
          src="https://static.vecteezy.com/system/resources/previews/004/312/696/original/food-logo-template-design-icon-illustration-vector.jpg"
          alt="Food Logo"
          width={180}
          height={120}
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { restaurant } = props;

  const { cloudinaryImageId, name, avgRatingString, cuisines, locality, sla } =
    restaurant?.info;

  const imageUrl = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`;

  return (
    <div className="restaurant-card">
      <img src={imageUrl} alt={name} className="restuarant-logo" />
      <h3>{name}</h3>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h4>{`${avgRatingString} stars`}</h4>
        <h4>{sla?.slaString}</h4>
      </div>
      <div>
        <span>{cuisines.join(", ")}</span>
        <br />
        <span>{locality}</span>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="app-body">
      <div className="search-container">
        <input type="search" name="" id="" />
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

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
