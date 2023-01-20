import React from "react";
import Header from "../Common/header";
import Footer from "../Common/footer";
import CartsCard from "../Common/Carts";
const Cart = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="content">
        <h1>Cart</h1>
        <CartsCard />
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Cart;
