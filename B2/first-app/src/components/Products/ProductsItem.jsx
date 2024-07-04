import ProductInfo from "./ProductInfo";
import "./ProductItems.css";

const ProductItem = ({ product }) => {
  const { imageURL, productName, productPrice } = product;

  return (
    <div className="product-item">
      <div>
        <img src={imageURL} alt="" />
      </div>
      <ProductInfo>
        <h2 className="product-title"> {productName} </h2>
        <span className="product-price"> {productPrice} TL</span>
      </ProductInfo>
    </div>
  );
};

export default ProductItem;
