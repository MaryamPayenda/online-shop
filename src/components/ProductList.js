import React, { useState, useContext } from "react";
import ProductItem from "./ProductItem";
import { StoreContext } from "../context";

const ProductList = ({ data }) => {
  const store = useContext(StoreContext);
  const [totalBill, setTotalBill] = useState(0);

  const items = store.data.map((item, i) => (
    <ProductItem key={i} info={item} addToCart={store.addToCart} />
  ));

  // const bill = () =>
  //   setTotalBill(cart.reduce((acc, cur) => acc + cur.price, 0));
  return (
    <React.Fragment>
      <div className="totalBill">
        <button onClick={() => setTotalBill(store.bill())}>Total bill</button>
        <h6>{totalBill}€</h6>
      </div>
      <ul className="ulClass">{items}</ul>
    </React.Fragment>
  );
};
export default ProductList;
