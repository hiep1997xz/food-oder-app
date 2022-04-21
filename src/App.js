import React, { useState } from 'react'
import Cart from './components/Cart/Cart'
import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals'
import CartProvider from './store/CartContext'

function App() {
  const [cartIsShow, setCartIsShow] = useState(false)

  const handleShowCart = () => {
    setCartIsShow(true)
  }

  const handleHideCart = () => {
    setCartIsShow(false)
  }

  return (
    <CartProvider>
      {cartIsShow && <Cart onClose={handleHideCart} />}
      <Header handleShowCart={handleShowCart} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  )
}

export default App
