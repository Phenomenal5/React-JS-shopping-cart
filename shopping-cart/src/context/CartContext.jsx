import { useContext, createContext, useState} from "react";

const CartContext = createContext()

export const CartProvider = ({children}) => {
  const [cart, setCart] = useState([])

const addToCart = (product) => {
  const productExist = cart.find(item => item.id === product.id);
  console.log(productExist);
  
  if(!productExist){
    setCart([...cart, {...product, quantity: 1}])
    
  } else {
    // Adding new product to cart
    setCart(cart.map(item => item.id === product.id ? {...item, quantity: item.quantity + 1} : item))
  }
}


const increaseQuantity = (productId) => {
  setCart(cart.map(item => item.id === productId ? {...item, quantity: item.quantity + 1} : item));
}

const decreaseDuantity = (productId) => {
  setCart(cart.map(item => (item.id === productId && item.quantity > 1) ? {...item, quantity: item.quantity - 1} : item));
}

const removeFromCart = (productId) => {
  setCart(cart.filter(item => item.id !== productId ))
}


console.log(cart);



  return (
    <CartContext.Provider value={{addToCart, cart, removeFromCart, increaseQuantity, decreaseDuantity}}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext);