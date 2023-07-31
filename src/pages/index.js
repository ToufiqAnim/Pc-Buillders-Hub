import Head from "next/head";
import { useSession } from "next-auth/react";
import { Row } from "antd";
import ProductCard from "@/components/UI/ProductCard";
import FeaturedCategory from "@/components/UI/FeaturedCategory";
import Banner from "@/components/UI/Banner";
const HomePage = ({ products, allProducts }) => {
  const { data: session } = useSession();
  return (
    <>
      <Banner />
      <div className="container mx-auto ">
        <div className="px-4">
          <FeaturedCategory />
        </div>
        <h1 className=" my-4 text-center text-xl tracking-wider">
          Featured Products
        </h1>
        <p className="text-center mb-8 text-md">
          Check & Get Your Desired Product!
        </p>
        <Row
          gutter={{
            xs: 8,
            sm: 16,
            md: 24,
            lg: 32,
          }}
        >
          {products.map((product) => (
            <ProductCard key={product?._id} product={product} />
          ))}
        </Row>
      </div>
    </>
  );
};

export default HomePage;

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/products");
  const data = await res.json();

  const featuredProducts = data.data.slice();
  for (let i = featuredProducts.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [featuredProducts[i], featuredProducts[j]] = [
      featuredProducts[j],
      featuredProducts[i],
    ];
  }

  const randomFeaturedProducts = featuredProducts.slice(0, 8);

  return {
    props: {
      products: randomFeaturedProducts,
      allProducts: data.data,
    },
    revalidate: 10,
  };
};
