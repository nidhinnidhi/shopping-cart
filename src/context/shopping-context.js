import React, { createContext, useState, useEffect } from "react";
import { fetchData } from "../service";

const ShoppingContext = createContext();

const ShoppingProvider = props => {
  const [loaded, setLoaded] = useState(false);
  const [data, setData] = useState([]);
  const [tmpData, setTmpData] = useState([]);
  const [cart, setCart] = useState([]);
  const getData = async () => {
    let response = await fetchData();
    setLoaded(true);
    setData(response);
    setTmpData(response);
  };
  useEffect(() => {
    getData();
  }, []);

  const addItemHandler = item => {
    // const { id } = item;
    // const a = cart.find(element => element.id === item.id);
    setCart([...cart, item]);
  };

  const removeItemHandler = params => {
    let result = cart.filter(element => element.id !== params.id);
    setCart(result);
  };
  const sortItemHandler = params => {
    let sortedData = [];
    if (params === "ASC") {
      sortedData = tmpData.sort((a, b) => a.price - b.price);
    } else if (params === "DSC") {
      sortedData = tmpData.sort((a, b) => b.price - a.price);
    } else {
      // DISCOUNT
      sortedData = tmpData.sort((a, b) => b.discount - a.discount);
    }
    setTmpData([...sortedData]);
  };

  const filterItemHandler = params => {
    const { min, max } = params;
    let result = data.filter(
      element => element.price >= min && element.price <= max
    );
    setTmpData([...result]);
  };

  const shoppingData = {
    loaded,
    tmpData,
    cart,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    sortItem: sortItemHandler,
    filterItem: filterItemHandler
  };

  return (
    <ShoppingContext.Provider value={shoppingData}>
      {props.children}
    </ShoppingContext.Provider>
  );
};

export { ShoppingContext, ShoppingProvider };
