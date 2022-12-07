import React from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCart.module.css";

const HeaderCart = () => {
  return (
    <button className={classes.headerBtn}>
      <div className={classes.headerBtnContent}>
        <CartIcon />
        <h3>Your Cart</h3>
        <div className={classes.headerCartItems}>0</div>
      </div>
    </button>
  );
};

export default HeaderCart;
