import { useState } from "react";
import "./ProductForm.css";

const ProductForm = (props) => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [imageURL, setImageUrl] = useState("");
  //   const [productData, setProductData] = useState({
  //     productName: "",
  //     productPrice: "",
  //     imageURL: "",
  //   });

  const titleChangeHandler = (event) => {
    setProductName(event.target.value);
    // setProductData({
    //     ...productData,
    //     productName: event.target.value
    // })
    // setProductData((prevState) => {
    //   return { ...prevState, productName: event.target.value };
    // });
  };
  const priceChangeHandler = (event) => {
    setProductPrice(event.target.value);
    // setProductPrice(parseInt(event.target.value));
    // setProductData({
    //   ...productData,
    //   productPrice: event.target.value,
    // });
    // setProductData((prevState) => {
    //   return { ...prevState, productPrice: event.target.value };
    // });
  };
  const imageChangeHandler = (event) => {
    setImageUrl(event.target.value);
    // setProductData({
    //   ...productData,
    //   imageURL: event.target.value,
    // });
    // setProductData((prevState) => {
    //   return { ...prevState, imageURL: event.target.value };
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("submitHandler çalıştı");

    const newProductData = {
      id: props.products.length + 1,
      productName,
      productPrice,
      imageURL,
    };

    // props.setProducts((prevState)=> [...prevState, newProductData])
    props.onSaveProducts(newProductData);

    console.log(newProductData);
    setProductName("");
    setProductPrice("");
    setImageUrl("");
  };
  return (
    <form className="product-form" onSubmit={submitHandler}>
      <div className="product-form-input">
        <label>Ürün Adı </label>
        <input
          type="text"
          placeholder="Ürün adı giriniz."
          onChange={titleChangeHandler}
          value={productName}
        />
      </div>
      <div className="product-form-input">
        <label>Ürün Fiyatı </label>
        <input
          type="number"
          placeholder="Ürün fiyatı giriniz."
          onChange={priceChangeHandler}
          value={productPrice}
        />
      </div>
      <div className="product-form-input">
        <label>Ürün Görseli </label>
        <input
          type="text"
          placeholder="Ürün görseli giriniz."
          onChange={imageChangeHandler}
          value={imageURL}
        />
      </div>
      <div className="form-buttons">
        <button className="product-form-buttons">Ürün Ekle</button>
        <button
          className="product-form-buttons cancel"
          type="button"
          onClick={() => props.setIsOpen(false)}
        >
          Vazgeç
        </button>
      </div>
    </form>
  );
};

export default ProductForm;
