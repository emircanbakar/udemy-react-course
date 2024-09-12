import "./Header.css"
import HeaderCartButton from "./HeaderCartButton";

const Header = ({showCart}) => {
  return (
    <header className="header">
      <h1>Store</h1>
      <HeaderCartButton showCart={showCart} />
    </header>
  );
};

export default Header;
