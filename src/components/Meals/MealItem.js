import React from "react";
import classes from "./MealItem.module.css";
import FormInput from "../UI/FormInput";

const MealItem = (props) => {
  return (
    <div className={classes.mealItem}>
      <div className={classes.meal_item_content}>
        <div className={classes.mealTitle}>{props.item}</div>
        <div className={classes.mealDesc}>{props.desc}</div>
        <div className={classes.mealPrice}>Rs. {props.price}</div>
      </div>
      <div className={classes.meal_amount_form}>
        <FormInput label="Amount" id="Amount" type="number" max="100" min="1" />
        <button className={classes.meal_addBtn}>+Add</button>
      </div>
    </div>
  );
};

export default MealItem;
