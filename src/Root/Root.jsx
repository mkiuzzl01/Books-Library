import React, { Children } from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <main className="max-w-7xl m-auto">
        <nav>
          <Navbar></Navbar>
        </nav>
        <Outlet></Outlet>
      </main>
      <footer></footer>
    </div>
  );
};

export default Root;
