import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import Logo from "../../assets/images/star.svg";
import CartIcon from "../CartIcon";
import Search from "../Search";

const Header = () => {
  return (
    <nav className="header">
      <div>
        <Link to="/" className="header__logo">
          <img src={Logo} alt="Logo" />
        </Link>
      </div>
      <div className="header__right">
        <Search />
        <ul className="header__menu">
          <li>
            <Link to="/cart">
              <CartIcon />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
