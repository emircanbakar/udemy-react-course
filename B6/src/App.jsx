import { useState } from "react";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Products from "./components/Products";

function App() {
  const emptyCart = () => {
    setCart([]);
  };

  return (
    <div className="container mx-auto p-4">
      <Header />
      <Products />
      <Cart />
    </div>
  );
}

export default App;
