import { createContext, useContext, useState } from "react"

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const isInCart = (id) => {
    return cartList.some(e => e.id === id);
  }

  const addItem = (Item) => {

    if (isInCart(Item.id)) {
      let i = cartList.findIndex(e => e.id === Item.id);
      const newCartList = cartList;
      newCartList[i].qty += Item.qty;
      setCartList(newCartList);

    } else {
      setCartList([
        ...cartList,
        Item
      ])
    }

  }

  const clearCart = () => {
    setCartList([]);
  }

  const removeItem = (id) => {
    setCartList(cartList.filter(e => e.id !== id))
  }

  const totalAmount = () => {
    return cartList.reduce((count, e) => count += e.qty, 0)
  }
  
  const totalPrice = () => {
    return cartList.reduce((count, e) => count + (e.qty * e.price), 0)
  }

  return (
    <CartContext.Provider value={{
      cartList,
      addItem,
      clearCart,
      removeItem,
      totalAmount,
      totalPrice
    }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider