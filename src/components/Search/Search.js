import React, { useState } from "react";
import SearchIcon from "../../assets/images/search.svg";
import CloseIcon from "../../assets/images/close.svg";
import "./Search.scss";

const Search = props => {
  const [hidden, setVisible] = useState(true);

  const inputClassName = hidden
    ? "search__input"
    : "search__input search__input--open";

  const onClickHandler = () => {
    setVisible(hidden => !hidden);
  };

  const IconURL = hidden ? `${SearchIcon}` : `${CloseIcon} `;
  return (
    <div className="search">
      <input type="text" className={inputClassName} />
      <button className="search__btn" onClick={onClickHandler}>
        <img src={IconURL} alt="" />
      </button>
    </div>
  );
};

export default Search;
