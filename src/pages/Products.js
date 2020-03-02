import React, { useContext } from "react";
import Product from "../components/Product";
import "./Products.scss";
import { ShoppingContext } from "../context/shopping-context";
import Loading from "../assets/images/loading.svg";
import Filter from "../components/Filter";
import Sort from "../components/Sort";

const Products = () => {
  const { tmpData, loaded } = useContext(ShoppingContext);
  if (!loaded) {
    return (
      <div className="loading">
        <div className="loading__content">
          <img src={Loading} alt="Loading" className="loading__image" />
          <h1 className="loading__title">Loading...</h1>
        </div>
      </div>
    );
  }
  const ProductListComp = props => {
    const { products } = props;
    return (
      <div className="products">
        {products.map(product => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
    );
  };
  const EmptyComp = () => <h1 className="loading__title">No Products...</h1>;
  return (
    <>
      <Filter />
      <Sort />
      {tmpData.length ? <ProductListComp products={tmpData} /> : <EmptyComp />}
    </>
  );
};

export default Products;
