import React, { useContext } from "react";
import "./Product.scss";
import { Link } from "react-router-dom";
import { ShoppingContext } from "../../context/shopping-context";
import LoadingImage from "../../assets/images/loading.svg";

const Product = props => {
  const { id, name, price, img_url, discount } = props;

  const priceWithDiscount = price - (price * discount) / 100;
  let { addItem, cart } = useContext(ShoppingContext);
  let isInCart = cart.length && cart.find(elem => elem.id === id);
  const BtnComp = isInCart ? (
    <Link className="product__btn" to="/cart">
      Go to Cart
    </Link>
  ) : (
    <button className="product__btn" onClick={() => addItem(props)}>
      Add to cart
    </button>
  );

  return (
    <div className="product">
      <div className="product__content">
        <div
          className="product__figure"
          style={{ backgroundImage: `url("${LoadingImage}")` }}
        >
          <img src={img_url} alt={name} className="product__image" />
        </div>
        <div className="product__detail">
          <h4 className="product__title">{name}</h4>
          <div className="product__pricing">
            <div className="product__price">
              <span className="product__discounted-price">
                {priceWithDiscount}{" "}
              </span>

              <span className="product__actual-price">
                {discount ? `${price}` : null}
              </span>
            </div>
            <div className="product__discount">
              {discount ? `${discount}% off` : null}
            </div>
          </div>
          <div className="product__footer">{BtnComp}</div>
        </div>
      </div>
    </div>
  );
};

export default Product;
