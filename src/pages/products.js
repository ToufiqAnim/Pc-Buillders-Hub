import React, { ReactElement } from "react";
import ProductCard from "@/components/UI/ProductCard";
import { Row } from "antd";

const Products = ({ products }) => {
  return (
    <div className="px-5 mx-auto my-8">
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
        className=""
      >
        {products.map((product) => (
          <ProductCard key={product?._id} product={product} />
        ))}
      </Row>
    </div>
  );
};

export default Products;

export const getStaticProps = async () => {
  const res = await fetch("https://pc-builder-server-navy.vercel.app/products");
  const data = await res.json();

  return {
    props: {
      products: data.data,
    },
  };
};
