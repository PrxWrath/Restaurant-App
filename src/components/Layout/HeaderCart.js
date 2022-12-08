import React from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCart.module.css";

const HeaderCart = (props) => {
  
  return (
    <button onClick={()=>{props.setShowCart(true)}} className={classes.headerBtn}>
      <div className={classes.headerBtnContent}>
        <CartIcon />
        <h3>Your Cart</h3>
        <div className={classes.headerCartItems}>1</div>
      </div>
    </button>
  );
};

export default HeaderCart;
