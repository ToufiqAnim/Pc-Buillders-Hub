import { addComponents } from "@/redux/features/selectPcParts";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, Col } from "antd";
import Link from "next/link";

import {
  ArrowRightOutlined,
  DollarOutlined,
  StarOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
export const SelectedProduct = ({ product }) => {
  const { Meta } = Card;
  const dispatch = useDispatch();
  const router = useRouter();

  const onClickHandle = () => {
    dispatch(addComponents(product));
    router.back();
  };
  const { selectedComponents } = useSelector((state) => state.selectComponent);
  const selected = selectedComponents.find((item) => item._id === product._id);

  const outOfStock = product?.category === "Out of Stock";

  return (
    <Col key={product.id} className="gutter-row " span={6}>
      <Card
        className="mb-6 "
        style={{ height: 550 }}
        hoverable
        cover={
          <Image
            src={product?.image}
            width={300}
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

        {selected ? (
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
            Selected
          </button>
        ) : (
          <button
            disabled={outOfStock}
            onClick={onClickHandle}
            className="mx-auto container py-2 font-bold text-sm"
          >
            Add
          </button>
        )}
      </Card>
    </Col>
  );
};
