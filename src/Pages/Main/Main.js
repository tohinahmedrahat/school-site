import React from "react";
import { Outlet } from "react-router-dom";
import Navber from "../Share/Navber/Navber";
import Footer from "../Share/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Navber />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
