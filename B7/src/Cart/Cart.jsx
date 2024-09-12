import "./Cart.css";
import CartItem from "./CartItem";
import products from "../productData"
import Offcanvas from "../UI/Offcanvas";

const Cart = ({hideCart}) => {
  const cartItems = <ul className="cart-items"> 
  {products.map((product) => (
    <CartItem key={product.id} product={product}/>
  ))}
  </ul>;

  return (
    <Offcanvas hideCart={hideCart} >
        <div className="cart-head">
          <h2>Sepetim</h2>
          <a href="/" onClick={hideCart}>X</a>
        </div>
        {cartItems}
        <div className="total">
          <span>Toplam Değer</span>
          <span>10TL</span>
        </div>
        <div className="actions">
          <button className="cart-order">Sipariş Ver</button>
          <button className="cart-clear">Temizle</button>
        </div>
    </Offcanvas>
  );
};

export default Cart;
