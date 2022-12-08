import React from "react";
import Overlay from "../UI/Overlay";
import classes from "./Cart.module.css";

const Cart = (props) => {
  return (
    <Overlay>
      <div className={classes.cart_item_title}>Spl. Thali Combo</div>

      <div className={classes.cart_item_total}>
        <h3>Total Amount</h3>
        <h3>Rs. 300</h3>
      </div>

      <div className={classes.cart_btn_panel}>
        <button className={classes.cartBtn} onClick={()=>{props.setShowCart(false)}}>Close</button>
        <button className={`${classes.cartBtn} ${classes.cartBtn_active}`}>
          Order
        </button>
      </div>
    </Overlay>
  );
};

export default Cart;
