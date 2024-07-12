import React, { useState } from "react";
import ProductForm from "./ProductForm";
import AddProduct from "./AddProduct";

const NewProduct = ({ products, setProducts }) => {
  const [isOpen, setIsOpen] = useState(false);
  const onSaveProducts = (newProductData) => {
    setProducts((prevState) => [...prevState, newProductData]);
  };
  return (
    <div className="new-product-wrapper">
      {isOpen ? (
        <ProductForm setIsOpen={setIsOpen}  onSaveProducts={onSaveProducts} products={products} />
      ) : (
        <AddProduct setIsOpen={setIsOpen}  />
      )}
    </div>
  );
};

export default NewProduct;
