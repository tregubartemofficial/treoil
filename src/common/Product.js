import React from "react";
import { useLocation } from "react-router";
import { products } from "../products";

const Product = () => {
  const { pathname } = useLocation();
  const productPathname = pathname
    .slice(1)
    .split("/")[1]
    .split("%20")
    .join(" ");
  const product = products.find((product) => product.title === productPathname);
  console.log(product);


  return <div>Product</div>;
};

export default Product;
