import React from "react";
import ProductForm from "./ProductForm";

const NewProduct = ({ setProducts }) => {
  const onSaveProducts = (newProductData) => {
    setProducts((prevState) => [...prevState, newProductData]);
  };
  return (
    <div className="new-product-wrapper">
      <ProductForm onSaveProducts={onSaveProducts} />
    </div>
  );
};

export default NewProduct;
