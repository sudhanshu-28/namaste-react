import { useState, useContext } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

import cartIcon from "../assets/icons/cart.svg";

import UserContext from "../utils/UserContext";
import useOnlineStatus from "../utils/useOnlineStatus";

import LOGO_URL from "../assets/images/restaurant.png";

const Header = () => {
  let [btnNameReact, setBtnNameReact] = useState("Login");
  const isOnline = useOnlineStatus();

  // To use Context react provide us function in the form of Hook useContext
  const { loggedInUser } = useContext(UserContext);

  // Subscribed to Redux store using Selector
  const { items = [] } = useSelector((state) => state?.cart);

  const totalItemsCount = items.reduce((total, item) => {
    if (item?.card?.quantity) {
      total = total + item.card.quantity;
      return total;
    }
  }, 0);

  return (
    <div className="fixed top-0 left-0 right-0 z-10 flex items-center justify-between h-16 px-5 shadow-lg lg:bg-slate-200 md:bg-green-200 sm:bg-yellow-200">
      <Link to="/">
        <img src={LOGO_URL} alt="Food Logo" className="w-12" />
      </Link>
      <div>
        <ul className="flex space-x-10 font-bold text-gray-600 items-center">
          <li className="flex space-x-2">
            <p className="hover:underline">Online Status:</p>
            <p>{isOnline ? "✅" : "🔴"}</p>
          </li>
          <li>
            <Link to="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:underline">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:underline">
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/grocery" className="hover:underline">
              Grocery
            </Link>
          </li>
          <li className="hover:underline">
            <Link to={"./cart"} className="relative flex">
              <LazyLoadImage
                alt="cart"
                src={cartIcon}
                className="rounded-lg w-6 h-6"
              />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">
                {totalItemsCount || 0}
              </span>
            </Link>
          </li>
          <li>
            <button
              className="border border-gray-500 rounded-lg bg-white px-4 py-2 hover:bg-gray-500 hover:text-white"
              onClick={() => {
                setBtnNameReact(btnNameReact === "Login" ? "Logout" : "Login");
              }}
            >
              {btnNameReact}
            </button>
          </li>
          <li className="font-bold text-black cursor-pointer">
            {loggedInUser}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
