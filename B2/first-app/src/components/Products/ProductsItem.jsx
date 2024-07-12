import { useState } from "react";
import ProductInfo from "./ProductInfo";
import "./ProductItems.css";
import Counter from "../Counter";

const ProductItem = ({ product, setProducts, products }) => {
  const { imageURL, productName, productPrice } = product;
  const [title, setTitle] = useState(productName);
  const [counter, setCounter] = useState(Number(productPrice));

  const clickHandler = () => {
    setTitle("Güncellendi");
    console.log(productName, "güncellendi.");
  };

  const deleteHandler = ( ) => {
    setProducts(products.filter((item) => item.id !== product.id))
  }

  return (
    <div className="product-item">
      <div>
        <img src={imageURL} alt="" />
      </div>
      <ProductInfo>
        <h2 className="product-title"> {title} </h2>
        <span className="product-price"> {counter}</span>
        <Counter
          productPrice={productPrice}
          counter={counter}
          setCounter={setCounter}
        />
        <br />
        <button onClick={clickHandler}>Güncelle</button>
        <button onClick={deleteHandler} className="btn-delete" >Sil</button>
      </ProductInfo>
    </div>
  );
};

export default ProductItem;
