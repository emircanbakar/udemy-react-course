import ProductItem from "./ProductsItem";
import "./Products.css";

function Products() {
  const author = "Emircan Bakar";
  const imageURL = "https://tarim.ibb.gov.tr/img/201681154251638537234067.jpg";
  const productName = "Avokado";
  const productPrice = "20";
  return (
    <div>
      <h1>Products</h1>
      <div className="products">
        <ProductItem
          author={author}
          imageURL={imageURL}
          productName={productName}
          productPrice={productPrice}
        />
        <ProductItem
          author={author}
          productPrice="10"
          imageURL="data:image/jpeg;base64,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"
          productName="Çilek"
        />
      </div>
    </div>
  );
}

export default Products;
