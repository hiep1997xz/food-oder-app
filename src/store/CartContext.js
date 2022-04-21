import React, { useReducer } from 'react'

export const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
})

const defaultCartState = {
  items: [],
  totalAmount: 0,
}

const carReducer = (state, action) => {
  // add item
  if(action.type === 'ADD'){
    const updateTotalAmount = state.totalAmount + action.item.price * action.item.amount;
    const existingCartItemIndex = state.items.findIndex((item) => item.id === action.item.id)
    const existingCarItem = state.items[existingCartItemIndex]
    let updateItems
    if(existingCarItem){
      const updateItem={
        ...existingCarItem,
        amount: existingCarItem.amount + action.item.amount
      }
      updateItems =[...state.items]
      updateItems[existingCartItemIndex] = updateItem
    }else{
      updateItems = state.items.concat(action.item)
    }
    return{
      items: updateItems,
      totalAmount: updateTotalAmount,
    }
  }

  // remove item
  if(action.type === 'REMOVE'){
    const existingCartItemIndex = state.items.findIndex((item) => item.id === action.id)

    const existingItem = state.items[existingCartItemIndex]

    const updateTotalAmount = state.totalAmount - existingItem.price

    let updateItems
     
    if(existingItem.amount === 1){
      updateItems = state.items.filter((item) => item.id !== action.id)
    }else{
      const updateItem = {...existingItem, amount: existingItem.amount - 1}
      updateItems=[...state.items]
      updateItems[existingCartItemIndex] = updateItem
    }
    return{
      items: updateItems,
      totalAmount: updateTotalAmount,
    }
  }
  return defaultCartState;
}

const CartProvider = (props) => {
  const[cartState, dispatchCartAction] = useReducer(carReducer, defaultCartState);

  const handleAddToCart = (item) => {
    dispatchCartAction({type: "ADD", item: item})
  }

  const handleRemoveCart = (id) => {
    dispatchCartAction({type: "REMOVE", id: id})
  }

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: handleAddToCart,
    removeItem: handleRemoveCart,
  }

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider
