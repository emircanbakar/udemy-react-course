import "./ProductItems.css"

function ProductItem() {
  return (
    <div className="product-item">
      <div>
        <img
          src="https://tarim.ibb.gov.tr/img/201681154251638537234067.jpg"
          alt=""
        />
      </div>
      <div className="product-info">
        <h2 className="product-title">Avokado</h2>
        <span className="product-price">15 TL</span>
      </div>
    </div>
  );
}

export default ProductItem;
