import React from "react";
import ReactDOM from "react-dom";
import Card from "../UI/Card";
import classes from "./Cart.module.css"

const CartOverlay = () => {
  return (
    <div className={classes.cartBackdrop}>
      <Card className={classes.cartPopup}>
            <div className={classes.cart_item_title}>Spl. Thali Combo</div>
            
            <div className={classes.cart_item_total}>
                <h3>Total Amount</h3>
                <h3>Rs. 300</h3>
            </div>

            <div className={classes.cart_btn_panel}>
                <button className={classes.cartBtn}>Close</button>
                <button className={`${classes.cartBtn} ${classes.cartBtn_active}`}>Order</button>
            </div>
      </Card>
    </div>
  );
};
const Cart = () => {
    return(
        <React.Fragment>
            {ReactDOM.createPortal(<CartOverlay/>, document.getElementById("cart-overlay"))}
        </React.Fragment>
    )
};

export default Cart;
