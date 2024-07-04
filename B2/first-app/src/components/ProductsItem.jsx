import "./ProductItems.css"

function ProductItem({product}) {
  const {imageURL, productName, productPrice } = product;
  console.log(product)
 
  return (
    <div className="product-item">
      <div>
        <img
          src= {imageURL}
          alt=""
        />
      </div>
      <div className="product-info">
        <h2 className="product-title"> {productName} </h2>
        <span className="product-price"> {productPrice} TL</span>
      </div>
    </div>
  );
}

export default ProductItem;
