import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLink = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/Wishlist">Wishlist</NavLink>
      </li>
    </>
  );
  return (
    <div className="flex justify-between p-4 bg-green-300">
      {/* Logo Section */}
      <div>
        <h1>Logo</h1>
      </div>
      {/* route section for lg */}
      <div>
        <ul className="list-none flex space-x-2">{navLink}</ul>
      </div>
      {/* route section for sm */}
      {/* <div>
        <ul className="list-none hidden">{navLink}</ul>
      </div> */}
      {/* button  */}
      <div>
        <p>Hello</p>
      </div>
    </div>
  );
};

export default Navbar;
