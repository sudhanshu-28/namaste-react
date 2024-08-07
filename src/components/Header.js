import { useState } from "react";
import { Link } from "react-router-dom";

import useOnlineStatus from "../utils/useOnlineStatus";

import { LOGO_URL } from "../utils/constants";

const Header = () => {
  let [btnNameReact, setBtnNameReact] = useState("Login");
  const isOnline = useOnlineStatus();

  return (
    <div className="app-header">
      <div className="logo-container">
        <Link to="/">
          <img src={LOGO_URL} alt="Food Logo" width={180} height={120} />
        </Link>
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status: {isOnline ? "✅" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>Cart</li>
          <li>
            <button
              className="login"
              onClick={() => {
                setBtnNameReact(btnNameReact === "Login" ? "Logout" : "Login");
              }}
            >
              {btnNameReact}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
