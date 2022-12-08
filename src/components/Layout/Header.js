import React, { useState }  from "react";
import classes from "./Header.module.css";
import HeaderCart from "./HeaderCart";
import mealsBg from "../../resources/meals.jpg"
import SummaryBanner from "./SummaryBanner";
import Cart from "../Cart/Cart";
const Header = () => {
  const [showCart, setShowCart] = useState(false);

  return (
    <>
      {showCart&&<Cart/>}
      <div className={classes.header}>
        <h2>ReactMeals</h2>
        <HeaderCart setShowCart = {setShowCart} />
      </div>
      <div className={classes.banner}>
        <img src={mealsBg} alt="Delicious Meals"></img>
      </div>
      <SummaryBanner/>
    </>
  );
};

export default Header;
