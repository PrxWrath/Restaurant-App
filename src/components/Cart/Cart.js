import React, { useContext } from "react";
import cartContext from "../../store/cart-context";
import Overlay from "../UI/Overlay";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartCtx = useContext(cartContext);
  return (
    <Overlay>
      {cartCtx.items.map((item, key) => {
        return (
            <div className={classes.cart_item_details}>
              <div className={classes.cart_item_title}>{item.item}</div>
              <div className={classes.cart_item_title}>{item.amount}</div>
            </div>
        );
      })}

      <div className={classes.cart_item_total}>
        <h3>Total Amount</h3>
        <h3>{`Rs. ${cartCtx.totalAmt}`}</h3>
      </div>

      <div className={classes.cart_btn_panel}>
        <button className={classes.cartBtn} onClick={() => {props.setShowCart(false)}}>
          Close
        </button>
        <button className={`${classes.cartBtn} ${classes.cartBtn_active}`}>
          Order
        </button>
      </div>
    </Overlay>
  );
};

export default Cart;
