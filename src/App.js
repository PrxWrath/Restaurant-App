import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

const App = () => {
  const [showCart, setShowCart] = useState(false);

  return (
    <React.Fragment>
      {showCart&&<Cart setShowCart={setShowCart}/>}
      <Header setShowCart={setShowCart}/>
      <Meals/>      
    </React.Fragment>
  );
}

export default App;
