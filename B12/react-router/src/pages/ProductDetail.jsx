import { useParams, Link } from "react-router-dom";

const ProductDetailPage = () => {
  const params = useParams();
  return (
    <div>
      <h1>productDetails</h1>
      <p> product-{params.productId} </p>
      <Link to=".." relative="path">
        Back
      </Link>
    </div>
  );
};

export default ProductDetailPage;
