import React from 'react'
import { useCart } from '../context/CartContext'

const Carts = () => {
  const {cart, removeFromCart, increaseQuantity, decreaseDuantity} = useCart();

  return (
    <div>
      <h2 className='text-xl mb-2 text-center'>CART</h2>
        {cart.map(item => (
          <div key={item.id} className='mb-2 flex justify-between border p-2'>
            <img src= {item.image} alt="" width={100}/>
            <span className='w-1/2'>{item.title}</span>
            <span>{item.quantity}</span>
            <div className='space-x-2'>
              <button onClick={() => increaseQuantity(item.id)}>➕</button>
              <button className='mx-4' onClick={() => decreaseDuantity(item.id)}>➖</button>
              <button onClick={() => removeFromCart(item.id)}>❌</button>
            </div>
          </div>
        ))}
    </div>
  )
}

export default Carts