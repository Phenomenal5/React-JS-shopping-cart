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
console.log(cart);



  return (
    <CartContext.Provider value={{addToCart, cart}}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext);