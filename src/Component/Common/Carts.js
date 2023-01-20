import React from "react";
import { Card, InputNumber } from "antd";
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import Img from "../../images/web.jpg";
import { useState } from "react";
import { useEffect } from "react";
import { useCallback } from "react";

const { Meta } = Card;

let dummy = [
  { id: 1, name: "hey", description: "hhh", price: "1", quantity: 10 },
  { id: 2, name: "hey", description: "hhh", price: "1", quantity: 10 },
  { id: 3, name: "hey", description: "hhh", price: "1", quantity: 10 },
  { id: 4, name: "hey", description: "hhh", price: "1", quantity: 10 },
];

const CartsCard = () => {
  const [data, setData] = useState(dummy);

  const handleCartChange = useCallback(
    (id, value) => {
      data.map((item) => {
        console.log(item.id, id);
        if (item.id == id) {
          item.quantity = value;
        }
      });
      setData(data);
    },
    [data]
  );
  console.log("render");
  return (
    <React.Fragment>
      <div className="product-card">
        {data.map((item) => {
          return (
            <Card
              style={{ width: 300 }}
              cover={<img alt="example" src={Img} />}
              actions={[
                <ShoppingCartOutlined key="cart" twoToneColor="#677eff" />,
                <HeartOutlined key="like" twoToneColor="#677eff" />,
              ]}
            >
              <Meta
                className="product-content"
                title={item.name}
                description={item.description}
              />
              <div>
                <b>Quantity : </b>
                {item.quantity}
              </div>

              <div>
                <b>Price : </b>
                {item.price}
              </div>

              <InputNumber
                min={0}
                defaultValue={item.quantity}
                width="100%"
                onChange={(value) => {
                  handleCartChange(item.id, value);
                }}
              />
            </Card>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default CartsCard;
