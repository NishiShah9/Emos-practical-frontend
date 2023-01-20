import React from "react";
import { Card } from "antd";
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import Img from "../../images/web.jpg";

const { Meta } = Card;

const ProductCard = ({ products }) => {
  console.log(products, "products");
  return (
    <React.Fragment>
      <div className="product-card">
        {products?.map((item) => {
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
              {/* <InputNumber
                min={0}
                defaultValue={0}
                width="100%"
                // onChange={(value) => {
                //   setCurrentValue(value);
                // }}
              /> */}
            </Card>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default ProductCard;
