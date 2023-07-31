import { Button, Card, Col, Image } from "antd";
import Link from "next/link";
import React from "react";
import {
  ArrowRightOutlined,
  DollarOutlined,
  StarOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
const ProductCard = ({ product }) => {
  const { Meta } = Card;
  return (
    <Col
      key={product.id}
      className="gutter-row "
      span={6}
      xl={6}
      md={12}
      xs={24}
    >
      <Card
        className="mb-6 "
        style={{ height: 550 }}
        hoverable
        cover={
          <Image
            src={product?.image}
            width="100%"
            height={300}
            responsive
            alt="product image"
          />
        }
      >
        <Meta title={product?.productName} />
        <div
          className="line"
          style={{
            height: "2px",
            margin: "15px 0",
            background: "#D3D3D3",
            width: "100%",
          }}
        ></div>
        <p
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            color: "gray",
            margin: "10px 0px",
            fontSize: "12px",
          }}
        >
          <span>{product?.category}</span>
          <span>
            <StarOutlined />
            {product?.averageRating}
          </span>
          <span>{product?.status}</span>
        </p>
        <p style={{ fontSize: "12px" }}>
          {product?.description.length > 100
            ? product?.description.slice(0, 70) + "..."
            : product?.description}
        </p>

        <div
          className="line"
          style={{
            height: "2px",
            margin: "10px 0",
            background: "#D3D3D3",
            width: "100%",
          }}
        ></div>
        <h1 className="text-center"> {product?.price} TK</h1>
        <Link href={`/products/${product._id}`}>
          <button
            style={{
              fontSize: "15px",

              backgroundColor: "black",
              color: "white",
              width: "100%",
              borderRadius: 10,
              padding: "7px 5px ",
              fontWeight: "300",
              letterSpacing: "3px",
              textAlign: "center",
            }}
          >
            Buy Now
            <ArrowRightOutlined />
          </button>
        </Link>
      </Card>
    </Col>
  );
};

export default ProductCard;
