import { useState } from 'react'
import './App.css'
import ProductsList from './components/ProductsList'
import { CartProvider } from './context/CartContext'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Carts from './components/Carts'

function App() {
  

  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/shoppingCart' element = {<Carts />}/>
          <Route path='/' element = {<ProductsList />}/>
        </Routes>
      </Router>
    </CartProvider>
  )
}

export default App
