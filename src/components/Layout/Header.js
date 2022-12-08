import React  from "react";
import classes from "./Header.module.css";
import HeaderCart from "./HeaderCart";
import mealsBg from "../../resources/meals.jpg"
import SummaryBanner from "./SummaryBanner";
const Header = (props) => {
  
  return (
    <React.Fragment>
      <div className={classes.header}>
        <h2>ReactMeals</h2>
        <HeaderCart setShowCart = {props.setShowCart} />
      </div>
      <div className={classes.banner}>
        <img src={mealsBg} alt="Delicious Meals"></img>
      </div>
      <SummaryBanner/>
    </React.Fragment>
  );
};

export default Header;
