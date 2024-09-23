import { useState } from "react";
import "./FormInputs.css";

const FormInputs = () => {
  const [inputValues, setInputValues] = useState({
    title: "",
    price: "",
    image: "",
    category: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://my-pos-application-api.onrender.com/api/products/create-product",
        { method: "POST",
          body: JSON.stringify(inputValues),
          headers: {
            "Content-Type": "application/json",
          }
         }
      );
      response.json();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <div className="form-title">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          required
          onChange={handleInputChange}
          value={inputValues.title}
        />
      </div>
      <div className="form-price">
        <label htmlFor="price">Price</label>
        <input
          id="price"
          type="number"
          required
          name="price"
          onChange={handleInputChange}
          value={inputValues.price}
        />
      </div>
      <div className="form-category">
        <label htmlFor="category">Category</label>
        <input
          id="category"
          type="text"
          name="category"
          required
          onChange={handleInputChange}
          value={inputValues.category}
        />
      </div>
      <div className="form-img">
        <label htmlFor="img">Image Url</label>
        <input
          id="img"
          type="text"
          name="image"
          required
          onChange={handleInputChange}
          value={inputValues.image}
        />
      </div>
      <button className="button">Add Product</button>
    </form>
  );
};

export default FormInputs;
