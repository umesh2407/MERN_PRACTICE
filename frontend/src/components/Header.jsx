import React from "react";

const Header = () => {
  return (
    <>
      <div className="flex justify-between p-6 bg-slate-900">
        <div className="w-[70px]">
          <img src="https://cdn.dribbble.com/users/1191192/screenshots/4250680/foodie_faster.jpg" />
        </div>
        <div>
          <ul className="flex gap-8 text-lg font-semibold">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
