import React, { useState } from 'react'
import cartContext from './cart-context';

const CartProvider = (props) => {

  const [cartItems,setCartItems] = useState([]);
  const [totalAmount,setTotalAmount] = useState(0);  
  const addToCart = (item) => {
    
    const itemInCart = {
        id: item.id,
        item: item.item,
        price: item.price,
        amount: item.amount
    }
    
    setCartItems((prev)=>{
        return [itemInCart,...prev]
    })
    setTotalAmount((prev)=>{
        return prev + itemInCart.price*itemInCart.amount
    })
  }
  
  const removeFromCart = (item)=>{

  }
  
  return (
    <cartContext.Provider value={
       {
        items:  cartItems,
        totalAmt: totalAmount,
        addItem: addToCart,
        removeItem: removeFromCart,
       } 
    }>
        {props.children}
    </cartContext.Provider>
  )
}

export default CartProvider