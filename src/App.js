import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

const App = () => {
  const [showCart, setShowCart] = useState(false);

  return (
    <CartProvider>
      {showCart&&<Cart setShowCart={setShowCart}/>}
      <Header setShowCart={setShowCart}/>
      <Meals/>      
    </CartProvider>
  );
}

export default App;
