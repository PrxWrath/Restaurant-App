import React, { useContext, useState } from "react";
import classes from "./MealItem.module.css";
import FormInput from "../UI/FormInput";
import cartContext from "../../store/cart-context";

const MealItem = (props) => {

  const cartCtx = useContext(cartContext);
  const [qty, setQty] = useState(1);

  const addToCartHandler = () => {
    const item = {
      id: props.id,
      item: props.item,
      price: props.price,
      amount: Number(qty)
    }
    cartCtx.addItem(item);
  }
  
  return (
    <div className={classes.mealItem}>
      <div className={classes.meal_item_content}>
        <div className={classes.mealTitle}>{props.item}</div>
        <div className={classes.mealDesc}>{props.desc}</div>
        <div className={classes.mealPrice}>Rs. {props.price}</div>
      </div>
      <div className={classes.meal_amount_form}>
        <FormInput label="Amount" id="Amount" type="number" max="100" min="1" value="1" setQty={setQty}/>
        <button className={classes.meal_addBtn} onClick={addToCartHandler}>+Add</button>
      </div>
    </div>
  );
};

export default MealItem;
