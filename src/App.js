import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { ROUTES } from "./Common/constant";
import Dashboard from "./Component/Dashboard/index";

import Page404 from "./Component/Common/404page";
import "antd/dist/antd.css";
import { Layout, Menu } from "antd";
import Product from "./Component/Product";
import Cart from "./Component/Cart";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={ROUTES.DASHBOARD} component={Dashboard} />
        <Route exact path={ROUTES.PRODUCT} component={Product} />
        <Route exact path={ROUTES.CART} component={Cart} />
        <Route component={Page404} />
      </Switch>
    </Router>
  );
};

export default App;
