import { Fragment } from "react";
import { Link } from "react-router-dom";

const PRODUCT = [
  { id: 1, title: "product1" },
  { id: 2, title: "product2" },
  { id: 3, title: "product3" },
];

const ProductsPage = () => {
  return (
    <Fragment>
      <h1>product page</h1>
      <ul>
        {PRODUCT.map((product) => (
          <li key={product.id}>
            <Link to={`${product.id}`}> {product.title} </Link>
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default ProductsPage;
