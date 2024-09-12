import { useState } from "react";
import Cart from "./Cart/Cart";
import Hero from "./Hero/Hero";
import Header from "./layout/Header";
import Products from "./Product/Products";
function App() {
  const [cartIsShow, setCartIsShow] = useState(false);
  const showCart = () => {
    setCartIsShow(true);
  };
  const hideCart = (e) => {
    e.preventDefault()
    setCartIsShow(false);
  };
  return (
    <div className="App">
      {cartIsShow && <Cart hideCart={hideCart} />}
      <Header showCart={showCart} />
      <Hero />
      <Products />
    </div>
  );
}

export default App;
