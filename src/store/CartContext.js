import React from 'react'

export const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
})
const CartProvider = (props) => {
  const handleAddToCart = (item) => {}

  const handleRemoveCart = (id) => {}

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: handleAddToCart,
    removeItem: handleRemoveCart,
  }

  return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>
}

export default CartProvider
