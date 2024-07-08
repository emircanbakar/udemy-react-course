import { useState } from "react";
import "./ProductForm.css";

const ProductForm = () => {
//   const [productName, setProductName] = useState("");
//   const [productPrice, setProductPrice] = useState("");
//   const [imageURL, setImageUrl] = useState("");
const  [productData, setProductData] = useState({
    productName: "",
    productPrice: "",
    imageURL: "" 
})

  const titleChangeHandler = (event) => {
    // setProductName(event.target.value);
    setProductData({
        ...productData,
        productName: event.target.value
    })
  };
  const priceChangeHandler = (event) => {
    // setProductPrice(event.target.value);
    setProductData({
        ...productData,
        productPrice: event.target.value
    })
  };
  const imageChangeHandler = (event) => {
    // setImageUrl(event.target.value);
    setProductData({
        ...productData,
        imageURL: event.target.value
    })
  };
  console.log(productData)

  return (
    <form className="product-form">
      <div className="product-form-input">
        <label>Ürün Adı </label>
        <input
          type="text"
          placeholder="Ürün adı giriniz."
          onChange={titleChangeHandler}
        />
      </div>
      <div className="product-form-input">
        <label>Ürün Fiyatı  </label>
        <input type="number" placeholder="Ürün fiyatı giriniz." onChange={priceChangeHandler} />
      </div>
      <div className="product-form-input">
        <label>Ürün Görseli  </label>
        <input type="text" placeholder="Ürün görseli giriniz." onChange={imageChangeHandler} />
      </div>
      <button className="product-form-buttons">Ürün Ekle</button>
    </form>
  );
};

export default ProductForm;
