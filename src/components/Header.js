import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  let [btnNameReact, setBtnNameReact] = useState("Login");

  return (
    <div className="app-header">
      <div className="logo-container">
        <img src={LOGO_URL} alt="Food Logo" width={180} height={120} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
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
