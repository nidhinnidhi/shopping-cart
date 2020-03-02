import React, { useContext } from "react";

import { ShoppingContext } from "../context/shopping-context";

const Cart = () => {
  const { cart, removeItem } = useContext(ShoppingContext);
  console.log({ cart });
  if (cart.length) {
    return (
      <>
        {cart.map((item, index) => (
          <div key={index}>
            <h1>{item.name}</h1>
            <button className="product__btn" onClick={() => removeItem(item)}>
              Remove
            </button>
          </div>
        ))}
      </>
    );
  } else {
    return <h1>there is No items in the Cart</h1>;
  }
};

export default Cart;
