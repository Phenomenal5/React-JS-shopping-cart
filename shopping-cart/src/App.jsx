import { useState } from 'react'
import './App.css'
import ProductsList from './components/ProductsList'
import { CartProvider } from './context/CartContext'

function App() {
  

  return (
    <CartProvider>
      <ProductsList />
    </CartProvider>
  )
}

export default App
