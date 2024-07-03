import "./ProductItems.css"

function ProductItem(props) {
  console.log(props)
 
  return (
    <div className="product-item">
      <div>
        <img
          src= {props.imageURL}
          alt=""
        />
      </div>
      <div className="product-info">
        <h2 className="product-title"> {props.productName} </h2>
        <span className="product-price"> {props.productPrice} TL</span>
        <span> {props.author} </span>
      </div>
    </div>
  );
}

export default ProductItem;
