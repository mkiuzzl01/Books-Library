import React, { Children } from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";

const Root = () => {
  return (
    <div className="">
      <div>
        <nav className="sticky top-0 z-10">
          <Navbar></Navbar>
        </nav>
        <main className="min-h-[calc(100vh-180px)]">
        <Outlet></Outlet>
        </main>
      </div>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Root;
