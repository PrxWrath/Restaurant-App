import React from 'react'

const cartContext = React.createContext({
    items: [],
    totalAmt: 0,
    addItem: (item)=>{},
    removeItem: (item)=>{}
})

export default cartContext