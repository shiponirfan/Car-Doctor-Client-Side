import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import useAxiosSecure from "./../../hooks/useAxiosSecure";

const Products = () => {
  const [products, setProducts] = useState([]);
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    axiosSecure.get("/products").then((res) => {
      setProducts(res.data);
    });
  }, [axiosSecure]);
  return (
    <div>
      <div className="space-y-5 text-center max-w-3xl mx-auto">
        <h3 className="font-bold text-xl text-car-primary">Popular Products</h3>
        <h2 className="font-bold text-5xl text-car-black">
          Browse Our Products
        </h2>
        <p className="text-base text-car-gray">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don&apos;t look even slightly
          believable.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 my-14">
        {products.map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
      <div className="text-center">
        <Link to="/">
          <button className="text-lg font-semibold text-car-primary py-4 px-7 border border-car-primary rounded-md hover:bg-car-primary hover:text-white duration-300">
            More Products
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Products;
