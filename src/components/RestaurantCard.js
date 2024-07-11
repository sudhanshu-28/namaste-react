import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { restaurant } = props;

  const { cloudinaryImageId, name, avgRating, cuisines, locality, sla } =
    restaurant?.info;

  return (
    <div className="restaurant-card">
      <img
        src={CDN_URL + cloudinaryImageId}
        alt={name}
        className="restuarant-logo"
      />
      <h3>{name}</h3>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h4>{`${avgRating} stars`}</h4>
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

export default RestaurantCard;
