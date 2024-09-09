/* eslint-disable react/prop-types */
import "./ProductItem.css";
import Card from "../UI/Card";
import Rating from "./Rating";

const ProductItem = ({ product }) => {
  const { name, description, img, price } = product;
  return (
    <Card className="card">
      <img src={img} alt={name} />
      <h3> {name} </h3>
      <p> {description} </p>
      <div className="product-info">
        <Rating />
        <span className="price"> {price} TL</span>
      </div>
      <button className="add-to-cart">Sepete Ekle</button>
    </Card>
  );
};

export default ProductItem;
