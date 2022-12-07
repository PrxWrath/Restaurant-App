import React from "react";
import classes from "./Header.module.css";
import HeaderCart from "./HeaderCart";
import mealsBg from "../../resources/meals.jpg"
import SummaryBanner from "./SummaryBanner";
const Header = () => {
  return (
    <>
      <div className={classes.header}>
        <h2>ReactMeals</h2>
        <HeaderCart />
      </div>
      <div className={classes.banner}>
        <img src={mealsBg} alt="Delicious Meals"></img>
      </div>
      <SummaryBanner/>
    </>
  );
};

export default Header;
