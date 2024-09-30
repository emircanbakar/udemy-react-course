import { Fragment } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate("/products");
  };
  return (
    <Fragment>
      <h1>My home page</h1>
      <button onClick={navigateHandler}>go to products</button>
    </Fragment>
  );
};

export default HomePage;
