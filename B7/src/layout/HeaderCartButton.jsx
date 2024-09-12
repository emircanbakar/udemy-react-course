import CartIcon from "../Cart/CartIcon";
import "./HeaderCartButton.css"

const HeaderCartButton = ({showCart}) => {
  return (
    <button className="button" onClick={showCart}>
      <span className="icon">
        <CartIcon/>
      </span>
      <span>Cart</span>
      <span className="badge">0</span>
    </button>
  );
};

export default HeaderCartButton;
