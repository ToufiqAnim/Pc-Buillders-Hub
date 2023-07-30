import { Image } from "antd";
import React from "react";

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
          <h4 className="text-3xl font-bold mt-4">{product?.productName}</h4>
          {/* <Star
						rating={product?.averageRating}
						reviews={product?.reviews.length}
					/> */}
          <span className="badge badge-outline my-3">{product?.status}</span>
          <p>
            <strong>Price:</strong> ${product?.price}
          </p>
          <p className="mt-3">{product?.description}</p>
          <h4 className="text-lg font-bold my-4">Key Features:</h4>

          <div className="mt-4">
            <div>
              <h3 className="font-semibold text-lg">Key Features:</h3>
              <ul className="ml-3">
                {product.keyFeatures.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <li>{feature}</li>
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
  const res = await fetch("http://localhost:5000/products");
  const data = await res.json();

  const paths = data.data.map((product) => ({
    params: { productId: product._id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(`http://localhost:5000/products/${params.productId}`);
  const data = await res.json();
  console.log();

  return {
    props: {
      product: data.data,
    },
  };
};
