import React, { Children } from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <main className="">
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
