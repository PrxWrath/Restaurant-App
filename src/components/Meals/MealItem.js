import React from 'react'
import classes from './MealItem.module.css'

const MealItem = (props) => {
  return (
    <div className={classes.mealItem}>
        <div className={classes.mealTitle}>{props.item}</div>
        <div className={classes.mealDesc}>{props.desc}</div>
        <div className={classes.mealPrice}>Rs. {props.price}</div>
    </div>
  )
}

export default MealItem