import { useCallback, useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import "./Products.css";
import FormInputs from "../Form/FormInputs";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const productList = products.map((product) => (
    <ProductItem key={product.id} product={product} />
  ));

  const fetchHandler = useCallback( async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://my-pos-application-api.onrender.com/api/products/get-all"
      );

      if (response.status != 200) {
        throw new Error("something went wrong");
      }

      const data = await response.json();
      const newData = data.map((item) => {
        return {
          id: item._id,
          name: item.title,
          ...item,
        };
      });
      setProducts(newData);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  let content = <p>No Product!</p>;

  if (products.length > 0) {
    content = productList;
  }
  if (error) {
    content = <p> {error} </p>;
  }
  if (isLoading) {
    content = <p>Loading...</p>;
  }

  useEffect(() => {
    fetchHandler()
  }, [fetchHandler])

  return (
    <main className="products-wrapper">
      <FormInputs/>
      <ul className="products"> {content} </ul>
    </main>
  );
};

export default Products;
