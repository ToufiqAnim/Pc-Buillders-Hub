import ProductCard from "@/components/UI/ProductCard";
import Head from "next/head";

const Category = ({ products }) => {
  console.log(products);

  return (
    <>
      <Head>
        <title>PC Build - {products[0].category}</title>
      </Head>
      <div className="py-8">
        <h2 className="text-3xl font-bold text-center mb-8">
          Category - {products[0].category}
        </h2>
        <div className="flex flex-wrap justify-center gap-10">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Category;

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:5000/products");
  const products = await res.json();

  const paths = products.data.map((product) => ({
    params: { category: product.category },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `http://localhost:5000/productsCategory/${params?.category}`
  );
  const data = await res.json();

  return {
    props: {
      products: data.data,
    },
  };
};
