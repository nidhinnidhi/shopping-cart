import React, { useContext } from "react";
import "./Sort.scss";
import { ShoppingContext } from "../../context/shopping-context";

const Sort = props => {
  const { sortItem } = useContext(ShoppingContext);
  return (
    <div className="sort">
      <input
        type="radio"
        name="sort"
        id="sort001"
        onChange={() => sortItem("ASC")}
      />
      <label htmlFor="sort001">Low to high</label>
      <input
        type="radio"
        name="sort"
        id="sort002"
        onChange={() => sortItem("DSC")}
      />
      <label htmlFor="sort002">High to low</label>

      <input
        type="radio"
        name="sort"
        id="sort003"
        onChange={() => sortItem("DISCOUNT")}
      />
      <label htmlFor="sort003">discount</label>
    </div>
  );
};

export default Sort;
