import React, {  useState } from "react";
import cartContext from "./cart-context";

const CartProvider = (props) => {

  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const addToCart = (item) => {

    if (!cartItems.filter((i)=>{return i.id===item.id}).length) {
      const itemInCart = {
        id: item.id,
        item: item.item,
        price: item.price,
        amount: item.amount,
      };

      setCartItems((prev) => {
        return [ ...prev, itemInCart];
      });

      setTotalAmount((prev)=>{return prev + item.price*itemInCart.amount})
    }

    else{
       cartItems.forEach(obj=>{
        if(obj.id===item.id){
            obj.amount++;
        }
       })

       setTotalAmount((prev)=>{return prev + item.price})
    }
  };

  const removeFromCart = (item) => {
     
    if(item.amount>1){    
        cartItems.forEach(obj=>{
            if(obj.id===item.id){
                obj.amount--;
            }
           })
        
        setTotalAmount((prev)=>{return prev - item.price})
    }

    else{
        setCartItems([
            ...cartItems.filter((i)=>{return i.id!==item.id})
        ])
        setTotalAmount((prev)=>{return prev - item.price})
    }
  };

  return (
    <cartContext.Provider
      value={{
        items: cartItems,
        totalAmt: totalAmount,
        addItem: addToCart,
        removeItem: removeFromCart,
      }}
    >
      {props.children}
    </cartContext.Provider>
  );
};

export default CartProvider;
