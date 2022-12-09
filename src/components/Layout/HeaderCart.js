import React, { useContext } from "react";
import cartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCart.module.css";

const HeaderCart = (props) => {

  const cartCtx = useContext(cartContext);
  const itemCount = cartCtx.items.reduce((current,item)=>{
    return current + item.amount
  },0)

  return (
    <button onClick={()=>{props.setShowCart(true)}} className={classes.headerBtn}>
      <div className={classes.headerBtnContent}>
        <CartIcon />
        <h3>Your Cart</h3>
        <div className={classes.headerCartItems}>{itemCount}</div>
      </div>
    </button>
  );
};

export default HeaderCart;
