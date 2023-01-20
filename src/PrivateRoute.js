import React from "react";
import { Redirect, Route } from "react-router-dom";
import {  ROUTES } from "./Common/constant";
const PrivateRoute = ({ component: Component, ...rest }) => {
  // const isToken = localStorage.getItem(TOKEN);
  return <Route {...rest} render={(props) => <Component {...props} />} />;
};
export default PrivateRoute;
