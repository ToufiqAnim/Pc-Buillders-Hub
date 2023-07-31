import { Image } from "antd";
import React from "react";
import { AiOutlineStar } from "react-icons/ai";

const ProductDetails = ({ product }) => {
  return (
    <div className="px-5 container mx-auto mt-16 mb-12">
      <div className="flex flex-col md:flex-row justify-center items-center gap-12">
        <Image
          src={product?.image}
          alt={product?.productName}
          width="400"
          height="350"
          className="rounded-md shadow-md p-8"
        />

        <div className="flex-1">
          <span className=" py-3">{product?.category}</span>
          <h4 className="text-3xl font-bold my-4">{product?.productName}</h4>
          <div className="mb-5 items-center flex gap-1">
            <p className="font-semibold">{product?.averageRating}</p>
            <AiOutlineStar />
          </div>
          <span
            style={{
              border: "1px solid lightgray ",
              padding: 6,
            }}
          >
            {product?.status}
          </span>
          <p className="mt-5">
            <strong>Price:</strong> ${product?.price}
          </p>
          <p className="mt-3">{product?.description}</p>

          <div className="mt-4">
            <div>
              <h3 className="font-semibold text-lg mb-4">Key Features:</h3>
              <ul className="ml-3">
                {product.keyFeatures.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <li className="mb-2">{feature}</li>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="my-12">
        <h4 className="text-2xl font-bold ml-4">Reviews</h4>
        {/* {product?.reviews.map((review, index) => (
					<Reviews key={index} review={review} />
				))} */}
      </div>
    </div>
  );
};

export default ProductDetails;

export const getStaticPaths = async () => {
  const res = await fetch("https://pc-builder-server-navy.vercel.app/products");
  const data = await res.json();

  const paths = data.data.map((product) => ({
    params: { productId: product._id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `https://pc-builder-server-navy.vercel.app/products/${params.productId}`
  );
  const data = await res.json();
  console.log();

  return {
    props: {
      product: data.data,
    },
  };
};
