const ProductInfo = (props) => {
  return (
    <div className="product-info">
      <span className="ad">ecbakar.dev</span>
      {props.children}
    </div>
  );
};

export default ProductInfo;
