import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenuAlt1 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  
  useEffect(() => {
    //handle the small menubar for largest device;
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
  }, []);

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
    <div>
      <div className="z-10 flex relative items-center justify-between p-3 lg:p-5 bg-[#B7B7B7] text-black">
        {/* Logo Section */}
        <div className="lg:w-1/4 flex gap-2 items-center">
          <div onClick={() => setOpen(!isOpen)} className="block lg:hidden">
            {isOpen ? <RxCross2></RxCross2> : <HiMenuAlt1></HiMenuAlt1>}
          </div>
          <h1 className="text-md lg:text-xl font-bold">Books Library</h1>
        </div>

        {/* this navbar for lg */}
        <div className="lg:w-1/2 hidden lg:block">
          <ul className="justify-center list-none flex space-x-2">{navLink}</ul>
        </div>
        <div className="lg:w-1/4 flex justify-end">
          <p>demon.location</p>
        </div>
      </div>

      {/* this is navbar for small device  */}
      <div
        className={`${
          isOpen ? "translate-x-0 " : "-translate-x-full"
        } absolute z-20 w-3/4 md:w-1/2 transition-transform duration-300 ease-in-out`}
      >
        <ul
          onClick={() => setOpen(!isOpen)}
          className="flex flex-col gap-2  ps-5 bg-[#B7B7B7] h-[calc(100vh-48px)] rounded-e-sm "
        >
          {navLink}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
