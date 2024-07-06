import { useState } from "react";
import ProductInfo from "./ProductInfo";
import "./ProductItems.css";
import Counter from "../Counter";

const ProductItem = ({ product }) => {
  const { imageURL, productName, productPrice } = product;
  const [title, setTitle] = useState(productName);
  const [counter, setCounter] = useState(productPrice);

  const clickHandler = () => {
    setTitle("Güncellendi");
    console.log(productName, "güncellendi.");
  };

  return (
    <div className="product-item">
      <div>
        <img src={imageURL} alt="" />
      </div>
      <ProductInfo>
        <h2 className="product-title"> {title} </h2>
        <span className="product-price"> {counter} TL</span>
        <Counter
          productPrice={productPrice}
          counter={counter}
          setCounter={setCounter}
        />
        <br />
        <button onClick={clickHandler}>Güncelle</button>
      </ProductInfo>
    </div>
  );
};

export default ProductItem;
