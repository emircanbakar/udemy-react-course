import ProductItem from "./ProductsItem";
import "./Products.css";
import { productData } from "../../productData";
import NewProduct from "../NewProduct/NewProduct";
import { useState } from "react";

const Products = () => {
  const [products, setProducts] = useState(productData);
  console.log(products)
  return (
    <div className="product-wrapper">
      <NewProduct products={products} setProducts={setProducts} />
      <h1>Products</h1>
      <div className="products">
        {products.map((product) => <ProductItem product={product} key={product.id} />)}
        {/* {products.map((product) => (
          <ProductItem key={product.productName} product={product}  />
        ))} */}
        {/* {productData.map((product) => {
          return (
            <ProductItem
              key={product.productName}
              product={product}
            />
          );
        })} */}
      </div>
    </div>
  );
};

export default Products;
