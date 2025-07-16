import React from 'react'
import { useCart } from '../context/CartContext'

const ProductsList = () => {
    const {cart, addToCart} = useCart()
    
    const products = [
        {
            id: 1,
            name: "Tissue",
            price: 2.50
        },
        {
            id: 2,
            name: "Mop",
            price: 3.00
        },
        {
            id: 3,
            name: "Book",
            price: 1.50
        }
    ]

    return (
        <div>
            <h1 className='font-bold text-3xl text-center'>PRODUCT LIST</h1>
            {products.map(item => (
                <div key={item.id} className='border p-3 bg-gray-200 flex justify-between mb-2'>
                    <span>{item.name}</span>
                    <p>{item.price}</p>
                    <button className='rounded bg-blue-600 text-white px-3 py-1 cursor-pointer hover:bg-blue-700' onClick={() => addToCart(item)}>Add to cart</button>
                </div>
            ))}
        </div>
    )
}

export default ProductsList