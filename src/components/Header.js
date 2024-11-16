import { useState, useContext } from "react";
import { Link } from "react-router-dom";

import UserContext from "../utils/UserContext";
import useOnlineStatus from "../utils/useOnlineStatus";

import LOGO_URL from "../assets/images/restaurant.png";

const Header = () => {
  let [btnNameReact, setBtnNameReact] = useState("Login");
  const isOnline = useOnlineStatus();

  // To use Context react provide us function in the form of Hook useContext
  const { loggedInUser } = useContext(UserContext);

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
          <li className="hover:underline cursor-pointer">Cart</li>
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
