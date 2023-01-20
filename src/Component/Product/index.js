import React, { useEffect, useState } from "react";
import Header from "../Common/header";
import Footer from "../Common/footer";
import ProductCard from "../Common/Products";
import apiInstance from "../Common/apiInstance";
import { Input, Space } from "antd";
const { Search } = Input;

const Product = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    apiInstance("/product", {
      method: "GET",
      params: {
        name: search,
      },
    })
      .then((res) => {
        setData(res?.data?.data);
      })
      .catch((err, data) => {});
  }, [search]);
  const onSearch = (search) => {
    console.log(search, "search");
    setSearch(search);
  };
  console.log(search, "seach");
  return (
    <React.Fragment>
      <Header />
      <div className="content">
        <h1>Product</h1>
        <div className="product-search">
          <Search
            placeholder="Search Product"
            allowClear
            enterButton="Search"
            size="large"
            onSearch={onSearch}
          />
        </div>

        <ProductCard products={data} />
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Product;
