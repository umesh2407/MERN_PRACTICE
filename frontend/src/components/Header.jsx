import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/restaurant-logo.png"

const Header = () => {
  return (
    <>
      <div className="flex justify-between p-6 bg-slate-900 text-white">
        <div className="w-[70px]">
          <img src={logo} />
        </div>
        <div>
          <ul className="flex gap-8 text-lg font-semibold">
          <Link to="/">  <li>Home</li></Link>
           <Link to="/aboutus"> <li>About Us</li></Link>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
