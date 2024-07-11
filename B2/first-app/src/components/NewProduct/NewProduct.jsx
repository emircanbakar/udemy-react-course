import React from "react";
import ProductForm from "./ProductForm";

const NewProduct = ({ products, setProducts }) => {
  const onSaveProducts = (newProductData) => {
    setProducts((prevState) => [...prevState, newProductData]);
  };
  return (
    <div className="new-product-wrapper">
      <ProductForm onSaveProducts={onSaveProducts} products={products} />
    </div>
  );
};

export default NewProduct;
