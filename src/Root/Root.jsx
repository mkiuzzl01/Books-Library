import React, { Children } from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";

const Root = () => {
  return (
    <div className="">
      <div>
        <nav className="sticky top-0 z-10">
          {/* this is for navbar */}
          <Navbar></Navbar>
        </nav>
        <main className="min-h-[calc(100vh-250px)]">
          {/* this is for main contain */}
          <Outlet></Outlet>
        </main>
      </div>
      {/* this is for footer */}
      <Footer></Footer>
    </div>
  );
};

export default Root;
