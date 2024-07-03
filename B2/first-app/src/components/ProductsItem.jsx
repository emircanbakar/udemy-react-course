import "./ProductItems.css"

function ProductItem() {

  const imageURL = "https://tarim.ibb.gov.tr/img/201681154251638537234067.jpg"
  const productName = "Avokado"
  const productPrice = "20"
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
