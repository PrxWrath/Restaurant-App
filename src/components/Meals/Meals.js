import React from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem";
import classes from "./Meals.module.css";

const Meals = () => {
  const meals = [
    {
      id: "item1",
      item: "Cheese Spl. Pizza",
      desc: "Hand made with fresh exotic cheeses",
      price: 250,
    },
    {
      id: "item2",
      item: "Summer Salad",
      desc: "Made with fresh veggies",
      price: 135,
    },
    {
      id: "item3",
      item: "Spl. Thali Combo",
      desc: "Includes the best north-indian recipes",
      price: 300,
    },
  ];
  return (
    <Card className={classes.meals}>
      {meals.map((meal) => {
        return (
          <MealItem
            key={meal.id}
            id={meal.id}
            item={meal.item}
            desc={meal.desc}
            price={meal.price}
          />
        );
      })}
    </Card>
  );
};

export default Meals;
