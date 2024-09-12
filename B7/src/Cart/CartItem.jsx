import "./CartItem.css";

const CartItem = (props) => {
  return (
    <li className="cart-item">
      <div className="cart-item-img">
        <img src={props.product.img} />
      </div>
      <div className="cart-item-info">
        <div className="cart-item-texts">
          <b> {props.product.name} </b>
          <div>
            <span>{props.product.price} TL x </span>
            <span>{props.product.amount}</span>
          </div>
        </div>
        <a href="" className="cart-item-remove">
          X
        </a>
      </div>
    </li>
  );
};

export default CartItem;
