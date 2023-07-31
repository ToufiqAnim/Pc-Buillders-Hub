import { SelectedProduct } from "@/components/UI/SelectedProduct";
import Head from "next/head";
import React from "react";

const CategoryComponent = ({ products }) => {
  return (
    <>
      <Head>
        <title>Select Component - {products[0].category}</title>
      </Head>
      <div className="py-5 px-2 mb-6">
        <h2 className="text-center text-3xl font-semibold mt-6">
          Category - {products[0].category}
        </h2>
        <div className="flex flex-wrap gap-5 justify-center mt-8">
          {products.map((product) => (
            <SelectedProduct key={product._id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};
export default CategoryComponent;
export async function getServerSideProps(context) {
  const { params } = context;
  const res = await fetch(
    `https://pc-builder-server-navy.vercel.app/productsCategory/${params?.category}`
  );
  const data = await res.json();

  return { props: { products: data.data } };
}
