import React, { useState } from "react";
import Header from "../Common/header";
import Footer from "../Common/footer";
import { Card, Col, Row } from "antd";
import ProductCard from "../Common/Products";
import apiInstance from "../Common/apiInstance";
import { useEffect } from "react";

const data = [
  { id: "1", text: "hey", price: "1", quantity: 10 },
  { id: "1", text: "hey", price: "1", quantity: 10 },
  { id: "1", text: "hey", price: "1", quantity: 10 },
  { id: "1", text: "hey", price: "1", quantity: 10 },
];

const Dashboard = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    apiInstance("/product", {
      method: "GET",
    })
      .then((res) => {
        setData(res?.data?.data);
      })
      .catch((err, data) => {});
  }, []);
  return (
    <React.Fragment>
      <Header />
      <div className="content">
        <h1>Dashboard</h1>
        <ProductCard products={data} />
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Dashboard;
