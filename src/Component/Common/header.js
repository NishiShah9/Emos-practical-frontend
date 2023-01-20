import React from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../Common/constant";
const Header = () => {
  return (
    <div className="header d-flex">
      <div className="nav-header">
        <NavLink exact to={ROUTES.DASHBOARD} className="color-black">
          Home
        </NavLink>
      </div>
      <div className="nav-header">
        <NavLink to={ROUTES.PRODUCT} className="color-black">
          Products
        </NavLink>
      </div>
      <div className="nav-header ">
        <NavLink to={ROUTES.CART} className="color-black">
          Cart
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
