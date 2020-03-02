import React, { useContext } from "react";
import CartIco from "../../assets/images/shopping-cart.svg";
import "./CartIcon.scss";
import { ShoppingContext } from "../../context/shopping-context";

const CartIcon = props => {
  const { cart } = useContext(ShoppingContext);
  return (
    <div className="cart-icon">
      <img src={CartIco} alt="Cart icon" className="cart-icon__image" />
      {cart.length ? (
        <div className="cart-icon__badge">
          <span>{cart.length}</span>
        </div>
      ) : null}
    </div>
  );
};

export default CartIcon;
