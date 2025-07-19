import React from 'react'
import {ShoppingCart} from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
const Navbar = () => {
    const {cart} = useCart();
    const totalItem = cart.reduce((acc, sum) => acc + sum.quantity, 0);
    
    return (
        <nav className='flex justify-between p-4 bg-gray-500 items-center'>
            <Link to = '/'><h1>STYLEBUY</h1></Link>
            <Link to = '/shoppingCart'><span>{totalItem}</span><ShoppingCart /></Link>
            
        </nav>
    )
}

export default Navbar